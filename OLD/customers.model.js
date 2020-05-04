const sql = require("./db.js");

// Construtor
const Customers = function(customers) {
  this.email = customers.email,
  this.name = customers.name,
  this.active = customers.active
  
};

//montar string sql
// Adicionar registro
Customers.create = (customers, result) => {
  sql.query("INSERT INTO (email,name,active) VALUES(?,?,?)", 
  [customers.email,customers.name,customers.active], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    result(null, { id: res.id, ...customers });
  });
};


