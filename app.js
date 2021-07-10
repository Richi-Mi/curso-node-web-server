require('dotenv').config()
const express = require('express')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT

//handlebars
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials', (err) => {
    console.log(err)
})
const options = {
    nombre: 'Jose Ricardo Mendoza Castañeda',
    titulo: 'Pagina WEB osiosi'
}
//Middleware.- Funcion que se ejecuta antes de hacer cualquier otra cosa
//Servir contenido estatico
app.use( express.static('public') )

//app.get('/', (request, response) => {
//    response.sendFile(__dirname + '/public/index.html')
//})
//app.get('/generic', (req, res) => {
//    res.sendFile(__dirname + '/public/generic.html')
//})
//app.get('/elements', (req, res) => {
//    res.sendFile(__dirname + '/public/elements.html')
//})
//app.get('*', (req, res) => {
//    res.send('Error 404')
//})
app.get('/', (request, response) => {
    response.render('home', options)
})
app.get('/generic', (req, res) => {
    //res.sendFile(__dirname + '/public/generic.html')
    res.render('generic', options)
})
app.get('/elements', (req, res) => {
    //res.sendFile(__dirname + '/public/elements.html')
    res.render('elements', options)
})
app.listen(port, () => {
    console.log('Servidor Corriendo en localhost:', port)
})