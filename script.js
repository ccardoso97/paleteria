const baseURL = "http://localhost:3000/paletas";

async function findAllPaletas() {
  const response = await fetch(`${baseURL}/find-paletas`);
  const paletas = await response.json();
  paletas.forEach((paleta) => {
    document.getElementById("paletaList")
  });
};

findAllPaletas();
