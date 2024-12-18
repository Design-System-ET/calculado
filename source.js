function escribir(valor) {
    const numero = document.getElementById("dis");
    const contenidoActual = numero.textContent;

    const ultimaSecuencia = contenidoActual.split(/[\+\-\*\/]/).pop();

    if (ultimaSecuencia.length < 9) {
        if (contenidoActual === "0") {
            numero.textContent = valor; 
        } else {
            numero.textContent += valor;
        }
    }
}

function borrar(){
    valor_display = document.getElementById("dis");
    valor_display.textContent = "0";
}

function operacion(simbolo){

    valor_display = document.getElementById("dis");
    ultimo = valor_display.textContent.slice(-1);

    if(! ["+", "-", "*", "/"].includes(ultimo)){
        valor_display.textContent += simbolo;
    }

}

function resultado() {
    const numero = document.getElementById("dis");
    try {
   
        numero.textContent = eval(numero.textContent);
    } catch (error) {

        numero.textContent = "Error";
    }
}



function calculadora(){
    const modal = document.getElementById('popup');
    const contenido = document.getElementById('contenido');

    fetch('calculator.html')
        .then(response => response.text())
        .then(data => {
            contenido.innerHTML = data; 
            modal.style.display = 'flex';
        })
        .catch(error => console.error('Error al cargar la página:', error));
}

function cerrarModal() {
    const modal = document.getElementById('popup');
    modal.style.display = 'none';
}