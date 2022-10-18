/*const express = require('express')
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
})*/

const express = require('express')
const mysql = require('mysql');
const app = express()
const port = 3000

var conn = mysql.createConnection({
    host: "db",
    user: "root",
    password: "9632",
    database: "nodedb"
});

conn.connect((err) => {
    if (err) throw err;
    
    const create = "CREATE TABLE IF NOT EXISTS `users` (`id` int NOT NULL auto_increment, `name` varchar(255) NOT NULL default '', PRIMARY KEY (`id`))"
    conn.query(create, (err, res) => {
        if (err) throw err;

        const insert = "INSERT INTO `users` (name) SELECT * FROM (SELECT 'Bruno') AS Tmp WHERE NOT EXISTS (SELECT `name` FROM `users` WHERE name = 'Bruno')"
        conn.query(insert, (err, res) => {
            if (err) throw err;
        })
    });    
});

app.get('/', (req, res) => {
    var msg = "<div style='font-family:sans-serif;'><h1>Fullcycle</h1>";

    conn.query("SELECT name FROM `users` WHERE `id` = 1", (err, result) => {
        msg += "<p>" + result[0].name + "</p></div>";
        console.log(result);
        res.send(msg);
    })
});

app.listen(port, () => {
    console.log("Rodando na porta " + port);
});