module.exports = app => {
    const test = require('../controllers/test.routes.js');
    
    // Cria novo test
    app.post('/test', test.create);
    
    // Lista todos test
    app.get('/test/', test.findAll);

    // Lista test baseado no id
    app.get('/test/:id', test.findOne);
    
    // Atualiza test baseado no id
    app.put('/test/:id', test.update);

    // Exclui test baseado no id
    app.delete('/test/:id', test.delete);

};