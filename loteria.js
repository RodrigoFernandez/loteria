/*
 * loteria.js
 *
 * */

var animales_total = ["Canguro", "Águila", "Elefante", "Cocodrilo", "Jirafa",
                "Tucán", "Oso", "Búho", "Cebra", "León", "Hiena",
                "Rinoceronte", "Serpiente", "Mono", "Tigre", "Hipopotamo"];

var animales = [];

var getImagenAnimal = (unAnimal) => {

    let imagenes_animales = {"Canguro": "img/canguro.svg",
                        "Águila": "img/aguila.svg",
                        "Elefante": "img/elefante.svg",
                        "Cocodrilo": "img/cocodrilo.svg",
                        "Jirafa": "img/jirafa.svg",
                        "Tucán": "img/tucan.svg",
                        "Oso": "img/oso.svg",
                        "Búho": "img/buho.svg",
                        "Cebra": "img/cebra.svg",
                        "León": "img/leon.svg",
                        "Hiena": "img/hiena.svg",
                        "Rinoceronte": "img/rinoceronte.svg",
                        "Serpiente": "img/serpiente.svg",
                        "Mono": "img/mono.svg",
                        "Tigre": "img/tigre.svg",
                        "Hipopotamo": "img/hipopotamo.svg",};
    return imagenes_animales[unAnimal];
};

var accionIniciar = () => {
    animales = animales_total;
    $('#btnSacar').prop('disabled', false);
    $('#resultado').text("");
    $('#imagen').attr('src', "");
    $('#estado').text("Cantidad restante: " + animales.length);
};

var accionSacar = () => {
    let elegido = animales[Math.floor(Math.random() * animales.length)];
    animales = animales.filter(animal => animal != elegido);

    $('#resultado').text(elegido);
    $('#imagen').attr('src', getImagenAnimal(elegido));
    $('#estado').text("Cantidad restante: " + animales.length);

    if(animales.length == 0){
        $('#btnSacar').prop('disabled', true);
    }
};

$(function(){
    $('#btnIniciar').button().on('click', accionIniciar);
    $('#btnSacar').button().on('click', accionSacar);

    accionIniciar();
});
