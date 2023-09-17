const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const audioFundo = document.getElementById('musicaFundo');

const mensagemDerrota = 'Você morreu!';
const mensagemVitoria = 'Você conseguiu fugir!';

var espacoCano = 250;
var posicaoCano = [];
var canoCeu = [];
var canoChao = [];
var veloCano = 1;
var veloCano2 = 1;
var espacoYcano = 150;

for (var i = 0; i < 7; i++) {
    posicaoCano[i] = 500 + espacoCano * i;
    canoCeu[i] = Math.floor(Math.random()*500);
    canoChao[i] = canoCeu[i] + espacoYcano;
}

var movimentoPerso = 410;
var veloPerso = 10;
var veloAfundar = 1;

var movimentoTuba = 50;
var veloTuba = 2;

var tempo = 0;
var tamanhoBarra = 0;
var tamanhoBarraVida = 300;

function atualizarContadores(){
    tempo++;
    tamanhoBarra+=3;
}

function animar(){
    ctx.clearRect(0,0,1700,800);
    obstaculos();
    personagem();
    tubarao();
    areia();
    pedras();
    algas();
    barraPercurso();
    barraVida();

    // Afunda personagem

    movimentoPerso += veloAfundar;
    if(movimentoPerso >= 625){
        movimentoPerso = 625;
    }

    //Movimenta obstaculos

    for (var i = 0; i < 7; i++) {  
        posicaoCano[i] -= veloCano;

        if(posicaoCano[i] < -60){
            posicaoCano[i] = 1700;
            veloCano2+=0.03;
            canoCeu[i] = Math.floor(Math.random()*500);
            canoChao[i] = canoCeu[i] + espacoYcano;
        }
    }

    //Aumentando velocidade do personagem quando os obstaculos ficarem mais rápidos

    if(veloCano2 >= 2.5){
        veloPerso = 14;
    }
    else if(veloCano2 >= 3.5){
        veloPerso = 16;
    }

    //Colisão

    if(posicaoCano[0] >= 200 && posicaoCano[0] <= 300 && movimentoPerso >= 0 && movimentoPerso <= canoCeu[0] || posicaoCano[0] <= 300 && posicaoCano[0] >= 200 && movimentoPerso >= canoChao[0]-10 && movimentoPerso <= 800){
        veloCano = 0;
        if(posicaoCano[0] >= 200 && posicaoCano[0] <= 280){
            if(movimentoPerso <= canoCeu[0]){
                movimentoPerso = canoCeu[0];
            }
            if(movimentoPerso >= canoChao[0]-10){
                movimentoPerso = canoChao[0]-10;
            }
        }
    }

    else if(posicaoCano[1] >= 200 && posicaoCano[1] <= 300 && movimentoPerso >= 0 && movimentoPerso <= canoCeu[1] || posicaoCano[1] <= 300 && posicaoCano[1] >= 200 && movimentoPerso >= canoChao[1]-10 && movimentoPerso <= 800){
        veloCano = 0;
        if(posicaoCano[1] >= 200 && posicaoCano[1] <= 280){
            if(movimentoPerso <= canoCeu[1]){
                movimentoPerso = canoCeu[1];
            }
            if(movimentoPerso >= canoChao[1]-10){
                movimentoPerso = canoChao[1]-10;
            }
        }
    }

    else if(posicaoCano[2] >= 200 && posicaoCano[2] <= 300 && movimentoPerso >= 0 && movimentoPerso <= canoCeu[2] || posicaoCano[2] <= 300 && posicaoCano[2] >= 200 && movimentoPerso >= canoChao[2]-10 && movimentoPerso <= 800){
        veloCano = 0;
        if(posicaoCano[2] >= 200 && posicaoCano[2] <= 280){
            if(movimentoPerso <= canoCeu[2]){
                movimentoPerso = canoCeu[2];
            }
            if(movimentoPerso >= canoChao[2]-10){
                movimentoPerso = canoChao[2]-10;
            }
        }
    }

    else if(posicaoCano[3] >= 200 && posicaoCano[3] <= 300 && movimentoPerso >= 0 && movimentoPerso <= canoCeu[3] || posicaoCano[3] <= 300 && posicaoCano[3] >= 200 && movimentoPerso >= canoChao[3]-10 && movimentoPerso <= 800){
        veloCano = 0;
        if(posicaoCano[3] >= 200 && posicaoCano[3] <= 280){
            if(movimentoPerso <= canoCeu[3]){
                movimentoPerso = canoCeu[3];
            }
            if(movimentoPerso >= canoChao[3]-10){
                movimentoPerso = canoChao[3]-10;
            }
        }
    }

    else if(posicaoCano[4] >= 200 && posicaoCano[4] <= 300 && movimentoPerso >= 0 && movimentoPerso <= canoCeu[4] || posicaoCano[4] <= 300 && posicaoCano[4] >= 200 && movimentoPerso >= canoChao[4]-10 && movimentoPerso <= 800){
        veloCano = 0;
        if(posicaoCano[4] >= 200 && posicaoCano[4] <= 280){
            if(movimentoPerso <= canoCeu[4]){
                movimentoPerso = canoCeu[4];
            }
            if(movimentoPerso >= canoChao[4]-10){
                movimentoPerso = canoChao[4]-10;
            }
        }
    }

    else if(posicaoCano[5] >= 200 && posicaoCano[5] <= 300 && movimentoPerso >= 0 && movimentoPerso <= canoCeu[5] || posicaoCano[5] <= 300 && posicaoCano[5] >= 200 && movimentoPerso >= canoChao[5]-10 && movimentoPerso <= 800){
        veloCano = 0;
        if(posicaoCano[5] >= 200 && posicaoCano[5] <= 280){
            if(movimentoPerso <= canoCeu[5]){
                movimentoPerso = canoCeu[5];
            }
            if(movimentoPerso >= canoChao[5]-10){
                movimentoPerso = canoChao[5]-10;
            }
        }
    }

    else if(posicaoCano[6] >= 200 && posicaoCano[6] <= 300 && movimentoPerso >= 0 && movimentoPerso <= canoCeu[6] || posicaoCano[6] <= 300 && posicaoCano[6] >= 200 && movimentoPerso >= canoChao[6]-10 && movimentoPerso <= 800){
        veloCano = 0;
        if(posicaoCano[6] >= 200 && posicaoCano[6] <= 280){
            if(movimentoPerso <= canoCeu[6]){
                movimentoPerso = canoCeu[6];
            }
            if(movimentoPerso >= canoChao[6]-10){
                movimentoPerso = canoChao[6]-10;
            }
        }
    }

    else{
        veloCano = veloCano2;
    }

    //Movimento tubarão

    if(veloCano == 0){
        movimentoTuba += veloTuba;
        tamanhoBarraVida -= 3;
        if(tamanhoBarraVida<=0){
            tamanhoBarraVida = 0;
        }
        // Derrota
        if(movimentoTuba >= 250){
            audioFundo.pause();
            audioFundo.load();
            ctx.font = '50px arial black';
            ctx.fillStyle = '#ff0000';
            ctx.fillText(mensagemDerrota, 680,400);
            veloPerso = 0;
            veloAfundar = 0;
            veloTuba = 0;
            veloCano = 0;
            veloCano2 = 0;
            clearInterval(intervalo);
        }
    }

    // Adicionando frases na tela

    const fraseTempo = `Tempo: ${tempo}`;
    ctx.font = '30px verdana black';
    ctx.fillStyle = '#000';
    ctx.fillText(fraseTempo, 50,50);

    // Vitória

    if(tamanhoBarra >= 470){
        audioFundo.pause();
        audioFundo.load();
        ctx.font = '50px arial black';
        ctx.fillStyle = '#2cc944';
        ctx.fillText(mensagemVitoria, 580,400);
        veloTuba = 0;
        movimentoTuba = -100;
        clearInterval(intervalo);
    }
    
    requestAnimationFrame(animar);
}

function Reiniciar(){
    clearInterval(intervalo);
    audioFundo.pause();
    audioFundo.load();
    audioFundo.play();
    espacoCano = 250;
    posicaoCano = [];
    veloCano = 1;
    veloCano2 = 1;

    for (i = 0; i < 7; i++) {
        posicaoCano[i] = 500 + espacoCano * i;
        canoCeu[i] = Math.floor(Math.random()*400);
        canoChao[i] = canoCeu[i] + espacoYcano;
    }

    movimentoPerso = 410;
    veloPerso = 10;
    veloAfundar = 1;

    movimentoTuba = 50;
    veloTuba = 2;

    tempo = 0;
    tamanhoBarra = 0;
    tamanhoBarraVida = 300;

    intervalo = setInterval(atualizarContadores, 1000);
}


function Iniciar(){
    intervalo = setInterval(atualizarContadores, 1000);
    audioFundo.play();
    audioFundo.volume = 0.05;
    const btniniciar = document.getElementById('botaoIniciar').remove();

    //Movimento personagem para cima e para baixo
        document.addEventListener('keydown', function(event){
            personagem();
            if(event.key === 'w' || event.key === 'W'){
                movimentoPerso -= veloPerso
            }

            if(event.key === 's' || event.key === 'S'){
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
}

//Chamando funções

obstaculos();
personagem();
tubarao();
areia();
pedras();
algas();