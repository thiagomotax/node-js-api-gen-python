module.exports = app => {
    const events = require('../controllers/events.routes.js');

    // Cria novo events
    app.post('/events', events.create);
    
    // Lista todos events
    app.get('/events/', events.findAll);

    // Lista events baseado no id
    app.get('/events/:id', events.findOne);
    
    // Atualiza events baseado no id
    app.put('/events/:id', events.update);

    // Exclui events baseado no id
    app.delete('/events/:id', events.delete);

};