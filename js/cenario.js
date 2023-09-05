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

areia();
pedras();