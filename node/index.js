const express = require('express')
const mysql = require('mysql2/promise')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb',
    insecureAuth : true
}
async function createConnection(){
    const connection = await mysql.createConnection(config)
    return connection
}

async function insert(connection){
    const command = `INSERT INTO people (name) VALUES(?)`
    const values = `pessoa`
    return await connection.query(command, values)
}

async function select(connection){
    const [rows] = await connection.query('SELECT * FROM people;')
    return rows
}

app.get('/', (req, res) => {

    (async () => {
        const connection = await createConnection()
        await insert(connection)
        const rows = await select(connection)        
        connection.end()
        
        let names = ""
        rows.forEach(row => {
            names += `<li>${row.name} ${row.id}</li>`
        });        

        let html = `<h1>Full Cycle Rocks!</h1><ul>${names}</ul>`
        
        res.send(html)

      })();
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})

