// Obtener referencias a los elementos de la interfaz
const participantNameInput = document.getElementById("participantNameInput");
const startButton = document.getElementById("startButton");
const participantMessage = document.getElementById("participantMessage");
const gameSection = document.getElementById("gameSection");
const nameInput = document.getElementById("nameInput");
const addButton = document.getElementById("addButton");
const drawButton = document.getElementById("drawButton");
const restartButton = document.getElementById("restartButton");
const exitButton = document.getElementById("exitButton");
const nameList = document.getElementById("nameList");
const resultDisplay = document.getElementById("resultDisplay");
const errorMessage = document.getElementById("errorMessage");
const farewellMessage = document.getElementById("farewellMessage");

// Lista para almacenar los nombres
const names = [];

// Función para validar el nombre
function isValidName(name) {
    const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/; // Acepta solo letras y espacios
    return nameRegex.test(name);
}

// Función para comenzar el juego
startButton.addEventListener("click", () => {
    const participantName = participantNameInput.value.trim(); // Eliminar espacios
    if (participantName === "" || !isValidName(participantName)) {
        participantMessage.textContent = "Datos erróneos. Proporciona un nombre válido para comenzar (solo letras).";
    } else {
        participantMessage.textContent = `¡Hola ${participantName}! Bienvenid@ al juego del Amigo Secreto. Proporciona un nombre real y recuerda que no se aceptan números ni campos vacíos.`;
        participantNameInput.value = ""; // Limpiar el campo
        gameSection.style.display = "block"; // Mostrar la sección del juego
    }
});

// Función para agregar un nombre a la lista
addButton.addEventListener("click", () => {
    const name = nameInput.value.trim(); // Eliminar espacios en blanco
    if (name === "" || !isValidName(name)) {
        errorMessage.textContent = "Datos erróneos. Por favor, ingresa un nombre válido (solo letras).";
    } else {
        names.push(name);
        errorMessage.textContent = ""; // Limpiar mensaje de error
        updateNameList();
        nameInput.value = ""; // Limpiar el campo de texto
    }
});

// Función para actualizar la visualización de la lista
function updateNameList() {
    nameList.innerHTML = ""; // Limpiar la lista
    names.forEach((name, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${index + 1}. ${name}`;
        nameList.appendChild(listItem);
    });
}

// Función para realizar el sorteo
drawButton.addEventListener("click", () => {
    if (names.length === 0) {
        alert("La lista está vacía. ¡Por favor, agrega algunos nombres primero!");
    } else {
        const randomIndex = Math.floor(Math.random() * names.length);
        const winner = names[randomIndex];
        resultDisplay.textContent = `🎉 El ganador es: #${randomIndex + 1} - ${winner} 🎉`;
    }
});

// Función para reiniciar el juego
restartButton.addEventListener("click", () => {
    names.length = 0; // Vaciar la lista
    updateNameList();
    resultDisplay.textContent = "";
    errorMessage.textContent = "";
    farewellMessage.textContent = "";
    participantMessage.textContent = "";
    gameSection.style.display = "none"; // Ocultar la sección del juego
    alert("El juego ha sido reiniciado. Puedes comenzar nuevamente.");
});

// Función para salir del juego
exitButton.addEventListener("click", () => {
    farewellMessage.textContent = "Gracias por participar. ¡Hasta luego!";
    alert("Gracias por participar. ¡Hasta luego!");
    // Intentar cerrar la ventana (puede no funcionar en navegadores modernos)
    window.close();
});
