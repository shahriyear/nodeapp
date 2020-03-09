const express = require("express")
const Router = express.Router();
const mysqlConnection = require("../connection");

Router.get("/", (req, res) => {
    mysqlConnection.query("SELECT * FROM people", (err, rows, fields) => {
        if (err) {
            console.log(err)
            return false
        }
        res.send(rows)
    })
})


Router.get("/:id", (req, res) => {
    mysqlConnection.query("SELECT * FROM people WHERE id=?", [req.params.id], (err, rows, fields) => {
        if (err) {
            console.log(err)
            return false
        }
        res.send(rows)
    })
})

Router.delete("/:id", (req, res) => {
    mysqlConnection.query("DELETE FROM people WHERE id=?", [req.params.id], (err, rows, fields) => {
        if (err) {
            console.log(err)
            return false
        }
        res.send("Delete Successfully!")
    })
})

Router.post("/", (req, res) => {
    let r = req.body
    mysqlConnection.query("INSERT INTO people SET ?", r, (err, result) => {
        if (err) {
            console.log(err)
            return false
        }
        res.send("Data Inserted With ID : " + result.insertId)
    })
})

Router.put("/:id", (req, res) => {
    let r = req.body
    mysqlConnection.query("UPDATE people SET ? WHERE id= ?", [r,req.params.id], (err, result) => {
        if (err) {
            console.log(err)
            return false
        }
        res.send(result)
    })
})



module.exports = Router;