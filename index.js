const express = require("express");
const port = 3000;
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

const paletas = [
  {
    id: 1,
    sabor: "Morango com Leite",
    descricao: "Deliciosa paleta de morango com leite",
    foto: "https://i1.wp.com/lospaleteros.com.br/wp-content/uploads/2016/04/MORANGO-COM-LEITE-CONDENSADO.png?fit=1342%2C1346&ssl=1",
    preco: 10.0,
  },
  {
    id: 2,
    sabor: "Chocolate com morango",
    descricao: "Deliciosa paleta de Chocolate com morango",
    foto: "https://media.cotabest.com.br/media/sku/paleta-mexicana-de-chocolate-com-morango-unidade-los-los-un.png",
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
  res.send("Módulo 3 Fullstack");
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
