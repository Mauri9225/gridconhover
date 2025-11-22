const matriz = document.getElementById("matriz");
const numEl = document.getElementById("num");
const paridadEl = document.getElementById("paridad");
const multiploEl = document.getElementById("multiplo3");

// Crear la matriz 5x5
for (let i = 1; i <= 25; i++) {
    const celda = document.createElement("div");
    celda.classList.add("celda");
    celda.textContent = i;
    celda.dataset.valor = i;

    celda.addEventListener("mouseover", mostrarInfo);

    matriz.appendChild(celda);
}

// Función que muestra la información bajo la matriz
function mostrarInfo(e) {
    const n = parseInt(e.target.dataset.valor);

    numEl.textContent = n;
    paridadEl.textContent = (n % 2 === 0) ? "Par" : "Impar";
    multiploEl.textContent = (n % 3 === 0) ? "Sí" : "No";
}
