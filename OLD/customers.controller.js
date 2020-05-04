const Customers = require("../models/customers.model.js");
// Cria e salva um novo Customers
exports.create = (req, res) => {
    // Valida a requisicao
    if (!req.body) {
        res.status(400).send({
            message: "O conteudo nao pode ser vazio!"
        });
    }

    // Cria um novo Customers
    const customers = new Customers({
        email: req.body.email,
        name: req.body.name,
        active: req.body.active,
        
    });

    // Salva Customers na base de dados
    Customers.create(customers, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Ocorreu algum erro enquanto o novo Customers era criado."
            });
        else res.send(data);
    });
};


// Recupera todos Customers da base de dados
exports.findAll = (req, res) => {
    Customers.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Ocorreu algum erro enquanto os customers eram recuperados"
            });
        else res.send(data);
    });
};


// Buscar um unico Customers dado o id
exports.findOne = (req, res) => {
    Customers.findById(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Nao foi encontrado um Customers com o id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Erro recuperando o Customers com o id " + req.params.id
                });
            }
        } else res.send(data);
    });
};


// Atualiza um Customers dado um id
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Conteudo nao pode ser vazio"
        });
    }

    console.log(req.body);

    Customers.updateById(
        req.params.id,
        new Customers(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Customers nao encontrado com id ${req.params.id}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Erro atualizando Customers com id " + req.params.id
                    });
                }
            } else res.send(data);
        }
    );
};


// Exclui um Customers dado um id
exports.delete = (req, res) => {
    Customers.remove(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Nao foi encontrado um Customers com id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Nao foi possivel excluir o Customers de id " + req.params.id
                });
            }
        } else res.send({
            message: `Customers foi excluido com sucesso!`
        });
    });
};


