const canvasCenario = document.getElementById('canvasCenario');
const ctxCena = canvasCenario.getContext('2d');

function areia(){
    ctxCena.strokeStyle = '#fff6db';
    ctxCena.lineWidth = 10;
    ctxCena.beginPath();
    ctxCena.moveTo(0,700);
    ctxCena.quadraticCurveTo(100,650,200,640);
    ctxCena.quadraticCurveTo(300,630,450,700);
    ctxCena.quadraticCurveTo(500,720,710,700);
    ctxCena.quadraticCurveTo(780,690,1000,680);
    ctxCena.quadraticCurveTo(1100,670,1700,680);
    ctxCena.lineTo(1700,800);
    ctxCena.lineTo(0,800);
    ctxCena.lineTo(0,700);
    ctxCena.fillStyle = '#f5e6bc';
    ctxCena.fill()
    ctxCena.stroke();
}

function pedras(){
    ctxCena.fillStyle = '#4f5561';
    ctxCena.beginPath();
    ctxCena.arc(150,750,4,0,Math.PI*2,true);
    ctxCena.fill();
    ctxCena.beginPath();
    ctxCena.arc(300,720,5,0,Math.PI*2,true);
    ctxCena.fill();
    ctxCena.beginPath();
    ctxCena.arc(400,710,5,0,Math.PI*2,true);
    ctxCena.fill();
    ctxCena.beginPath();
    ctxCena.arc(200,690,3,0,Math.PI*2,true);
    ctxCena.fill();
    ctxCena.beginPath();
    ctxCena.arc(1400,720,5,0,Math.PI*2,true);
    ctxCena.fill();
    ctxCena.beginPath();
    ctxCena.arc(1100,700,3,0,Math.PI*2,true);
    ctxCena.fill();
    ctxCena.beginPath();
    ctxCena.arc(1200,760,6,0,Math.PI*2,true);
    ctxCena.fill();

    ctxCena.beginPath();
    ctxCena.lineWidth = 3;
    ctxCena.moveTo(850,750);
    ctxCena.quadraticCurveTo(860,710,910,725);
    ctxCena.quadraticCurveTo(970,755,900,770);
    ctxCena.quadraticCurveTo(850,775,850,750);
    ctxCena.fillStyle = '#4f5561';
    ctxCena.fill();

    ctxCena.beginPath();
    ctxCena.moveTo(850,750);
    ctxCena.quadraticCurveTo(860,710,910,725);
    ctxCena.quadraticCurveTo(910,735,850,750);
    ctxCena.fillStyle = '#5b626e';
    ctxCena.fill();
}

areia();
pedras();