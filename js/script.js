const canvasObstaculo = document.getElementById('canvasObstaculo');
const ctxObstaculo = canvasObstaculo.getContext('2d');

const canvasPerso = document.getElementById('canvasPersonagem');
const ctxPerso = canvasPerso.getContext('2d');

const canvasTuba = document.getElementById('canvasTubarao');
const ctxTuba = canvasTuba.getContext('2d');

var espacoCano = 190;
var posicaoCano = [];

for (var i = 0; i < 9; i++) {
    posicaoCano[i] = 500 + espacoCano * i;
}

var velocidadeCano = 1;

function obstaculos(){
    ctxObstaculo.fillStyle = '#144f25'
    ctxObstaculo.fillRect(posicaoCano[0],0,10,330);
    ctxObstaculo.fillStyle = '#144f25'
    ctxObstaculo.fillRect(posicaoCano[0],470,10,330);
    
    ctxObstaculo.fillStyle = '#144f25'
    ctxObstaculo.fillRect(posicaoCano[1],0,10,150);
    ctxObstaculo.fillStyle = '#144f25'
    ctxObstaculo.fillRect(posicaoCano[1],300,10,500);

    ctxObstaculo.fillStyle = '#144f25'
    ctxObstaculo.fillRect(posicaoCano[2],0,10,450);
    ctxObstaculo.fillStyle = '#144f25'
    ctxObstaculo.fillRect(posicaoCano[2],600,10,200);

    ctxObstaculo.fillStyle = '#144f25'
    ctxObstaculo.fillRect(posicaoCano[3],0,10,350);
    ctxObstaculo.fillStyle = '#144f25'
    ctxObstaculo.fillRect(posicaoCano[3],500,10,300);

    ctxObstaculo.fillStyle = '#144f25'
    ctxObstaculo.fillRect(posicaoCano[4],0,10,450);
    ctxObstaculo.fillStyle = '#144f25'
    ctxObstaculo.fillRect(posicaoCano[4],600,10,200);

    ctxObstaculo.fillStyle = '#144f25'
    ctxObstaculo.fillRect(posicaoCano[5],0,10,150);
    ctxObstaculo.fillStyle = '#144f25'
    ctxObstaculo.fillRect(posicaoCano[5],300,10,500);

    ctxObstaculo.fillStyle = '#144f25'
    ctxObstaculo.fillRect(posicaoCano[6],0,10,250);
    ctxObstaculo.fillStyle = '#144f25'
    ctxObstaculo.fillRect(posicaoCano[6],400,10,400);

    ctxObstaculo.fillStyle = '#144f25'
    ctxObstaculo.fillRect(posicaoCano[7],0,10,550);
    ctxObstaculo.fillStyle = '#144f25'
    ctxObstaculo.fillRect(posicaoCano[7],700,10,100);

    ctxObstaculo.fillStyle = '#144f25'
    ctxObstaculo.fillRect(posicaoCano[8],0,10,450);
    ctxObstaculo.fillStyle = '#144f25'
    ctxObstaculo.fillRect(posicaoCano[8],600,10,200);
}

function personagem(){
    ctxPerso.fillStyle = '#c79b7f';
    ctxPerso.fillRect(250+25,413,25,8);
    ctxPerso.fillRect(250,410,40,13);
    ctxPerso.fillRect(250,415,-20,8);
    ctxPerso.fillStyle = '#bf9178';
    ctxPerso.fillRect(250+25,415,35,5);
    ctxPerso.fillStyle = '#700d20';
    ctxPerso.fillRect(250,410,10,13);
}

function tubarao(){
    ctxTuba.fillStyle = '#c4b664';
    ctxTuba.fillRect(50,415,69,5);
    ctxTuba.fillStyle = '#398026';
    ctxTuba.fillRect(50,400,60,30);
    ctxTuba.fillRect(50,400,70,16);
    ctxTuba.fillRect(50,425,70,5);
    ctxTuba.fillStyle = '#377328';
    ctxTuba.fillRect(50+25,392,15,10);
    ctxTuba.fillRect(50+25,410,20,10);
    ctxTuba.fillRect(50,408,-20,15);
    ctxTuba.arc(50+65,405,2,0,Math.PI*2,true);
    ctxTuba.fillStyle = '#ff0000';
    ctxTuba.fill();
}

function animar(){
    ctxObstaculo.clearRect(0,0,1700,800);
    obstaculos();

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