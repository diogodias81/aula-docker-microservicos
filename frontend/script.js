const API_URL = "http://localhost:3000"; 

 const form = document.getElementById("form-recado"); 

const inputTexto = document.getElementById("texto"); 

const listaRecados = document.getElementById("lista-recados"); 

const mensagem = document.getElementById("mensagem"); 

const btnAtualizar = document.getElementById("btn-atualizar"); 

 
async function carregarRecados() { 

  mensagem.textContent = ""; 

 

  try { 

    const resposta = await fetch(`${API_URL}/recados`); 

    const recados = await resposta.json(); 

 

    listaRecados.innerHTML = ""; 

 

    recados.forEach((recado) => { 

      const item = document.createElement("li"); 

      item.textContent = `#${recado.id} - ${recado.texto}`; 

      listaRecados.appendChild(item); 

    }); 

  } catch (erro) { 

    mensagem.textContent = "Erro ao carregar recados."; 

    console.error(erro); 

  } 

} 

 

form.addEventListener("submit", async (event) => { 

  event.preventDefault(); 

 

  const texto = inputTexto.value.trim(); 

 

  if (!texto) { 

    mensagem.textContent = "Digite um recado antes de enviar."; 

    return; 

  } 

 

  try { 

    const resposta = await fetch(`${API_URL}/recados`, { 

      method: "POST", 

      headers: { 

        "Content-Type": "application/json" 

      }, 

      body: JSON.stringify({ texto }) 

    }); 

 

    if (!resposta.ok) { 

      throw new Error("Erro ao salvar recado."); 

    } 

 

    inputTexto.value = ""; 

    mensagem.textContent = "Recado enviado com sucesso."; 

    carregarRecados(); 

  } catch (erro) { 

    mensagem.textContent = "Erro ao enviar recado."; 

    console.error(erro); 

  } 

}); 

 

btnAtualizar.addEventListener("click", carregarRecados); 

 

carregarRecados(); 