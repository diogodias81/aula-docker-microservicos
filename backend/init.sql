CREATE TABLE IF NOT EXISTS recados ( 

   id SERIAL PRIMARY KEY, 

   texto TEXT NOT NULL, 

   criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP 

); 

INSERT INTO recados (texto) 

SELECT 'Bem-vindo ao sistema com PostgreSQL!' 

WHERE NOT EXISTS (SELECT 1 FROM recados); 
 
 
INSERT INTO recados (texto) 

SELECT 'Agora os dados ficam persistidos no banco.' 

WHERE NOT EXISTS ( 

   SELECT 1 FROM recados WHERE texto = 'Agora os dados ficam persistidos no banco.' 

);