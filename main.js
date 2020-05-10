async function getquartos() {

    const response = await fetch("https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72");
    return await response.json();
}


window.onload = async function () {
    const quartos = await getquartos();
    let lista = [];
    let j = 1;
    let i = 0;
    let qtdCont = quartos / 6;

    //console.log(parametrosURL());

    for (i = 0; i < quartos.length; i++) {

        if (j == 1) {
            lista.push(`<div class="card-deck">`);
        }

        lista.push(`<div id="quartos" class="card">
              <img src="${quartos[i].photo}" class="card-img-top" alt="...">
              <div class="card-body">
              <h5 class="card-title">${quartos[i].property_type}</h5>
              <p class="card-text">${quartos[i].name}</p>
              </div>
              <div class="card-footer">
              <small class="text-muted">R$ ${quartos[i].price}</small>
              </div>
               </div>`);

        if (j == 3) {
            j = 0;
            lista.push(`</div>`);
        }

        j = j + 1;
    }



    //console.log(lista);
    let conteudoQuartos = lista.toString().replace(/\,/g, "");
    //console.log(conteudoQuartos);
    this.document.getElementById("acomodacoes").innerHTML = `${conteudoQuartos}`;
}