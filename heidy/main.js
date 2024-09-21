const textArea= document.querySelector("#inputparrafo");
const condiction= document.getElementById("palabraMagica");
const resultado = document.getElementById("resultado");


textArea.value= "";

function actualizarResultado() {
    resultado.innerHTML = "";
     const palabras = textArea.value.split(" ");
     const palabraMagica= condiction.value.toLowerCase();

     palabras.forEach(palabras =>{
        if(palabras .toLowerCase() != palabraMagica) {
            resultado.innerHTML += `${palabras}`;
        }else {
            resultado.innerHTML += `<strong> ${palabras}</strong>`
        }
     });
   
}

textArea.addEventListener("change", actualizarResultado);
condiction.addEventListener("change", actualizarResultado);