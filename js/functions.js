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
    ctx.beginPath();
    ctx.fillStyle = '#144f25'
    ctx.fillRect(posicaoCano[0],0,50,330);
    ctx.fillStyle = '#144f25'
    ctx.fillRect(posicaoCano[0],470,50,330);
    
    ctx.beginPath();
    ctx.fillStyle = '#144f25'
    ctx.fillRect(posicaoCano[1],0,50,150);
    ctx.fillStyle = '#144f25'
    ctx.fillRect(posicaoCano[1],300,50,500);

    ctx.beginPath();
    ctx.fillStyle = '#144f25'
    ctx.fillRect(posicaoCano[2],0,50,450);
    ctx.fillStyle = '#144f25'
    ctx.fillRect(posicaoCano[2],600,50,200);

    ctx.beginPath();
    ctx.fillStyle = '#144f25'
    ctx.fillRect(posicaoCano[3],0,50,350);
    ctx.fillStyle = '#144f25'
    ctx.fillRect(posicaoCano[3],500,50,300);

    ctx.beginPath();
    ctx.fillStyle = '#144f25'
    ctx.fillRect(posicaoCano[4],0,50,450);
    ctx.fillStyle = '#144f25'
    ctx.fillRect(posicaoCano[4],600,50,200);

    ctx.beginPath();
    ctx.fillStyle = '#144f25'
    ctx.fillRect(posicaoCano[5],0,50,150);
    ctx.fillStyle = '#144f25'
    ctx.fillRect(posicaoCano[5],300,50,500);

    ctx.beginPath();
    ctx.fillStyle = '#144f25'
    ctx.fillRect(posicaoCano[6],0,50,250);
    ctx.fillStyle = '#144f25'
    ctx.fillRect(posicaoCano[6],400,50,400);
}

function personagem(){
    ctx.beginPath();
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
    ctx.beginPath();
    ctx.fillStyle = '#c4b664';
    ctx.fillRect(movimentoTuba,movimentoPerso+5,69,5);
    ctx.fillStyle = '#398026';
    ctx.fillRect(movimentoTuba,movimentoPerso-10,60,30);
    ctx.fillRect(movimentoTuba,movimentoPerso-10,70,16);
    ctx.fillRect(movimentoTuba,movimentoPerso+15,70,5);
    ctx.fillStyle = '#377328';
    ctx.fillRect(movimentoTuba+25,movimentoPerso-18,15,10);
    ctx.fillRect(movimentoTuba+25,movimentoPerso,20,10);
    ctx.fillRect(movimentoTuba,movimentoPerso-2,-20,15);
    ctx.arc(movimentoTuba+65,movimentoPerso-5,2,0,Math.PI*2,true);
    ctx.fillStyle = '#ff0000';
    ctx.fill();
}

function barraPercurso(){
    ctx.beginPath();
    ctx.fillStyle = '#ffc400';
    ctx.fillRect(500,750,tamanhoBarra, 25);
}