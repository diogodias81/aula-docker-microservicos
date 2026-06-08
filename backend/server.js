const express = require("express"); 
const cors = require("cors"); 

const app = express(); 
const PORT = 3000; 


app.use(cors()); 
app.use(express.json()); 


let recados = [ 
  { id: 1, texto: "Bem-vindo ao sistema de recados!" }, 
  { id: 2, texto: "Esse backend está rodando com Node.js + Express." } 
]; 


app.get("/recados", (req, res) => { 
  res.json(recados); 
}); 

// Rota para criar um novo recado (POST)
app.post("/recados", (req, res) => { 
  const { texto } = req.body; 

  if (!texto || texto.trim() === "") { 
    return res.status(400).json({ erro: "O texto do recado é obrigatório." }); 
  } 

  const novoRecado = { 
    id: recados.length > 0 ? recados[recados.length - 1].id + 1 : 1, 
    texto: texto.trim() 
  }; 

  recados.push(novoRecado); 
  res.status(201).json(novoRecado); 
}); 

// Rota raiz para teste rápido no navegador
app.get("/", (req, res) => { 
  res.send("API de recados funcionando."); 
}); 

// Inicialização do servidor configurada para o ambiente Docker
app.listen(PORT, "0.0.0.0", () => { 
  console.log(`Servidor rodando em http://localhost:${PORT}`); 
});