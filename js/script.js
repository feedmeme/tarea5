//Función para ocultar contenido de banderas al ingresar a la página web

ocultarBanderas();

//Función para ocultar contenido de banderas
function ocultarBanderas() {
    let bandera1 = document.querySelector('#ejercicio1');
    let bandera2 = document.querySelector('#ejercicio2');
    let bandera3 = document.querySelector('#ejercicio3');
    let bandera4 = document.querySelector('#ejercicio4');
    let bandera5 = document.querySelector('#ejercicio5');

    bandera1.style.display = 'none';
    bandera2.style.display = 'none';
    bandera3.style.display = 'none';
    bandera4.style.display = 'none';
    bandera5.style.display = 'none';

}

//Función para desplegar banderas segun elección
function desplegarBandera() {
    let bandera = document.getElementById('banderas').value;

    let bandera1 = document.querySelector('#ejercicio1');
    let bandera2 = document.querySelector('#ejercicio2');
    let bandera3 = document.querySelector('#ejercicio3');
    let bandera4 = document.querySelector('#ejercicio4');
    let bandera5 = document.querySelector('#ejercicio5');


    if (bandera == "ejercicio1") {
        bandera1.style.display = 'block';
        bandera2.style.display = 'none';
        bandera3.style.display = 'none';
        bandera4.style.display = 'none';
        bandera5.style.display = 'none';



    } else if (bandera == 'ejercicio2') {
        bandera2.style.display = 'block';
        bandera1.style.display = 'none';
        bandera3.style.display = 'none';
        bandera4.style.display = 'none';
        bandera5.style.display = 'none';


    } else if (bandera == 'ejercicio3') {
        bandera3.style.display = 'block';
        bandera1.style.display = 'none';
        bandera2.style.display = 'none';
        bandera4.style.display = 'none';
        bandera5.style.display = 'none';

    } else if (bandera == 'ejercicio4') {
        bandera4.style.display = 'block';
        bandera1.style.display = 'none';
        bandera2.style.display = 'none';
        bandera3.style.display = 'none';
        bandera5.style.display = 'none';


    } else if (bandera == 'ejercicio5') {
        bandera5.style.display = 'block';
        bandera1.style.display = 'none';
        bandera2.style.display = 'none';
        bandera3.style.display = 'none';
        bandera4.style.display = 'none';
    } else if (bandera == 'seleccionar') {
        ocultarBanderas();
    }
}