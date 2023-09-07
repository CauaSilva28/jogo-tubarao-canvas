const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const musicaFundo = document.getElementById('musicaFundo');
const somMorte = document.getElementById('somMorte');

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

function animar(){
    ctx.clearRect(0,0,1700,800);
    obstaculos();
    personagem();
    tubarao();
    areia();
    pedras();

    //Personagem afundando
    
    movimentoPerso += veloAfundar;
    if(movimentoPerso >= 625){
        movimentoPerso = 625;
    }

    //Movimenta obstaculos

    for (var i = 0; i < 7; i++) {  
        posicaoCano[i] -= veloCano;

        if(posicaoCano[i] < -60){
            posicaoCano[i] = 1700;
            veloCano2+=0.05;
        }
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
        if(movimentoTuba >= 250){
            
        }
    }
    
    requestAnimationFrame(animar);
}

function Iniciar(){
    const btniniciar = document.getElementById("botaoIniciar").remove();
    //Movimento personagem para cima e para baixo
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
}

obstaculos();
personagem();
tubarao();
areia();
pedras();