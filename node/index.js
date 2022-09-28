const express = require('express')
const app     = express()
const port    = 3000

const config = {
    host:     'db',
    user:     'root',
    password: 'root',
    database: 'nodedb'
};

const mysql      = require('mysql')
const connection = mysql.createConnection(config)

const createSql = `
    CREATE TABLE IF NOT EXISTS people (id INT NOT NULL AUTO_INCREMENT, name VARCHAR(50), PRIMARY KEY (id));
  `;
    const insertSql = `
    INSERT INTO people (name) values ('Bruno'), ('Murilo');
  `;

connection.query(createSql)  
connection.query(insertSql)
connection.end()

app.get('/',(req,res) => {
    const title = '<h1>Full Cycle Rocks - Bruno!</h1>';
    const register = '<h2>Registro inserido no bando de dados</h2>'
    res.send(title + register);
})



app.listen(port,() => {
    console.log('Rodando na porta ' + port)
})