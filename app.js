const express = require('express')
const hbs = require('hbs')
require('dotenv').config();

const app = express()
const port = process.env.PORT 


//utilizacion de handlebars para el renderizado de la pagina web
app.set('view engine', 'hbs')

//uso de parciales "codigo que se repite en mas de un lugar o paginas web"
hbs.registerPartials(__dirname +'/views/partials')


app.use(express.static('publicPrt'))



app.get('/', (req, res) => {
    res.render('home')
})

app.get('/menu', (req, res) => {
    res.render('menu')
})


app.get('/proyects', (req, res) => {
    res.render('proyects')
})


app.get('/skills', (req, res) => {
    res.render('skills')
})


app.get('/contacto', (req, res) => {
    res.render('contacto')
})

app.get('/vigilancia', (req, res) => {
    res.render('vigilancia')
})

app.get('/robottest', (req, res) => {
    res.render('robottest')
})

app.get('/bitacoradb', (req, res) => {
    res.render('bitacoradb')
})

app.get('/mongodb', (req, res) => {
    res.render('mongodb')
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost${port}`);
})



