let amigos = [];

// Inicia declarando una variable de tipo array, que almacenará los nombres de los amigos ingresados.
function agregarAmigo() {
  let nombreAmigo = document.getElementById("amigo").value;

  if (nombreAmigo.trim() === "") {
    alert("Por favor, ingresa un nombre valido");
  } else {
    amigos.push(nombreAmigo);
    document.querySelector("#amigo").value = "";
    mostrarListaAmigo();
  }
}

// Desarrolla una función, que permita al usuario ingresar un nombre en el campo de texto y añadirlo a la lista de amigos creada anteriormente.
function mostrarListaAmigo() {
  let listaAmigos = document.querySelector("#listaAmigos");
  listaHTML = "";
  for (let amigo of amigos) { 
    listaHTML += `<li>${amigo}</li>`;
  }
    listaAmigos.innerHTML = listaHTML;
  }

//Escribe una función que seleccione de manera aleatoria uno de los nombres almacenados en el array amigos. Usa Math.random() y Math.floor() para obtener un índice aleatorio.//
function sortearAmigo() {
  let cantidadAmigos = amigos.length;
  let resultadoHTML = document.querySelector("#resultado");
  let listaAmigos = document.querySelector("#listaAmigos");
  let inputAmigo = document.querySelector("#amigo");

  if (cantidadAmigos === 0) {
    alert("Por favor, inserte un nombre antes de sortear");
  } else {
    let indiceAmigo = Math.floor(Math.random() * cantidadAmigos);
    resultadoHTML.innerHTML = "El amigo secreto sorteado es: " + amigos[indiceAmigo];
    listaAmigos.innerHTML = "";
    inputAmigo.value = "";
    }
}