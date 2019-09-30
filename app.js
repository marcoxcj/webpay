const express = require('express');
const app = express();
const cosas = require('./bd/bd.json');
const bodyparse = require('body-parser');


const router = express.Router();

app.use(bodyparse.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));


app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3001);
app.set('json spaces', 2);

//app.set('view engine', 'html');
app.use(require('./rutas/pagar'));

//console.log(cosas);

app.get('/', (req, res) => {

    res.render('../index', { cs: cosas });
    // const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
    // const users = await respuesta.json();
    // res.json(users);
});



//empezando el servidor
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});