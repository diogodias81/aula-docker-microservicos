Projeto: Sistema de Recados (Docker & Microserviços) 
Este projeto foi desenvolvido para praticar a arquitetura de microserviços, containerização e orquestração com Docker, separando totalmente o Frontend do Backend para garantir performance e isolamento de responsabilidades.

O que foi usado ?
Backend (A API REST)
Node.js & Express v5: Utilizado para criar uma API rápida e leve. Roda na porta 3000 com a rota /recados para listagem e criação de dados.

Pacote CORS: Configurado para permitir que o frontend consuma os dados da API com segurança, evitando bloqueios do navegador devido às portas diferentes.

Frontend & Performance
HTML5 e JavaScript Nativo: Focado no essencial e sem frameworks pesados, priorizando a lógica pura de consumo da API.

Nginx (Em Produção): Utilizado para servir o frontend no container (porta 8080). É extremamente rápido e eficiente na entrega de arquivos estáticos.

A Infraestrutura com Docker Compose
O Docker Compose unifica a aplicação, criando uma rede isolada para a comunicação entre frontend e backend com um único comando.

Dica de Produtividade: Uso de volumes no frontend, permitindo que alterações no código reflitam instantaneamente no navegador sem reiniciar os containers.

O "Modo Rápido" com Python (Foco no Cliente)
Como alternativa rápida para ajustar o design ou o JavaScript sem subir toda a infraestrutura Docker, basta rodar o servidor HTTP do Python na porta 5500 dentro da pasta do frontend.

Organização e Boas Práticas (Git)
Código Limpo: .gitignore bem configurado para não enviar pastas pesadas (node_modules) ou arquivos sensíveis (.env) para o GitHub.

Histórico Claro: Commits padronizados (ex: fix(front): ou chore:) para facilitar o rastreamento de alterações e correções rápidas.

Como Rodar a Aplicação
Modo Completo (Com Docker)
Para rodar toda a estrutura de microserviços integrada, execute no terminal:

Bash
# Para construir e subir os servidores
docker compose up --build

# Para parar tudo quando terminares
docker compose down
