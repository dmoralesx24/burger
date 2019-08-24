// selectAll() method
// insertOne()
// updateOne() 
// import MYSQL connection
const connection = require("../config/connection");

// this is to print SQL syntax for 3 question marks for 3 unknown values 
function questionMarks(num) {
    let arr = [];

    for (let i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

// helper function to convert object key/value pairs to SQL syntax
function objSql(ob) {
    let arr = [];

    for (let key in ob) {
        let value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }

            arr.push(key + "=" + value);
        }
    }

    return arr.toString();
};

// object for all of our SQL statements

let orm = {
    selectAll: function(tableInput, cb) {
        let queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, results) {
            if (err) {
                throw err;
            }
            cb(results);
        });
    },
    insertOne: function(table, col, vals, cb) {
        let queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") "
        queryString += "VALUES ("
        queryString += questionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function(err, results) {
            if (err) {
                throw err;
            }

            cb(results);
        });
    },
    updateOne: function(table, objColVals, condition, cb) {
        let queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result)
        });
    },
    deleteOne: function(table, condition, cb) {
        var queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
};

// exporting this object of functions orm
module.exports = orm;