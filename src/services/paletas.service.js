const paletas = [
  {
    id: 1,
    sabor: 'Morango com Leite',
    descricao: 'Deliciosa paleta de morango com leite',
    foto: './assets/images/morango-com-leite-condensado.png',
    preco: 10.0,
  },
  {
    id: 2,
    sabor: 'Chocolate Branco',
    descricao: 'Deliciosa paleta de Chocolate Branco',
    foto: './assets/images/chocolate-branco.png',
    preco: 8.0,
  },
  {
    id: 3,
    sabor: 'Açaí com leite condensado',
    descricao: 'Açaí com leite condensado',
    foto: './assets/images/acai-com-leite-condensado.png',
    preco: 11.0,
  },
];

const findPaletasService = () => {
  return paletas;
};

const findPaletaByIdService = (id) => {
  return paletas.find((paleta) => paleta.id == id);
};

module.exports = {
  findPaletasService,
  findPaletaByIdService,
};
