const API_URL = "http://localhost:3000";

const form = document.getElementById("form-recado"); 
const inputTexto = document.getElementById("texto"); 
const listaRecados = document.getElementById("lista-recados"); 
const mensagem = document.getElementById("mensagem"); 
const btnAtualizar = document.getElementById("btn-atualizar"); 


async function carregarRecados() { 
  exibirMensagem("", "");

  try {
    const resposta = await fetch(`${API_URL}/recados`);
    
    if (!resposta.ok) throw new Error();
    
    const recados = await resposta.json(); 
    renderizarLista(recados);
  } catch (erro) { 
    exibirMensagem("Erro ao carregar recados. Verifique se o backend está rodando.", "red"); 
    console.error("Erro na requisição GET:", erro); 
  } 
} 


function renderizarLista(recados) {
  listaRecados.innerHTML = ""; 

  if (recados.length === 0) {
    listaRecados.innerHTML = "<li>Nenhum recado encontrado.</li>";
    return;
  }

  recados.forEach((recado) => { 
    const item = document.createElement("li"); 
    item.textContent = `#${recado.id} - ${recado.texto}`; 
    listaRecados.appendChild(item); 
  }); 
}


function exibirMensagem(texto, cor) {
  mensagem.textContent = texto;
  mensagem.style.color = cor;
}


form.addEventListener("submit", async (event) => { 
  event.preventDefault(); 

  const texto = inputTexto.value.trim(); 

  if (!texto) { 
    exibirMensagem("Digite um recado antes de enviar.", "orange"); 
    return; 
  } 

  try { 
    const resposta = await fetch(`${API_URL}/recados`, { 
      method: "POST", 
      headers: { "Content-Type": "application/json" }, 
      body: JSON.stringify({ texto }) 
    }); 

    if (!resposta.ok) throw new Error(); 

    inputTexto.value = ""; 
    exibirMensagem("Recado enviado com sucesso!", "green"); 
    carregarRecados(); 
  } catch (erro) { 
    exibirMensagem("Erro ao enviar recado.", "red"); 
    console.error("Erro na requisição POST:", erro); 
  } 
}); 

btnAtualizar.addEventListener("click", carregarRecados); 


carregarRecados();