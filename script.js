// Obtener elementos del DOM
const diasAsistidosEl = document.getElementById("diasAsistidos");
const diasRestantesEl = document.getElementById("diasRestantes");
const progresoEl = document.getElementById("miProgreso");

// Configurar valores iniciales
const totalDias = 20; 
let diasAsistidos = localStorage.getItem("diasAsistidos") 
    ? parseInt(localStorage.getItem("diasAsistidos")) 
    : 0;

// Actualizar la interfaz con los valores guardados
diasAsistidosEl.innerText = diasAsistidos;
diasRestantesEl.innerText = totalDias - diasAsistidos;
progresoEl.style.width = (diasAsistidos / totalDias) * 100 + "%";

// Función para aumentar el progreso
function aumentarProgreso() {
    if (diasAsistidos < totalDias) {
        diasAsistidos++; // Incrementa los días asistidos
        localStorage.setItem("diasAsistidos", diasAsistidos); 

        // Actualiza los valores en la interfaz
        diasAsistidosEl.innerText = diasAsistidos;
        diasRestantesEl.innerText = totalDias - diasAsistidos;

        // Aumenta la barra de progreso
        let progreso = (diasAsistidos / totalDias) * 100;
        progresoEl.style.width = progreso + "%";
    }
}

function resetearProgreso() {
    diasAsistidos = 0; // Reiniciar contador
    localStorage.setItem("diasAsistidos", diasAsistidos); 

    diasAsistidosEl.innerText = diasAsistidos;
    diasRestantesEl.innerText = totalDias;
    progresoEl.style.width = "0%";

}
