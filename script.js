
// Define una media query para evaluar si el ancho de la pantalla es máximo de 768px
const mediumBP = matchMedia("(max-width: 768px)");

// Función para cambiar el color de fondo del body según el estado de la media query
const changeSize = (mql) => {
  // Si la media query coincide (matches), establece el fondo en rojo, de lo contrario, en amarillo
  mql.matches
    ? (document.body.style.backgroundColor = "red")
    : (document.body.style.backgroundColor = "yellow");
};

// Llama a la función changeSize con el estado inicial de la media query
changeSize(mediumBP);

// Agrega un event listener para detectar cambios en la media query
mediumBP.addEventListener("change", (e) => changeSize(e));
