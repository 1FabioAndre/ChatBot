
const nombre_input = document.querySelector("#nombre");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nombre_input.value;

  div.innerHTML = "<p> Hola" + nombre + "</p>";
});
