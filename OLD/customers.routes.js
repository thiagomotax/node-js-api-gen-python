module.exports = app => {
    const customers = require('../controllers/customers.routes.js');

    // Cria novo customers
    app.post('/customers', customers.create);
    
    // Lista todos customers
    app.get('/customers/', customers.findAll);

    // Lista customers baseado no id
    app.get('/customers/:id', customers.findOne);
    
    // Atualiza customers baseado no id
    app.put('/customers/:id', customers.update);

    // Exclui customers baseado no id
    app.delete('/customers/:id', customers.delete);

};