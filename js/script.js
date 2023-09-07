const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const audioFundo = document.getElementById('musicaFundo');

const mensagemDerrota = 'Você morreu!';
const mensagemVitoria = 'Você conseguiu fugir!';

var espacoCano = 250;
var posicaoCano = [];
var veloCano = 1;
var veloCano2 = 1;

for (var i = 0; i < 7; i++) {
    posicaoCano[i] = 500 + espacoCano * i;
}

var movimentoPerso = 410;
var veloPerso = 8;
var veloAfundar = 0.5;

var movimentoTuba = 50;
var veloTuba = 2;

var tempo = 0;
var tamanhoBarra = 10;

function atualizarContadores(){
    tempo++;
    tamanhoBarra+=2;
}

function animar(){
    ctx.clearRect(0,0,1700,800);
    obstaculos();
    personagem();
    tubarao();
    areia();
    pedras();
    barraPercurso();

    //Personagem afundando
    
    movimentoPerso += veloAfundar;
    if(movimentoPerso >= 625){
        movimentoPerso = 625;
    }

    //Movimenta obstaculos

    for (i = 0; i < 7; i++) {  
        posicaoCano[i] -= veloCano;

        if(posicaoCano[i] < -60){
            posicaoCano[i] = 1700;
            veloCano2+=0.03;
        }
    }

    //Aumentando velocidade do personagem quando os obstaculos ficarem mais rápidos

    if(veloCano2 >= 2.5){
        veloPerso = 15;
    }
    else if(veloCano2 >= 4){
        veloPerso = 18;
    }

    //Colisão

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

    else if(posicaoCano[1] >= 200 && posicaoCano[1] <= 300 && movimentoPerso >= 0 && movimentoPerso <= 150 || posicaoCano[1] <= 300 && posicaoCano[1] >= 200 && movimentoPerso >= 290 && movimentoPerso <= 625){
        veloCano = 0;
        if(posicaoCano[1] >= 200 && posicaoCano[1] <= 280){
            if(movimentoPerso <= 150){
                movimentoPerso = 150;
            }
            if(movimentoPerso >= 290){
                movimentoPerso = 290;
            }
        }
    }

    else if(posicaoCano[2] >= 200 && posicaoCano[2] <= 300 && movimentoPerso >= 0 && movimentoPerso <= 450 || posicaoCano[2] <= 300 && posicaoCano[2] >= 200 && movimentoPerso >= 590 && movimentoPerso <= 625){
        veloCano = 0;
        if(posicaoCano[2] >= 200 && posicaoCano[2] <= 280){
            if(movimentoPerso <= 450){
                movimentoPerso = 450;
            }
            if(movimentoPerso >= 590){
                movimentoPerso = 590;
            }
        }
    }

    else if(posicaoCano[3] >= 200 && posicaoCano[3] <= 300 && movimentoPerso >= 0 && movimentoPerso <= 350 || posicaoCano[3] <= 300 && posicaoCano[3] >= 200 && movimentoPerso >= 490 && movimentoPerso <= 625){
        veloCano = 0;
        if(posicaoCano[3] >= 200 && posicaoCano[3] <= 280){
            if(movimentoPerso <= 350){
                movimentoPerso = 350;
            }
            if(movimentoPerso >= 490){
                movimentoPerso = 490;
            }
        }
    }

    else if(posicaoCano[4] >= 200 && posicaoCano[4] <= 300 && movimentoPerso >= 0 && movimentoPerso <= 450 || posicaoCano[4] <= 300 && posicaoCano[4] >= 200 && movimentoPerso >= 590 && movimentoPerso <= 625){
        veloCano = 0;
        if(posicaoCano[4] >= 200 && posicaoCano[4] <= 280){
            if(movimentoPerso <= 450){
                movimentoPerso = 450;
            }
            if(movimentoPerso >= 590){
                movimentoPerso = 590;
            }
        }
    }

    else if(posicaoCano[5] >= 200 && posicaoCano[5] <= 300 && movimentoPerso >= 0 && movimentoPerso <= 150 || posicaoCano[5] <= 300 && posicaoCano[5] >= 200 && movimentoPerso >= 290 && movimentoPerso <= 625){
        veloCano = 0;
        if(posicaoCano[5] >= 200 && posicaoCano[5] <= 280){
            if(movimentoPerso <= 150){
                movimentoPerso = 150;
            }
            if(movimentoPerso >= 290){
                movimentoPerso = 290;
            }
        }
    }

    else if(posicaoCano[6] >= 200 && posicaoCano[6] <= 300 && movimentoPerso >= 0 && movimentoPerso <= 250 || posicaoCano[6] <= 300 && posicaoCano[6] >= 200 && movimentoPerso >= 390 && movimentoPerso <= 625){
        veloCano = 0;
        if(posicaoCano[6] >= 200 && posicaoCano[6] <= 280){
            if(movimentoPerso <= 250){
                movimentoPerso = 250;
            }
            if(movimentoPerso >= 390){
                movimentoPerso = 390;
            }
        }
    }

    else{
        veloCano = veloCano2;
    }

    //Movimento tubarão

    if(veloCano == 0){
        movimentoTuba += veloTuba;
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
            if(!intervalo){
                clearInterval(intervalo);
            }
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
        veloAfundar = 0;
        veloTuba = 0;
        movimentoTuba = -100;
        if(!intervalo){
            clearInterval(intervalo);
        }
    }
    
    requestAnimationFrame(animar);
}

function Reiniciar(){
    audioFundo.pause();
    audioFundo.load();
    audioFundo.play();
    espacoCano = 250;
    posicaoCano = [];
    veloCano = 1;
    veloCano2 = 1;

    for (i = 0; i < 7; i++) {
        posicaoCano[i] = 500 + espacoCano * i;
    }

    movimentoPerso = 410;
    veloPerso = 8;
    veloAfundar = 0.5;

    movimentoTuba = 50;
    veloTuba = 2;

    tempo = 0;
    tamanhoBarra = 10;

    if(!intervalo){
        intervalo = setInterval(atualizarContadores, 1000);
    }
}

function Iniciar(){
    intervalo = setInterval(atualizarContadores, 1000);
    audioFundo.play();
    audioFundo.volume = 0.05;
    const btniniciar = document.getElementById("botaoIniciar").remove();

    //Movimento personagem para cima e para baixo
        document.addEventListener('keydown', function(event){
            personagem();
            if(event.key === 'w'){
                movimentoPerso -= veloPerso
            }

            if(event.key === 's'){
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