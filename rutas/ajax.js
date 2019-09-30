// {
//     "titulo": "Control Dual Shock PS4",
//     "precio": "$39.990",
//     "img": "https://falabella.scene7.com/is/image/Falabella/5442857_1?$producto308$&wid=800&hei=800&qlt=70"
// }


const express = require('express')
const app = express()
const port = 3002

const axios = require('axios');

app.get('/', (req, res) => {

    respuesta = {};
    respuesta.body = req.data



    axios.post('http://n3gro.com:8081/webpay', {
            "amount": 990,
            "buyOrder": "Dick",
            "sessionId": "Dick2",
            "urlPag": "http://lcalhost:8081/webpay-result",
            "urlRedirect": "http://lcalhost:8081/webpay-result"
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

<form action="${response.data.response.url}">
<input  hidden type="text" name="TBK_TOKEN" value="${response.data.response.token}">
<input type="submit">
</form>

</body>
</html>

`
            res.end(respuestaaaa)

            //console.log(response.url);
            //console.log(response.token);
        })
        .catch(function(error) {
            console.log(error);
        });



})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))