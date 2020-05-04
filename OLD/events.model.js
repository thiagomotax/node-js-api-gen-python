const sql = require("./db.js");

// Construtor
const Events = function(events) {
  this.title = events.title,
  this.color = events.color,
  this.start = events.start,
  this.end = events.end
  
};

//montar string sql
// Adicionar registro
Events.create = (events, result) => {
  sql.query("INSERT INTO (title,color,start,end) VALUES(?,?,?,?)", 
  [events.title,events.color,events.start,events.end], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    result(null, { id: res.id, ...events });
  });
};


