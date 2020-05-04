const Test = require("../models/test.model.js");
// Cria e salva um novo Test
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "O conteudo nao pode ser vazio!"
        });
    }

    // Cria um novo Test
    const test = new Test({
        email: req.body.email,
        name: req.body.name,
        active: req.body.active
    });

    // Salva Test na base de dadods
    Test.create(test, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Ocorreu algum erro enquanto o novo Test era criado."
            });
        else res.send(data);
    });
};