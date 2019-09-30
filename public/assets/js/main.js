// // $(function() {


// //     const $form = $('.formBolsa');

// //     $form.submit(e => {
// //         e.preventDefault();
// //         alert(e);
// //     });

// // });

// function data(datos) {
//     //alert(datos);

//     var http = new XMLHttpRequest();
//     var url = "http://n3gro.com:8081/webpay";
//     var data = { "amount": datos, "buyOrder": "noseeee", "sessionId": "ASDASDASTTTd", "urlPag": "https://getbootstrap.com/", "urlRedirect": "https://getbootstrap.com/" };
//     http.open("POST", url, true);

//     //Send the proper header information along with the request
//     http.setRequestHeader("Content-type", "application/json;charset=UTF-8");
//     //http.setRequestHeader("Postman-Token", "fd8d4c93-63bd-4a97-a39a-76f8bd7f7372,9cc14e8c-c33d-4e19-9b50-c4a0f25e1eab");


//     http.onreadystatechange = function() { //Call a function when the state changes.
//             if (http.readyState == 4 && http.status == 200) {
//                 //alert(http.responseText);
//                 var respuesta = JSON.parse(http.response);
//                 console.log(respuesta.response.token);
//                 console.log(respuesta.response.url);
//                 //var { response } = respuesta;
//                 data = respuesta.response.token;
//                 url = respuesta.response.url;

//                 todo = {
//                     data,
//                     url
//                 }

//                 window.location = `http://localhost:3001/pagar/${todo}`;

//                 //alert(url);

//                 // http = new XMLHttpRequest();

//                 // http.open("POST", url + data, true);

//                 // http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

//                 // http.onreadystatechange = function() {

//                 //     if (http.readyState == 4 && http.status == 200) {
//                 //         //window.location = http.responseURL;
//                 //         alert('hola');
//                 //     }

//                 // }

//                 //http.send({ token_ws: data });
//             }
//         }
//         //console.log(data);
//     http.send(JSON.stringify(data));


//     // $.ajax({
//     //     type: "POST", // la variable type guarda el tipo de la peticion GET,POST,..
//     //     url: "http://demo5391622.mockable.io/", //url guarda la ruta hacia donde se hace la peticion
//     //     data: { amount: datos, buyOrder: "noseeee", sessionId: "ASDASDASTTT", urlPag: "https://getbootstrap.com/", urlRedirect: "https://getbootstrap.com/" }, // data recive un objeto con la informacion que se enviara al servidor
//     //     success: function(datos) { //success es una funcion que se utiliza si el servidor retorna informacion
//     //         console.log(datos);
//     //     },
//     //     dataType: "json" // El tipo de datos esperados del servidor. Valor predeterminado: Intelligent Guess (xml, json, script, text, html).
//     // });
// }

$(document).ready(function() {

    $("#continuar").click(function() {
        alert("pasooo");
        var data = localStorage.getItem('cosas');
        $.ajax({
            type: 'post',
            url: 'http://028b7666.ngrok.io/webpay',
            data: data,
            dataType: 'json',
            contentType: 'application/json',
            error: () => {
                alert('malo');
            },
            beforeSend: () => {
                // alert("pasando");
            },
            sucess: (a) => {
                alert(a);
            }
        });
    });
});




// // function getFormData() {
// //     var $form = $(this).parents('form');
// //     var $titulo = $form.find('.titulo');


// //     alert($titulo.val());
// // }