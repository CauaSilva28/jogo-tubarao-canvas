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

function algas(){
    ctx.beginPath();
    ctx.strokeStyle = '#721f91';
    ctx.moveTo(1520,740);
    ctx.quadraticCurveTo(1470,700,1490,690);
    ctx.quadraticCurveTo(1500,685,1490,670);
    ctx.quadraticCurveTo(1470,650,1490,630);
    ctx.quadraticCurveTo(1520,675,1519,680);
    ctx.quadraticCurveTo(1520,690,1513,700);
    ctx.quadraticCurveTo(1510,710,1520,715);
    ctx.quadraticCurveTo(1550,690,1520,640);
    ctx.quadraticCurveTo(1510,620,1530,600);
    ctx.quadraticCurveTo(1550,640,1560,670);
    ctx.quadraticCurveTo(1560,710,1555,715);
    ctx.quadraticCurveTo(1560,720,1572,690);
    ctx.quadraticCurveTo(1585,650,1570,640);
    ctx.quadraticCurveTo(1545,610,1590,640);
    ctx.quadraticCurveTo(1605,655,1600,665);
    ctx.quadraticCurveTo(1590,680,1595,700);
    ctx.quadraticCurveTo(1600,710,1560,740);
    ctx.quadraticCurveTo(1540,760,1520,740);
    ctx.fillStyle = '#9122ba';
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.moveTo(1500,755);
    ctx.quadraticCurveTo(1510,715,1560,730);
    ctx.quadraticCurveTo(1620,760,1550,776);
    ctx.quadraticCurveTo(1500,780,1500,756);
    ctx.fillStyle = '#4f5561';
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(1500,755);
    ctx.quadraticCurveTo(1510,715,1560,730);
    ctx.quadraticCurveTo(1560,740,1500,755);
    ctx.fillStyle = '#5b626e';
    ctx.fill();
}

function obstaculos(){
    ctx.beginPath();
    ctx.fillStyle = '#144f25'
    ctx.fillRect(posicaoCano[0],0,50,canoCeu[0]);
    ctx.fillStyle = '#144f25'
    ctx.fillRect(posicaoCano[0],canoChao[0],50,800);
    
    ctx.fillStyle = '#144f25'
    ctx.fillRect(posicaoCano[1],0,50,canoCeu[1]);
    ctx.fillStyle = '#144f25'
    ctx.fillRect(posicaoCano[1],canoChao[1],50,800);

    ctx.fillStyle = '#144f25'
    ctx.fillRect(posicaoCano[2],0,50,canoCeu[2]);
    ctx.fillStyle = '#144f25'
    ctx.fillRect(posicaoCano[2],canoChao[2],50,800);

    ctx.fillStyle = '#144f25'
    ctx.fillRect(posicaoCano[3],0,50,canoCeu[3]);
    ctx.fillStyle = '#144f25'
    ctx.fillRect(posicaoCano[3],canoChao[3],50,800);

    ctx.fillStyle = '#144f25'
    ctx.fillRect(posicaoCano[4],0,50,canoCeu[4]);
    ctx.fillStyle = '#144f25'
    ctx.fillRect(posicaoCano[4],canoChao[4],50,800);

    ctx.fillStyle = '#144f25'
    ctx.fillRect(posicaoCano[5],0,50,canoCeu[5]);
    ctx.fillStyle = '#144f25'
    ctx.fillRect(posicaoCano[5],canoChao[5],50,800);

    ctx.fillStyle = '#144f25'
    ctx.fillRect(posicaoCano[6],0,50,canoCeu[6]);
    ctx.fillStyle = '#144f25'
    ctx.fillRect(posicaoCano[6],canoChao[6],50,800);
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
    ctx.fillStyle = '#000';
    ctx.fillRect(630,50,470, 25);

    ctx.beginPath();
    ctx.fillStyle = '#ffc400';
    ctx.fillRect(630,50,tamanhoBarra, 25);
}

function barraVida(){
    ctx.beginPath();
    ctx.fillStyle = '#000';
    ctx.fillRect(720,90,300, 25);

    ctx.beginPath();
    ctx.fillStyle = '#ff0000';
    ctx.fillRect(720,90,tamanhoBarraVida, 25);
}