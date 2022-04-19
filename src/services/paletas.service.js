const paletas = [
  {
    id: 1,
    sabor: 'Açaí com Leite Condensado',
    descricao:
      'Deliciosa Paleta de Açaí com Leite Condensado',
    foto: './assets/images/acai-com-leite-condensado.png',
    preco: 10.0,
  },
  {
    id: 2,
    sabor: 'Banana com Nutella',
    descricao:
    'Deliciosa Paleta de Banana Com Nutella',
    foto: './assets/images/banana-com-nutella.png',
    preco: 10.0,
  },
  {
    id: 3,
    sabor: 'Chocolate Belga',
    descricao:
      'Deliciosa Paleta de Chocolate Belga',
    foto: './assets/images/chocolate-belga.png',
    preco: 7.0,
  },
  {
    id: 4,
    sabor: 'Chocolate Branco',
    descricao:
      'Deliciosa Paleta de Chocolate Branco',
    foto: './assets/images/chocolate-branco.png',
    preco: 7.0,
  },
  {
    id: 5,
    sabor: 'Limão',
    descricao:
      'Deliciosa Paleta de Limão',
    foto: './assets/images/limao.png',
    preco: 7.0,
  },
  {
    id: 6,
    sabor: 'Cookies',
    descricao:
      'Deliciosa Paleta de Cookies',
    foto: './assets/images/cookies.png',
    preco: 7.0,
  },
];

const findPaletasService = () => {
  return paletas;
};

const findPaletaByIdService = (id) => {
  return paletas.find((paleta) => paleta.id == id);
};

const createPaletaService = (newPaleta) => {
  const newId = paletas.length + 1;
  newPaleta.id = newId;
  paletas.push(newPaleta);
  return newPaleta;
};

const updatePaletaService = (id, paletaEdited) => {
  paletaEdited['id'] = id;
  const paletaIndex = paletas.findIndex((paleta) => paleta.id == id);
  paletas[paletaIndex] = paletaEdited;
  return paletaEdited;
};

const deletePaletaService = (id) => {
  const paletaIndex = paletas.findIndex((paleta) => paleta.id == id);
  return paletas.splice(paletaIndex, 1);
};

module.exports = {
  findPaletasService,
  findPaletaByIdService,
  createPaletaService,
  updatePaletaService,
  deletePaletaService,
  paletas,
};
