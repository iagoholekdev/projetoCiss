const express = require('express');
const app = express();
var mysql = require('mysql');
const cors = require('cors');
const database = mysql.createConnection({
    host: "localhost",
    user: "root",
    port:  '/var/run/mysqld/mysqld.sock',
    password: "admin",
    database: "projetociss",
});

const employeeController = require('./controller/employeeController.js');
const employeControllerInstance = new employeeController();

app.use(cors());
app.use(express.json());

app.post("/insertEmployee", (req, res) => {
    try {
      employeControllerInstance.insertEmployee(req.body, database);
      res.send("Funcionário cadastrado com sucesso!");
    } catch (error) {
      res.send(error);
    }
   }
);

app.get("/getEmployee", (req, res) => {
    let sql = "SELECT * FROM funcionario";

    database.query(sql, (err, result) => {
        if (err) console.log(err);
        else res.send(result);
    });
});

app.post("/editEmployee", (req, res) => {
    const {id} = req.body;
    const {Nome} = req.body;
    const {Sobrenome} = req.body;
    const {email} = req.body;
    const {NIS} = req.body;

    let sql = "update funcionario set Nome = ?, Sobrenome = ?, email = ?, NIS = ? where id = ?"

    database.query(sql, [Nome, Sobrenome, email, NIS, id], (err, result) => {
        if (err) console.log(err)
        else res.send(result);
    })

});

app.delete("deleteEmployee/:id", (req, res) =>{
    const {id} = req.body;
    let sql = "Delete from Funcionarios where id = ?"
    database.query(sql, [id], (err, result) =>  {
        if (err) console.log(err)
        else res.send(result);
    })
})

app.listen(8080, () => {console.log("Server is running on port 8080")});

