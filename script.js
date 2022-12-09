let buscar = document.getElementById("buscar-btn");
let paisInp = document.getElementById("pais-inp");
buscar.addEventListener("click", () => {
  let paisNome = paisInp.value;
  let finalURL = `https://restcountries.com/v3.1/name/${paisNome}?fullText=true`;
  console.log(finalURL);
  fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
      result.innerHTML = `
        <img src="${data[0].flags.svg}" class="bandeira-img">
        <h2>${data[0].name.common}</h2>
        <div class="campo">
            <div class="data-campo">
                <h4>Capital:</h4>
                <span>${data[0].capital[0]}</span>
            </div>
        </div>
        <div class="campo">
            <div class="data-campo">
                <h4>Continente:</h4>
                <span>${data[0].continents[0]}</span>
            </div>
        </div>
         <div class="campo">
            <div class="data-campo">
                <h4>População:</h4>
                <span>${data[0].population}</span>
            </div>
        </div>
        </div>
        <div class="campo">
           <div class="data-campo">
               <h4>Idioma:</h4>
               <span>${Object.values(data[0].languages)
}</span>
           </div>
       </div>
        <div class="campo">
            <div class="data-campo">
                <h4>Moeda usada:</h4>
                <span>${
                  data[0].currencies[Object.keys(data[0].currencies)].name
                } - ${Object.keys(data[0].currencies)[0]}</span>
            </div>

      `;
    })
    .catch(() => {
      if (paisNome.length == 0) {
        result.innerHTML = `<h3>Esse campo não pode estar vazio.</h3>`;
      } else {
        result.innerHTML = `<h3>Digite um país em inglês válido por favor.</h3>`;
      }
    });
});