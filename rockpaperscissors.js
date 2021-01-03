// Selectores

    let piedra = document.querySelector("#botonPiedra");
    let papel = document.querySelector("#botonPapel");
    let tijera = document.querySelector("#botonTijera");

    const boton = document.querySelectorAll('button');


// Eventos onclick

let respuestaPiedra = piedra.addEventListener("click", function (){juego(piedra.value)});
let respuestaPapel = papel.addEventListener("click", () => {juego(papel.value)});
let respuestaTijera = tijera.addEventListener("click", () => {juego(tijera.value)});




// Variables para almacenar puntuacion
    let puntosMios = 0;
    let puntosPC = 0;

// Generador de números aleatorios que mostrará un array con las opciones del juego.

    let opciones = ["piedra", "papel", "tijera"]

    function randomNum (min, max){
        return Math.floor(Math.random()*(max - min)) + min;
    };

    function computerPlay(){
        let resultadoRandom = randomNum(0,3)
        let resultadoPC = opciones[resultadoRandom];
        let respuestaDelPC = resultadoPC;
        document.getElementById('respuestaDelPC').innerHTML = "El ordenador ha elegido: "+resultadoPC;
        return resultadoPC;

    };
    


// Lógica del juego 

    function juego(playerSelection){
        let pcSelection = computerPlay(); 
        let resultadoTexto= "";

        switch (playerSelection){
            case "piedra":
                if (playerSelection === "piedra" && pcSelection === "piedra") {
                    
                        resultadoTexto = "Has empatado";
                } else if(playerSelection === "piedra" && pcSelection === "papel"){
                    
                        resultadoTexto = "Has perdido";
                    puntosPC++;
                } else { 
                        resultadoTexto = "Has ganado";
                    puntosMios++;
                    };
                break;

            case "papel":
                if (playerSelection === "papel" && pcSelection === "piedra") {
                    
                        resultadoTexto = "Has ganado";
                    puntosMios++;
                } else if(playerSelection === "papel" && pcSelection === "papel"){
                    
                        resultadoTexto = "Has empatado";
                } else {
                        resultadoTexto = "Has perdido";
                        puntosPC++;
                    };
                    
                break;

            case "tijera":
                if (playerSelection === "tijera" && pcSelection === "piedra") {
                    
                        resultadoTexto = "Has perdido";
                    puntosPC++;
                } else if(playerSelection === "tijera" && pcSelection === "papel"){
                    
                        resultadoTexto = "Has ganado";
                        
                    puntosMios++;
                } else {
                        resultadoTexto = "Has empatado";
                    };
                break;
            
        }
        if (puntosMios == 5) {
            resultadoTexto += '<br><br>Has ganado! Actualiza la página para seguir jugando'
            disableButtons()
        }else if (puntosPC == 5) {
            resultadoTexto += '<br><br>El pc ha ganado! Actualiza la página para seguir jugando'
            disableButtons()
        }
        console.log("Tus puntos son: "+puntosMios);
        console.log("Los puntos del pc son: "+puntosPC);
        document.getElementById('result').innerHTML = resultadoTexto;

        document.getElementById('puntosMios').innerHTML =  "Mis puntos: " + puntosMios;
        document.getElementById('puntosPC').innerHTML = "Puntos del ordenador: " + puntosPC;
            return;
    }

    // Deshabilitar botones

    function disableButtons() {
        boton.forEach(elem => {
            elem.disabled = true
        })
    }

