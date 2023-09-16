# Explicação do Jogo canvas
<p>Feito por Cauã Silva👦 e Juliana👩</p>

<p>O jogador(personagem) deve completar o jogo desviando de obstáculos que vão surgindo na tela. Se ele colidir com algum obstáculo, ele irá ficar parado e o tubarão chegará cada vez mais próximo, se  o tubarão chegar no personagem, derrota, mas se o jogador conseguir fugir, vitória.</p>

## HTML
<img src='img/html.jpg' />

<p>Foi feita a estrutura básica do HTML, e dentro do body foi adicionado o canvas com o id "myCanvas", uma div com a classe "botoes", onde dentro dela possui dois botões que farão parte do nosso jogo, o botão de iniciar e o de reiniciar. No fim adicionamos um audio, que será a música de fundo do nosso jogo e chamamos os javascripts, um possuindo as funções do jogo e outro com os scripts.</p>

## CSS
<img src='img/css.jpg' />

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

## JAVASCRIPT SCRIPT
<p>Tudo que for explicado aqui irá ser mostrado na gameplay no final do README.</p>

<img src='img/inicio.jpg' />

<p>No começo temos todas as const e variáveis que serão utilizadas no código.</p>

<p>Primeiro foi pego a id do canvas e uma const "ctx" para mostrar o que vai ser renderizado.</p>

<p>Depois pegamos o id do audio que adicionamos no html e atribuimos em uma const chamada "audioFundo".</p>

<p>Após o áudio temos as mensagens que aparecerão no fim do jogo, uma é a de vitória e outra a de derrota.</p>

<p>A variável espacoCano é o espaçamento dos canos no eixoX, e a variável espacoYcano é o espaçamento dos canos no eixoY.<p>

<p>Temos também os valores da velocidade do cano(veloCano e veloCano2).</p>

<p>As variáveis posicaoCano, canoCeu e canoChao estão como [] pois são um array vazio, que logo em seguida terá uma estrutura de repetição for com a variável i sendo igual a 0 e menor que 7(refere-se ao número de canos, que é 6) onde irá atribuir valores a esses array. Esse código foi utilizado para que não precisasse criar uma variavel para cada cano, assim deixando o código mais limpo e simples.</p>

<p>A posicaoCano é igual ao seu ponto incial(500) mais o espaçamento do cano no eixo X multiplicado pelo número do cano(quanto maior, maior a distância do ponto inicial)</p>

<p> O canoCeu é um valor aleatório de 0 a 500, e o canoChao é esse valor aleatório + o espaçamento do cano no eixoY.</p>

<p>Por fim as variaveis de movimento do personagem (movimentoPerso, veloPerso e veloAfundar), do tubarão(movimentoTuba, veloTuba), tempo, tamanho da barra de percuso e o tamanho da barra de vida</p>

### Contadores
<img src='img/contadores.jpg' />

<p>A function contadores é responsável por aumentar +1 no tempo e +2.5 no tamanho da barra do percurso a cada segundo.</p> 

### Inicio function animar
<img src='img/inicioanimar.jpg' />

<p>Nessa parte inicial da function animar, chamamos todas as funções criadas no script "functions" para que tudo que foi criado não seja apagado devido ao clearRect, que faz com que as animações do personagem, tubarão e dos canos não fique duplicando eles.</p>

### Afundar personagem
<img src='img/afundar.jpg' />

<p>Esse código fará com que o personagem fique sempre indo para baixo/afundando. O if é para que se o personagem afundar totalmente, ele fica parado.<p>

### Mover obstáculos
<img src='img/moverobstaculo.jpg' />

<p>Esse código faz com que todos os 6 obstáculos se movam no eixoX negativo(para a esquerda), assim dando a impressão de que o personagem e o tubarão estão se movendo. O if é para que se determinado obstáculo sair totalmente da tela, ele irá aparecer do outro lado da tela, assim aumentando +0.03 da velocidade de todos os canos e atribuindo um novo valor aleatória na posição do canoCeu e do canoChao que saiu totalmente da tela.</p>

### Aumentar velocidade do personagem
<img src='img/aumentarveloperso.jpg' />

<p>Para o jogo não se tornar impossível, contendo canos que o personagem não consiga desviar, esse código fará com que a velocidade do personagem aumente quando a velocidade do cano chegar em tal valor.</p>