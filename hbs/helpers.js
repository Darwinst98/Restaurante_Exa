const fs = require('fs');
const hbs = require('hbs');
var rawdataCategoria = fs.readFileSync('public/data/categoria.json', 'utf8');
var categorias = JSON.parse(rawdataCategoria);

var rawdata = fs.readFileSync('public/data/platos.json', 'utf8');
var platos = JSON.parse(rawdata);

hbs.registerHelper("getPlatos", function (){
    var plato = "";
    platos.forEach( objeto => {
        plato += '<div class="menu-comidas-item">';
        plato += '<div class="img-plato">';
        plato += '<img src="'+objeto.img+'" alt="Pizza Hawayana" class="img-responsive">';
        plato += '</div>';
        plato += '<div class="desc-plato-menu">';
        plato += '<h4>'+objeto.nombre+'</h4>';
        plato += '<p class="precio-plato">'+objeto.precio+'</p>';
        plato += ' <p class="desc-plato">'+objeto.descripcion+'</p>';
        plato += '<br>';
        plato += '<a href="#" class="boton boton-color">Ordenar</a>';
        plato += '</div>';
        plato += '<div class="limpiar"></div>';
        plato += '</div>';
    });    
    return new hbs.SafeString(plato);
    
});

hbs.registerHelper("getCategoria", function (){
    var strCat = "";
    categorias.forEach( objeto => {
        strCat += '<a href="#">';
        strCat += '<div class="cuadro-3 float-contenedor">';              
        strCat += '<img src="'+objeto.img+'" alt="'+objeto.nombre+'" class="img-responsive img-redondeado">';
        strCat += '<h3 class="float-text text-blanco">'+objeto.nombre+'</h3>';
        strCat += '</div>';
        strCat += '</a>';
       
    }); 

    //console.log(pro);
    return new hbs.SafeString(strCat);
});