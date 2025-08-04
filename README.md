JOGO DA VELHA - Projeto em HTML, CSS e JavaScript
==================================================

📌 OBJETIVO:
------------
Este projeto tem como objetivo criar um jogo da velha simples e funcional que roda diretamente no navegador. O jogador joga contra si mesmo (sem inteligência artificial), alternando entre os símbolos "X" e "O". O jogo exibe mensagens como "You Win", "Você perdeu", "Empate", e possui botões para iniciar e finalizar o jogo.

📁 ESTRUTURA DE ARQUIVOS:
-------------------------
- index.html → estrutura da página e elementos visuais
- style.css → estilos visuais e layout
- script.js → lógica do jogo e interações
- explicacao_projeto.txt → este arquivo explicativo

🧱 COMPONENTES DO PROJETO:
--------------------------

1. HTML (index.html)
---------------------
- Define o título e o cabeçalho da página.
- Cria uma grade 3x3 com 9 células para o tabuleiro.
- Adiciona uma área para exibir mensagens (vitória, derrota, empate).
- Inclui dois botões: "Iniciar Jogo" e "Finalizar Jogo".
- Conecta os arquivos CSS e JavaScript.

2. CSS (style.css)
-------------------
- Centraliza o conteúdo da página.
- Estiliza o tabuleiro com uma grade de 3 colunas.
- Define o tamanho das células (100x100px) e adiciona bordas.
- Aplica uma imagem de fundo nas células (opcional).
- Estiliza os botões e mensagens.

3. JavaScript (script.js)
--------------------------
- Inicializa o tabuleiro como um array de 9 posições vazias.
- Define o jogador atual como "X".
- Controla o estado do jogo (ativo ou finalizado).
- Verifica condições de vitória com base em combinações pré-definidas.
- Alterna entre os jogadores após cada jogada.
- Exibe mensagens de vitória, derrota ou empate.
- Permite reiniciar o jogo com o botão "Iniciar Jogo".
- Finaliza o jogo com o botão "Finalizar Jogo".

🎮 FUNCIONAMENTO:
-----------------
- Ao clicar em "Iniciar Jogo", o tabuleiro é limpo e o jogo começa.
- O jogador clica em uma célula para marcar com "X" ou "O".
- O jogo alterna automaticamente entre os dois símbolos.
- Quando uma condição de vitória é atingida, o jogo exibe:
    - "You Win!" → se o jogador "X" vencer
    - "Você perdeu!" → se o jogador "O" vencer
    - "Empate!" → se todas as células forem preenchidas sem vencedor
- O botão "Finalizar Jogo" encerra o jogo e impede novas jogadas.

🖼️ IMAGENS:
-----------
- O projeto usa uma imagem de fundo nas células para representar o tabuleiro.
- A imagem pode ser trocada no CSS, na propriedade `background-image`.

🔧 PERSONALIZAÇÕES FUTURAS:
---------------------------
- Adicionar placar de vitórias.
- Implementar modo contra o computador (IA).
- Adicionar animações nas jogadas.
- Melhorar o design responsivo para dispositivos móveis.

📌 CONCLUSÃO:
-------------
Este projeto é ideal para iniciantes em desenvolvimento web que desejam aprender sobre manipulação de DOM, lógica de jogo e estilização com CSS. Ele pode ser expandido facilmente para incluir mais funcionalidades e melhorar a experiência do usuário.

