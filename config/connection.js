// import this file into ORM file

// set up MYSQL connection.
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "galaxy24",
    database: "burgers_db"
});

connection.connect(function(err) {
    if (err) {
        console.log("error connection " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// exporting the connection to MYSQL database.
module.exports = connection;