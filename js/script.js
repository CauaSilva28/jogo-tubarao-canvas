const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

function areia(){
    ctx.strokeStyle = '#fff6db';
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(0,700);
    ctx.quadraticCurveTo(100,650,200,640);
    ctx.quadraticCurveTo(300,630,450,700);
    ctx.quadraticCurveTo(500,720,710,700);
    ctx.quadraticCurveTo(780,690,1000,680);
    ctx.quadraticCurveTo(1100,670,1700,680);
    ctx.lineTo(1700,800);
    ctx.lineTo(0,800);
    ctx.lineTo(0,700);
    ctx.fillStyle = '#f5e6bc';
    ctx.fill()
    ctx.stroke();
}

function pedras(){
    ctx.fillStyle = '#4f5561';
    ctx.beginPath();
    ctx.arc(150,750,4,0,Math.PI*2,true);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(300,720,5,0,Math.PI*2,true);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(400,710,5,0,Math.PI*2,true);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(200,690,3,0,Math.PI*2,true);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(1400,720,5,0,Math.PI*2,true);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(1100,700,3,0,Math.PI*2,true);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(1200,760,6,0,Math.PI*2,true);
    ctx.fill();

    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.moveTo(850,750);
    ctx.quadraticCurveTo(860,710,910,725);
    ctx.quadraticCurveTo(970,755,900,770);
    ctx.quadraticCurveTo(850,775,850,750);
    ctx.fillStyle = '#4f5561';
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(850,750);
    ctx.quadraticCurveTo(860,710,910,725);
    ctx.quadraticCurveTo(910,735,850,750);
    ctx.fillStyle = '#5b626e';
    ctx.fill();
}

function obstaculos(){
    ctx.fillStyle = '#144f25'
    ctx.fillRect(posicaoCano[0],0,50,330);
    ctx.fillStyle = '#144f25'
    ctx.fillRect(posicaoCano[0],470,50,330);
    
    ctx.fillStyle = '#144f25'
    ctx.fillRect(posicaoCano[1],0,50,150);
    ctx.fillStyle = '#144f25'
    ctx.fillRect(posicaoCano[1],300,50,500);

    ctx.fillStyle = '#144f25'
    ctx.fillRect(posicaoCano[2],0,50,450);
    ctx.fillStyle = '#144f25'
    ctx.fillRect(posicaoCano[2],600,50,200);

    ctx.fillStyle = '#144f25'
    ctx.fillRect(posicaoCano[3],0,50,350);
    ctx.fillStyle = '#144f25'
    ctx.fillRect(posicaoCano[3],500,50,300);

    ctx.fillStyle = '#144f25'
    ctx.fillRect(posicaoCano[4],0,50,450);
    ctx.fillStyle = '#144f25'
    ctx.fillRect(posicaoCano[4],600,50,200);

    ctx.fillStyle = '#144f25'
    ctx.fillRect(posicaoCano[5],0,50,150);
    ctx.fillStyle = '#144f25'
    ctx.fillRect(posicaoCano[5],300,50,500);

    ctx.fillStyle = '#144f25'
    ctx.fillRect(posicaoCano[6],0,50,250);
    ctx.fillStyle = '#144f25'
    ctx.fillRect(posicaoCano[6],400,50,400);
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

//======================================================================

var espacoCano = 250;
var posicaoCano = [];
var veloCano = 1;

for (var i = 0; i < 7; i++) {
    posicaoCano[i] = 500 + espacoCano * i;
}

var movimentoPerso = 410;
var veloPerso = 8;
var veloAfundar = 0.5;

function animar(){
    ctx.clearRect(0,0,1700,800);
    obstaculos();
    personagem();
    tubarao();
    areia();
    pedras();

    movimentoPerso += veloAfundar;
    if(movimentoPerso >= 625){
        movimentoPerso = 625;
    }


    //Colisão

    for (var i = 0; i < 7; i++) {  
        posicaoCano[i] -= veloCano;

        if(posicaoCano[i] < -60){
            posicaoCano[i] = 1700;
            veloCano+=0.05;
        }
    }

    if(posicaoCano[0] >= 200 && posicaoCano[0] <= 300 && movimentoPerso >= 0 && movimentoPerso <= 330 || posicaoCano[0] <= 300 && posicaoCano[0] >= 200 && movimentoPerso >= 460 && movimentoPerso <= 625){
        veloCano = 0;
        if(posicaoCano[0] >= 200 && posicaoCano[0] <= 280){
            if(movimentoPerso <= 330){
                movimentoPerso = 330;
            }
            if(movimentoPerso >= 460){
                movimentoPerso = 460;
            }
        }
    }
    else{
        veloCano = 1;
    }
    
    requestAnimationFrame(animar);
}

document.addEventListener('keydown', function(event){
    personagem();
    if(event.key === 'w'){
        movimentoPerso -= veloPerso
    }

    else if(event.key === 's'){
        movimentoPerso += veloPerso
    }

    if(movimentoPerso <= 0){
        movimentoPerso = 0;
    }

    if(movimentoPerso >= 625){
        movimentoPerso = 625;
    }
});

animar();
obstaculos();
personagem();
tubarao();
areia();
pedras();