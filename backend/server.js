const express = require("express"); 

const cors = require("cors"); 

const { Pool } = require("pg"); 

 

const app = express(); 

const PORT = 3000; 

 

app.use(cors()); 

app.use(express.json()); 

 

const pool = new Pool({ 

 host: process.env.DB_HOST || "db", 

 port: process.env.DB_PORT || 5432, 

 database: process.env.DB_NAME || "recadosdb", 

 user: process.env.DB_USER || "aluno", 

 password: process.env.DB_PASSWORD || "senha123" 

}); 

 

app.get("/", (req, res) => { 

 res.send("API com PostgreSQL funcionando."); 

}); 

 

app.get("/recados", async (req, res) => { 

 try { 

   const resultado = await pool.query( 

     "SELECT id, texto, criado_em FROM recados ORDER BY id ASC" 

   ); 

   res.json(resultado.rows); 

 } catch (erro) { 

   console.error("Erro ao buscar recados:", erro); 

   res.status(500).json({ erro: "Erro ao buscar recados." }); 

 } 

}); 

 

app.post("/recados", async (req, res) => { 

 const { texto } = req.body; 

 

 if (!texto || texto.trim() === "") { 

   return res.status(400).json({ erro: "O texto do recado é obrigatório." }); 

 } 

 

 try { 

   const resultado = await pool.query( 

     "INSERT INTO recados (texto) VALUES ($1) RETURNING id, texto, criado_em", 

     [texto.trim()] 

   ); 

 

   res.status(201).json(resultado.rows[0]); 

 } catch (erro) { 

   console.error("Erro ao salvar recado:", erro); 

   res.status(500).json({ erro: "Erro ao salvar recado." }); 

 } 

}); 

 

app.listen(PORT, "0.0.0.0", () => { 

 console.log(`Servidor rodando em http://0.0.0.0:${PORT}`); 

}); 