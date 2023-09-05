const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

var espacoCano = 190;
var posicaoCano = [];
var velocidadeCano = 1;

for (var i = 0; i < 9; i++) {
    posicaoCano[i] = 500 + espacoCano * i;
}

var movimentoPerso = 410;
var veloPerso = 5;
var veloAfundar = 0.5;

function obstaculos(){
    ctx.fillStyle = '#144f25'
    ctx.fillRect(posicaoCano[0],0,10,330);
    ctx.fillStyle = '#144f25'
    ctx.fillRect(posicaoCano[0],470,10,330);
    
    ctx.fillStyle = '#144f25'
    ctx.fillRect(posicaoCano[1],0,10,150);
    ctx.fillStyle = '#144f25'
    ctx.fillRect(posicaoCano[1],300,10,500);

    ctx.fillStyle = '#144f25'
    ctx.fillRect(posicaoCano[2],0,10,450);
    ctx.fillStyle = '#144f25'
    ctx.fillRect(posicaoCano[2],600,10,200);

    ctx.fillStyle = '#144f25'
    ctx.fillRect(posicaoCano[3],0,10,350);
    ctx.fillStyle = '#144f25'
    ctx.fillRect(posicaoCano[3],500,10,300);

    ctx.fillStyle = '#144f25'
    ctx.fillRect(posicaoCano[4],0,10,450);
    ctx.fillStyle = '#144f25'
    ctx.fillRect(posicaoCano[4],600,10,200);

    ctx.fillStyle = '#144f25'
    ctx.fillRect(posicaoCano[5],0,10,150);
    ctx.fillStyle = '#144f25'
    ctx.fillRect(posicaoCano[5],300,10,500);

    ctx.fillStyle = '#144f25'
    ctx.fillRect(posicaoCano[6],0,10,250);
    ctx.fillStyle = '#144f25'
    ctx.fillRect(posicaoCano[6],400,10,400);

    ctx.fillStyle = '#144f25'
    ctx.fillRect(posicaoCano[7],0,10,550);
    ctx.fillStyle = '#144f25'
    ctx.fillRect(posicaoCano[7],700,10,100);

    ctx.fillStyle = '#144f25'
    ctx.fillRect(posicaoCano[8],0,10,450);
    ctx.fillStyle = '#144f25'
    ctx.fillRect(posicaoCano[8],600,10,200);
}

function personagem(){
    ctx.fillStyle = '#c79b7f';
    ctx.fillRect(250+25,movimentoPerso+3,25,8);
    ctx.fillRect(250,movimentoPerso,40,13);
    ctx.fillRect(250,movimentoPerso+5,-20,8);
    ctx.fillStyle = '#bf9178';
    ctx.fillRect(250+25,movimentoPerso+5,35,5);
    ctx.fillStyle = '#700d20';
    ctx.fillRect(250,movimentoPerso,10,13);
}

function tubarao(){
    ctx.fillStyle = '#c4b664';
    ctx.fillRect(50,movimentoPerso+5,69,5);
    ctx.fillStyle = '#398026';
    ctx.fillRect(50,movimentoPerso-10,60,30);
    ctx.fillRect(50,movimentoPerso-10,70,16);
    ctx.fillRect(50,movimentoPerso+15,70,5);
    ctx.fillStyle = '#377328';
    ctx.fillRect(50+25,movimentoPerso-18,15,10);
    ctx.fillRect(50+25,movimentoPerso,20,10);
    ctx.fillRect(50,movimentoPerso-2,-20,15);
    ctx.arc(50+65,movimentoPerso-5,2,0,Math.PI*2,true);
    ctx.fillStyle = '#ff0000';
    ctx.fill();
}

function animar(){
    ctx.clearRect(0,0,1700,800);
    obstaculos();
    personagem();
    tubarao();

    for (var i = 0; i < 9; i++) {  
        posicaoCano[i] -= velocidadeCano;

        if(posicaoCano[i] < 0){
            posicaoCano[i] = 1700;
        }

        if(posicaoCano[8] < 0){
            velocidadeCano+=0.1;
        }
    }
    
    requestAnimationFrame(animar);
}

animar();
obstaculos();
personagem();
tubarao();