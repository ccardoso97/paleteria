const baseURL = "http://localhost:3000/paletas";

async function findAllPaletas() {
  const response = await fetch(`${baseURL}/find-paletas`);
  const paletas = await response.json();
  paletas.forEach((paleta) => {
    document.getElementById("paletaList").insertAdjacentHTML(
        "beforeend",
        `
        <div class="PaletaListaItem">
            <div class="PaletaCardItem">
                <div class="PaletaListaItem__sabor">${paleta.sabor}</div>
                <div class="PaletaListaItem__preco">R$${paleta.preco.toFixed(2)}</div>
                <div class="PaletaListaItem__descricao">${paleta.descricao}</div>
            </div>
        </div>   
        <img 
            src=${paleta.foto}
            alt=${`Paleta de ${paleta.foto}`}
            class="PaletaListaItem_foto"
        />
        `
    )
  });
};

findAllPaletas();
