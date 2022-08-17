const express = require('express')
const mysql = require('mysql')
const myconnection = require('express-myconnection')
const router = require('./routes')

const app = express()
app.set('port', 3000)

const dbOptions = {
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: 3306,
    database: 'pandoracapitulos'
}

app.use(myconnection(mysql, dbOptions, 'single'))
app.use(express.json())

app.use('/', router)

app.listen(app.get('port'), () =>{
    console.log('Listening on port', app.get('port'));
})
