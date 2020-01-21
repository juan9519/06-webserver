const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'))

//Express HBS Engine para páginas web dinámicas
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');


app.get('/', function(req, res) {
    //res.send('Hola Mundo')

    res.render('home', {
        titulo: "Home | Ejemplo de HBS",
        nombre: "Juan"
    });
})
app.get('/about', function(req, res) {

    res.render('about', {
        titulo: 'About'
    });
});

app.listen(port, () => {
    console.log(`Escuchando en puerto ${port}`);
});