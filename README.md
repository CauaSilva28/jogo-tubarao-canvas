# Explicação do Jogo canvas
<p>Feito por Cauã Silva e Juliana</p>

<p>O jogador(personagem) deve completar o jogo desviando de obstáculos que vão surgindo na tela. Se ele colidir com algum obstáculo, ele irá ficar parado e o tubarão chegará cada vez mais próximo, se  o tubarão chegar no personagem, derrota, mas se o jogador conseguir fugir, vitória.</p>

## HTML
<img src='img/html.jpg' />

<p>Foi feita a estrutura básica do HTML, e dentro do body foi adicionado o canvas com o id "myCanvas", uma div com a classe "botoes", onde dentro dela possui dois botões que farão parte do nosso jogo, o botão de iniciar e o de reiniciar. No fim adicionamos um audio, que será a música de fundo do nosso jogo e chamamos os javascripts, um possuindo as funções do jogo e outro com os scripts.</p>

## CSS
<img src='img/css.jpg' /> />

<p>No css adicionamos uma cor de fundo gradiante no canvas e o alinhamos. Também personalizamos todos os botões e os alinhamos.</p>

## JAVASCRIPT FUNCTIONS
<img src='img/cenario.jpg' />

<p>No function.js colocamos tudo que foi utilizado para fazer o cenário, personagens e os obstáculos, além da barra do percurso e a barra de vida.</p>
<p>A areia, pedras e algas foram feitas utilizando linhas, curvas (todas do tipo quadraticCurveTo) e círculos.</p>

### Obstáculos
<img src='img/obstaculos.jpg' />

<p>Foram cirados 6 obstáculos, todos verdes e feitos com um retângulo. Os nomes das variáveis posicaoCano, canoChao e canoCeu serão explicadas.</p>

### Personagem e tubarão
<img src='img/personagens.jpg' />

<p>O personagem e o tubarão foram feitos utilizando retângulos e um círculo para o olho do tubarão. Os nomes das variáveis movimentoPerso e movimentoTuba serão explicadas.</p>

### Barra de vida e barra do percurso
<img src='img/barras.jpg' />

<p>Por fim as barras, que foram feitas com retângulos um por cima do outro, onde o de baixo é preto para mostrar que está vazia. As variáveis tamanhoBarra e tamanhoBarraVida serão explicadas.</p>