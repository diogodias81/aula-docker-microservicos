# para remover arquivos da memoria de rastreamento " rm 'caminho/do/arquivo' " git rm -r --cached .
#adicionar arquivos novamente: git add .
#verificar o resultado: git status
#salvar alteracoes e enviar para o github
git commit -m "chore: Breve descricao da atualizacao"
git push origin main

    #interessante
# ver alteracoes exatas
#git diff

#para salvar um arquivo especifico git add frontend/script.js
#boas praticas git commit -m "fix(front): corrige rota de busca da api no script"

#importante para erros imprevistos git checkout -- frontend/script.js
#importante caso rode git add . por engano e nao queria salvar git restore --staged frontend/script.js
#amend:caso esqueca de salvar um arquivo ou errei o texto da mensagem git add .
git commit --amend -m "mensagem corrigida aqui"
