const mysql = require("mysql")

var mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456@@#",
    database: "nodeapp_db",
    multipleStatements: true,
})


mysqlConnection.connect((err) => {
    if (err) {
        // console.log(err)
        console.log("Connection Failed!")
        return false;
    }

    console.log("Connected!")

})

module.exports = mysqlConnection;