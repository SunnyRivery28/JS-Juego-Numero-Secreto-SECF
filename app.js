
let numeroSecreto = 0;
let intentos = 1;
let listaNumerosSorteados = [];
let numeroLimite = 10;

condicionesIniciales();

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(typeof(numeroDeUsuario));
    console.log(numeroDeUsuario);
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numeroDeUsuario === numeroSecreto);

        if (numeroDeUsuario === numeroSecreto) {
            asignarElementoTexto('p',`Acertaste, el número es: ${numeroSecreto} lo lograste en ${intentos} ${intentos === 1?'intento':'intentos'}.`);
            
            document.getElementById('reiniciar').removeAttribute('disabled');
        }else {
            if (numeroDeUsuario < numeroSecreto) {
                asignarElementoTexto('p','¡El número secreto es mayor!')
            } else {
                asignarElementoTexto('p','¡El número secreto es menor!')
            }
            intentos++;

            limpiarCaja();
        }
            

    return;
}

function asignarElementoTexto(elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML =texto;
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function numeroAleatorio() {
    
   numeroGenerado = Math.floor(Math.random()*numeroLimite+1);

   console.log(numeroGenerado);
   console.log(listaNumerosSorteados);
   //Si ya sorteamos todos los números

   // Si el número generado está en la lista
   if (listaNumerosSorteados.length== numeroLimite) {
        asignarElementoTexto('p','Ya se sortearon todos los números posibles');
   } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return numeroAleatorio();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
   }
   
}

function condicionesIniciales() {
    asignarElementoTexto('h1','Juego del número secreto!');

    asignarElementoTexto('P',`Indica un número del 1 al ${numeroLimite}, por favor`);

    numeroSecreto = numeroAleatorio();
    
    intentos = 1;

}

function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();
    //Indicar mensaje de intérvalo de números
    //Generar el número aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();
    
    //Deshablitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    

}

