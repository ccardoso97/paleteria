const express = require("express");
const cors = require("cors");

const port = 3000;
const app = express();

app.use(cors());
app.use(express.json());

const paletas = [
  {
    id: 1,
    sabor: "Morango com Leite",
    descricao: "Deliciosa paleta de morango com leite",
    foto: "./assets/images/morango-com-leite-condensado.png",
    preco: 10.0,
  },
  {
    id: 2,
    sabor: "Chocolate Branco",
    descricao: "Deliciosa paleta de Chocolate Branco",
    foto: "./assets/images/chocolate-branco.png",
    preco: 8.0,
  },
  {
    id: 3,
    sabor: "Açaí com leite condensado",
    descricao: "Açaí com leite condensado",
    foto: "http://napoleta.com.br/parts/recheado/acaicomleitecondensado.png",
    preco: 11.0,
  },
];

app.get("/", function (req, res) {
  res.render(paletas);
});
app.get("/paletas/find-paletas", (req, res) => {
  res.send(paletas);
});
app.get("/paletas/find-paletas/:id", (req, res) => {
  const idParam = req.params.id;
  const chosenPaleta = paletas.find((paleta) => paleta.id == idParam);
  res.send(chosenPaleta);
});
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port} 🚀`);
});
