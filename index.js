const express = require('express');
const cors = require('cors');
const route = require('./src/routes/paletas.route');

const port = 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/paletas', route);

app.get('/', function (req, res) {
  res.render(paletas);
});
app.get('/paletas/find-paletas', (req, res) => {
  res.send(paletas);
});
app.get('/paletas/find-paletas/:id', (req, res) => {
  const idParam = req.params.id;
  const chosenPaleta = paletas.find((paleta) => paleta.id == idParam);
  res.send(chosenPaleta);
});
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port} 🚀`);
});
