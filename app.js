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


app.get('/proyects', (req, res) => {
    res.render('proyects')
})


app.get('/contacto', (req, res) => {
    res.render('contacto')
})



app.listen(port, () => {
    console.log(`Example app listening at http://localhost${port}`);
})



