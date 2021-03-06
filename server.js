const express = require('express')
const app = express()

const hbs = require('hbs')
require('./hbs/helpers/helpers')

// Port
const port = process.env.PORT || 3000

// sirviendo archivos estaticos
app.use(express.static(__dirname + '/public'))

//Express hbs engine
hbs.registerPartials(__dirname + '/views/partial')
app.set('view engine', 'hbs')


// sirviendo rutas  especificas
app.get('/', (req, res)=> {

    res.render('home', {
        nombre: 'Augusto'
    })
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.listen(port, ()=> console.log('listeing in 3000 port'))