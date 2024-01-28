
const btnConsultarDatos = document.querySelector("#btnConsultarDatos");
const listaPerjs = document.querySelector("div.listaPersonajes");

console.log(btnConsultarDatos, listaPerjs);

btnConsultarDatos.addEventListener("click", async () => {
   const listaPersonajes = await getDataAPI();

   listaPerjs.innerHTML = "";
   listaPersonajes.forEach(function(personaje, index) {
      console.log(index, personaje);
      const newHtml = `<li>${ personaje.name }</li><br><img src=${ personaje.image } />`;
      listaPerjs.innerHTML += newHtml;
   })
})

async function getDataAPI() {
   const response = await fetch("https://rickandmortyapi.com/api/character")
   const data = await response.json();
   console.log(data);
   return data.results;
}
