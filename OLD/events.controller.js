const Events = require("../models/events.model.js");
// Cria e salva um novo Events
exports.create = (req, res) => {
    // Valida a requisicao
    if (!req.body) {
        res.status(400).send({
            message: "O conteudo nao pode ser vazio!"
        });
    }

    // Cria um novo Events
    const events = new Events({
        title: req.body.title,
        color: req.body.color,
        start: req.body.start,
        end: req.body.end,
        
    });

    // Salva Events na base de dados
    Events.create(events, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Ocorreu algum erro enquanto o novo Events era criado."
            });
        else res.send(data);
    });
};


// Recupera todos Events da base de dados
exports.findAll = (req, res) => {
    Events.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Ocorreu algum erro enquanto os events eram recuperados"
            });
        else res.send(data);
    });
};


// Buscar um unico Events dado o id
exports.findOne = (req, res) => {
    Events.findById(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Nao foi encontrado um Events com o id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Erro recuperando o Events com o id " + req.params.id
                });
            }
        } else res.send(data);
    });
};


// Atualiza um Events dado um id
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Conteudo nao pode ser vazio"
        });
    }

    console.log(req.body);

    Events.updateById(
        req.params.id,
        new Events(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Events nao encontrado com id ${req.params.id}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Erro atualizando Events com id " + req.params.id
                    });
                }
            } else res.send(data);
        }
    );
};


// Exclui um Events dado um id
exports.delete = (req, res) => {
    Events.remove(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Nao foi encontrado um Events com id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Nao foi possivel excluir o Events de id " + req.params.id
                });
            }
        } else res.send({
            message: `Events foi excluido com sucesso!`
        });
    });
};


