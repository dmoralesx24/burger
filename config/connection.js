// import this file into ORM file
let mysql = require("mysql");
let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "galaxy24",
        database: "burgers_db"
    });
};
// set up MYSQL connection.


connection.connect(function(err) {
    if (err) {
        console.log("error connection " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// exporting the connection to MYSQL database.
module.exports = connection;