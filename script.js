const baseUrl = 'http://localhost:3000/paletas';

async function findAllPaletas() {
  const response = await fetch(`${baseUrl}/find-paletas`);
  const paletas = await response.json();

  paletas.forEach((paleta) => {
    document.getElementById('paletaList').insertAdjacentHTML(
      'beforeend',
      `<div class="PaletaListaItem" id="PaletaListaItem_${
        paleta.id
      }"><div></div>
        <div class="PaletaListaItem">
          <div>
            <div class="PaletaListaItem__sabor">${paleta.sabor}</div>
            <div class="PaletaListaItem__preco">R$ ${paleta.preco.toFixed(
              2,
            )}</div>
            <div class="PaletaListaItem__descricao">
              ${paleta.descricao}
            </div>
            <div class="PaletaListaItem__acoes Acoes">
              <button class="Acoes__editar btn" onclick="abrirModal(${
                paleta.id
              })">Editar</button> 
              <button class="Acoes__apagar btn">Apagar</button> 
            </div>
          </div>
          <img
            class="PaletaListaItem__foto"
            src=${paleta.foto}
            alt=${`Paleta de ${paleta.sabor}`}
          />
        </div>
      `,
    );
  });
}

findAllPaletas();

const findByIdPaletas = async () => {
  const id = document.getElementById('idPaleta').value;

  const response = await fetch(`${baseUrl}/find-paletas/${id}`);

  const paleta = await response.json();

  const paletaEscolhidaDiv = document.getElementById('paletaEscolhida');

  paletaEscolhidaDiv.innerHTML = `
    <div class="PaletaCardItem">
      <div>
        <div class="PaletaCardItem__sabor">${paleta.sabor}</div>
        <div class="PaletaCardItem__preco">R$ ${paleta.preco.toFixed(2)}</div>
        <div class="PaletaCardItem__descricao">${paleta.descricao}</div>
      </div>
      <img
        class="PaletaCardItem__foto"
        src=${paleta.foto}
        alt=${`Paleta de ${paleta.sabor}`}
      />
    </div>
  `;
};
function abrirModalCadastro() {
  document.querySelector('.modal-overlay').style.display = 'flex';
}

function fecharModalCadastro() {
  document.querySelector('.modal-overlay').style.display = 'none';
}
async function createPaleta() {
  const id = document.getElementById('id').value;
  const sabor = document.querySelector('#sabor').value;
  const preco = document.querySelector('#preco').value;
  const descricao = document.querySelector('#descricao').value;
  const foto = document.querySelector('#foto').value;

  const paleta = {
    id,
    sabor,
    preco,
    descricao,
    foto,
  };
  const modoEdicaoAtivado = id > 0;

  const endpoint = baseUrl + (modoEdicaoAtivado ? `/update/${id}` : '/create');

  const response = await fetch(endpoint, {
    method: modoEdicaoAtivado ? 'put' : 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
    body: JSON.stringify(paleta),
  });

  const novaPaleta = await response.json();
  const html = `<div class="PaletaListaItem" id="PaletaListaItem_${
    novaPaleta.id
  }"><div>
    <div class="PaletaListaItem__sabor">${novaPaleta.sabor}</div>
    <div class="PaletaListaItem__preco">R$ ${novaPaleta.preco.toFixed(2)}</div>
    <div class="PaletaListaItem__descricao">${novaPaleta.descricao}</div>
  <div class="PaletaListaItem__acoes Acoes">
      <button class="Acoes__editar btn" onclick="abrirModal(${
        paleta.id
      })">Editar</button> 
      <button class="Acoes__apagar btn">Apagar</button> 
    </div>
    <img class="PaletaListaItem__foto" src=${
      novaPaleta.foto
    } alt=${`Paleta de ${novaPaleta.sabor}`} />
  </div>`;
  if (modoEdicaoAtivado) {
    document.getElementById(`PaletaListaItem_${id}`).outerHTML = html;
  } else {
    document.getElementById("paletaList").insertAdjacentHTML("beforeend", html);
  }
  document.getElementById('paletaList').insertAdjacentHTML('beforeend', html);
  fecharModalCadastro();
}
async function abrirModal(id = null) {
  if (id != null) {
    document.querySelector('#title-header-modal').innerText =
      'Atualizar uma Paleta';
    document.querySelector('#button-form-modal').innerText = 'Atualizar';

    const response = await fetch(`${baseURL}/paleta/${id}`);
    const paleta = await response.json();

    document.querySelector('#sabor').value = paleta.sabor;
    document.querySelector('#preco').value = paleta.preco;
    document.querySelector('#descricao').value = paleta.descricao;
    document.querySelector('#foto').value = paleta.foto;
    document.querySelector('#id').value = paleta.id;
  } else {
    document.querySelector('#title-header-modal').innerText =
      'Cadastrar uma Paleta';
    document.querySelector('#button-form-modal').innerText = 'Cadastrar';
  }

  document.querySelector('.modal-overlay').style.display = 'flex';
}
