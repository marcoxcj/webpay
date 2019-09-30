// class Articulo {
//     constructor(precio, descripcion) {
//         this.precio = precio;
//         this.descripcion = descripcion;
//     }
// }


var cosas = [];
var articulos;
var co;


const borrar = () => {

}

const limpiar = () => {
    localStorage.clear();
    window.location = "http://localhost:3001";
}


const cargando = () => {
    var div = document.getElementById("carga");
    var op = document.getElementById("op");
    op.style.filter = "blur(5px)";
    op.style.opacity = "0.5";
    div.style.display = "initial";
    div.innerHTML = `<div id='gif'><img src="assets/img/cargando.gif" alt=""></div>`;

    const res = new Promise((resolve, reject) => {
        setTimeout(() => {
            div.style.display = "none";
            resolve(true);
        }, 2000);

    });

    return res;
}



const guardar = async(precio, descripcion, img) => {


    const objeto = {
        precio,
        descripcion,
        img
    }

    if (await cargar() === null) {
        //console.log(cargar('cosas'));
        cosas.push(objeto);
        await localStorage.setItem('cosas', JSON.stringify(cosas));
        articulos = await cargar();
        console.log(articulos, 'if');
        const a = await cargando();

        bolsa();


    } else {
        articulos = await cargar();
        articulos.push(objeto);
        localStorage.setItem('cosas', JSON.stringify(articulos));


        console.log(articulos, 'else');
        const a = await cargando();
        bolsa();

    }

    //     if (cargar(cosas) === undefined) {
    //         cosas.push(objeto);
    //         articulos = cargar(cosas);
    //     } else {
    //         articulos.push(objeto);
    //         articulos = cargar(cosas);
    //         //articulos = cargar(articulos);
    //         sessionStorage.setItem('cosas', JSON.stringify(articulos));
    //         console.log(articulos);
    //}

}






const cargar = async() => {

    co = await localStorage.getItem('cosas');
    console.log(co, 'cargar');
    var articuloss = eval(co);
    return articuloss;
}

const bolsa = async() => {
    var cos = await cargar();
    console.log(cos, 'el cos');
    if (cos === null) {
        alert('No hay nada en tu bolsa');
    } else {
        var articulo = await JSON.stringify(cos);
        console.log(articulo, 'bolsaaaa');

        if (articulo) {
            window.location = "http://localhost:3001/bolsa?cosas=" + articulo;
        }
    }
}

// module.exports = {
//     guardar
// };