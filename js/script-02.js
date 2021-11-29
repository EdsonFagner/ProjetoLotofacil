//Definindo uma variavel constante para armazenar comando de seleção unica.
const c = (el)=>document.querySelector(el);
//Definindo uma variavel constante para armazenar comando de seleção unica.
const cs = (el)=>document.querySelectorAll(el);
//Definindo variavel para utilizar no evento de click.
let x = 0;

//Evento ao clicar no botão 'Lotofacil' exibe o menu.
//Ativar quando estiver com menu no mobile.
/*
c('.lotofacil').addEventListener('click', ()=>{
        //Condição para ativar ou desativar display do sub-menu-lotofacil'.
        if (x==0){
            c('.sub-menu-lotofacil').style.display = 'flex';     
            x=1;
        }
        else{
            c('.sub-menu-lotofacil').style.display = 'none';
            x=0;
        }

});
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

c('.lotofacil').addEventListener('click', ()=>{
    //Condição para ativar ou desativar display do sub-menu-lotofacil'.
    if (x==0){
        c('.nav-erre').style.display = "flex";
        c('.nav-resultados').style.display = "none";
        c('.nav-videos').style.display = "none";
        c('.nav-erre4').style.display = "none";
        c('.nav-erre5').style.display = "none";
        c('.nav-erre7').style.display = "none";
        c('.nav-jogo-quente').style.display = "none";

    }
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

c('.resultados').addEventListener('click', ()=>{
    //Condição para ativar ou desativar display do sub-menu-lotofacil'.
    if (x==0){
        c('.nav-resultados').style.display = "flex";
        c('.nav-erre').style.display = "none";
        c('.nav-videos').style.display = "none";
        c('.nav-erre4').style.display = "none";
        c('.nav-erre5').style.display = "none";
        c('.nav-erre7').style.display = "none";
        c('.nav-jogo-quente').style.display = "none";    
    }
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

c('.videos').addEventListener('click', ()=>{
    //Condição para ativar ou desativar display do sub-menu-lotofacil'.
    if (x==0){
        c('.nav-videos').style.display = "flex";
        c('.nav-erre').style.display = "none";
        c('.nav-resultados').style.display = "none";
        c('.nav-erre4').style.display = "none";
        c('.nav-erre5').style.display = "none";
        c('.nav-erre7').style.display = "none";
        c('.nav-jogo-quente').style.display = "none";
    }
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

c('.btn-erre4').addEventListener('click', ()=>{
    //Condição para ativar ou desativar display do sub-menu-lotofacil'.
    if (x==0){
        c('.nav-erre4').style.display = "flex";
        c('.nav-videos').style.display = "none";
        c('.nav-erre').style.display = "none";
        c('.nav-resultados').style.display = "none";
        c('.nav-erre5').style.display = "none";
        c('.nav-erre7').style.display = "none";
        c('.nav-jogo-quente').style.display = "none";
    }
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

c('.btn-erre5').addEventListener('click', ()=>{
    //Condição para ativar ou desativar display do sub-menu-lotofacil'.
    if (x==0){
        c('.nav-erre5').style.display = "flex";
        c('.nav-erre4').style.display = "none";
        c('.nav-videos').style.display = "none";
        c('.nav-erre').style.display = "none";
        c('.nav-resultados').style.display = "none";
        c('.nav-erre7').style.display = "none";
        c('.nav-jogo-quente').style.display = "none";
    }
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

c('.btn-erre7').addEventListener('click', ()=>{
    //Condição para ativar ou desativar display do sub-menu-lotofacil'.
    if (x==0){
        c('.nav-erre7').style.display = "flex";
        c('.nav-erre5').style.display = "none";
        c('.nav-erre4').style.display = "none";
        c('.nav-videos').style.display = "none";
        c('.nav-erre').style.display = "none";
        c('.nav-resultados').style.display = "none";
        c('.nav-jogo-quente').style.display = "none";
    }
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

c('.btn-jogo-quente').addEventListener('click', ()=>{
    //Condição para ativar ou desativar display do sub-menu-lotofacil'.
    if (x==0){
        c('.nav-jogo-quente').style.display = "flex";
        c('.nav-erre7').style.display = "none";
        c('.nav-erre5').style.display = "none";
        c('.nav-erre4').style.display = "none";
        c('.nav-videos').style.display = "none";
        c('.nav-erre').style.display = "none";
        c('.nav-resultados').style.display = "none";
    }
});