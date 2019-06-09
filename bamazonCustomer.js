var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",

    port: 3000,
    password: "",
    database: "bamazon.db"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id" + connection.threadId);
});

function afterConnection () {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.log(res);
        connection.end()
    })
}