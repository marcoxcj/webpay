const { Router } = require('express');
const router = Router();

const axios = require('axios');

//const fetch = require('node-fetch');

router.post('/ej', (req, res) => {
    res.render('pagarForm');
})

router.post('/pagar', (req, res) => {

    var precio = req.body.precio;

    console.log(precio);

    //res.render('pagarForm', { precio });

    axios.post('http://n3gro.com:8081/webpay', {
            "totalPrice": precio,
            // "buyOrder": "dsdas",
            // "sessionId": "dsadsadsdsds",
            "billingId": Math.round(Math.random() * 99999999),
            "urlRedirect": "http://localhost:3001/ej"
        })
        .then(function(response) {
            console.log(response.data.response.url)
            console.log(response.data.response.token)

            var respuestaaaa = `

                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                    <meta charset="UTF-8">
                    <title>Document</title>
                    </head>
                    <body>

                    <form action="${response.data.response.url}" name="pago"">
                    <input  hidden type="text" name="TBK_TOKEN" value="${response.data.response.token}">
                    <input type="submit" hidden>
                    
                    </form>
                    <script>
                     
                    document.pago.submit();
                    localStorage.clear();
                    </script>
                    </body>
                    </html>

`
            res.end(respuestaaaa);

            //console.log(response.url);
            //console.log(response.token);
        })
        .catch(function(error) {
            console.log(error);
        });
    // const { precio } = req.body;
    // const oprecio = {
    //     precio
    // }

    // res.send(oprecio).json;

    // res.write(precio);
    //res.render('pagarForm', {});
    // const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
    // const users = await respuesta.json();
    // res.json(users);
});

var cosas = '';
var otras = '';
router.get('/bolsa', async(req, res) => {

    //console.log(req.query.cosas);
    try {
        cosas = await req.query.cosas;
        // console.log(cosas);
        otras = await eval(cosas);
        console.log(otras);
        res.render('bolsa', { otras });
    } catch (e) {
        console.log(e);
    }

    // const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
    // const users = await respuesta.json();
    // res.json(users);
});

module.exports = router;