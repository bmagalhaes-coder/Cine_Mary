/*==========================================
            LOGO DO SITE
==========================================*/

const logo =
"https://pop.proddigital.com.br/wp-content/uploads/sites/8/2023/06/01-47.jpg";

/*==========================================
              FILMES
==========================================*/

const filmes = [

{
    titulo:"Vingadores",

    imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi1MFqIzIfk0hNzpm6oxyRsDq7kg0zwUNr7oC9Uq2COTk7eu5UgfKhWilw&s=10",

    classificacao:"12 anos",

    duracao:"2h23min",
  
    ano: "2012",

    nota:"★★★★★",

    sinopse:
    "Os maiores heróis da Terra unem forças quando Loki ameaça dominar o planeta com um poderoso exército alienígena. Homem de Ferro, Capitão América, Thor, Hulk, Viúva Negra e Gavião Arqueiro precisam trabalhar juntos para salvar a humanidade.",

    horarios:{
        Segunda:"14:00",
        Terça:"14:00",
        Quarta:"16:30",
        Quinta:"16:30",
        Sexta:"19:30",
        Sábado:"21:00"
    }

},

{

    titulo:"Homem-Aranha: Sem Volta para Casa",

    imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGuCWZyEF6Oyl-fxVzc4OHBhKSUhctQdwMALh71tEOp0J2Jan6gOTy1Hs&s=10",

    classificacao:"12 anos",

    duracao:"2h28min",

    ano: "2021",

    nota:"★★★★★",

    sinopse:
    "Após sua identidade ser revelada, Peter Parker pede ajuda ao Doutor Estranho. O feitiço dá errado e vilões de outros universos aparecem, obrigando diferentes versões do Homem-Aranha a lutarem juntas.",

    horarios:{
        Segunda:"15:30",
        Terça:"15:30",
        Quarta:"18:00",
        Quinta:"18:00",
        Sexta:"20:30",
        Sábado:"22:00"
    }

},

{

    titulo:"Guardiões da Galáxia Vol. 1",

    imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg2l13jvNcDjF71oV06SgvXl3fwoWE1G5ZeHFqruSsqFjV7td9Kj9wsA4&s=10",

    classificacao:"14 anos",

    duracao:"2h01min",
  
    ano: "2014",
  
    nota:"★★★★☆",

    sinopse:
    "Peter Quill reúne um grupo improvável formado por Rocket, Groot, Gamora e Drax para impedir que um poderoso artefato caia nas mãos erradas e destrua a galáxia.",

    horarios:{
        Segunda:"13:30",
        Terça:"13:30",
        Quarta:"17:00",
        Quinta:"17:00",
        Sexta:"20:00",
        Sábado:"22:30"
    }

},

{

    titulo:"Vingadores: Ultimato",

    imagem:"https://br.web.img3.acsta.net/pictures/19/04/26/17/30/2428965.jpg",

    classificacao:"12 anos",

    duracao:"3h01min",

    ano:"2019",

    nota:"★★★★★",

    sinopse:
    "Após os acontecimentos devastadores causados por Thanos, os Vingadores restantes unem forças em uma missão definitiva para restaurar o universo. Em uma batalha épica, heróis de diferentes partes do mundo enfrentam seu maior desafio para salvar toda a humanidade.",

    horarios:{
        Segunda:"13:00",
        Terça:"13:00",
        Quarta:"16:00",
        Quinta:"16:00",
        Sexta:"19:00",
        Sábado:"20:30"
    }

}

];


/*==========================================
         CRIANDO O CABEÇALHO
==========================================*/

const header = document.getElementById("header");

const imagemLogo = document.createElement("img");

imagemLogo.src = logo;

const tituloArea = document.createElement("div");

const titulo = document.createElement("h1");

titulo.textContent = "Catálogo Cine Mary+";

const subtitulo = document.createElement("p");

subtitulo.textContent =
"Os maiores sucessos do cinema em um só lugar.";

tituloArea.appendChild(titulo);

tituloArea.appendChild(subtitulo);

header.appendChild(imagemLogo);

header.appendChild(tituloArea);


/*==========================================
        DIA DA SEMANA
==========================================*/

const diasSemana = [

"Domingo",

"Segunda",

"Terça",

"Quarta",

"Quinta",

"Sexta",

"Sábado"

];

const hoje = diasSemana[new Date().getDay()];


/*==========================================
       CRIANDO OS CARDS
==========================================*/

const catalogo = document.getElementById("catalogo");

function calcularFim(inicio,duracao){

    const horaInicio=parseInt(inicio.split(":")[0]);
    const minutoInicio=parseInt(inicio.split(":")[1]);

    const partes=duracao.replace("min","").split("h");

    const horas=parseInt(partes[0]);

    const minutos=parseInt(partes[1]);

    let totalMinutos=
    horaInicio*60+
    minutoInicio+
    horas*60+
    minutos;

    let horaFim=Math.floor(totalMinutos/60)%24;

    let minutoFim=totalMinutos%60;

    return inicio+" - "+horaFim.toString().padStart(2,"0")+":"+minutoFim.toString().padStart(2,"0");

}

filmes.forEach((filme)=>{

const card = document.createElement("div");

card.className="card";


const poster = document.createElement("img");

poster.src=filme.imagem;


const info=document.createElement("div");

info.className="info";


const nome=document.createElement("h2");

nome.textContent=filme.titulo;


const estrelas=document.createElement("div");

estrelas.className="estrelas";

estrelas.textContent=filme.nota;

const ano=document.createElement("p");

ano.style.color="#bdbdbd";
ano.style.marginBottom="12px";
ano.style.fontSize="15px";

ano.textContent="📅 Lançamento: "+filme.ano;

const tituloHorario=document.createElement("h3");

tituloHorario.textContent="Horários";


const horarios=document.createElement("div");

horarios.className="horarios";


for(const dia in filme.horarios){

const linha=document.createElement("div");

linha.className="linhaHorario";

if(dia===hoje){

linha.classList.add("hoje");

}

const nomeDia=document.createElement("span");

nomeDia.textContent=dia;

const hora=document.createElement("span");

hora.textContent=
calcularFim(
filme.horarios[dia],
filme.duracao
);

linha.appendChild(nomeDia);

linha.appendChild(hora);

horarios.appendChild(linha);

}


const classificacao=document.createElement("div");

classificacao.className="classificacao";

classificacao.textContent=
"Classificação: "+filme.classificacao;


info.appendChild(nome);

info.appendChild(estrelas);

info.appendChild(ano);

info.appendChild(tituloHorario);

info.appendChild(horarios);

info.appendChild(classificacao);

card.appendChild(poster);

card.appendChild(info);

/*==========================================
      EVENTO DE CLIQUE DO CARD
==========================================*/

card.addEventListener("click",()=>{

const popup=document.getElementById("popup");

const popupImagem=document.getElementById("popupImagem");

const popupTitulo=document.getElementById("popupTitulo");

const popupClassificacao=document.getElementById("popupClassificacao");

const popupDuracao=document.getElementById("popupDuracao");

const popupAno=document.getElementById("popupAno");

const popupHorario=document.getElementById("popupHorario");

const popupSinopse=document.getElementById("popupSinopse");


popupImagem.src=filme.imagem;

popupTitulo.textContent=filme.titulo;

popupClassificacao.textContent=
"🎬 Classificação: "+filme.classificacao;

popupDuracao.textContent=
"⏱ Duração: "+filme.duracao;

popupAno.textContent=
"📅 Lançamento: "+filme.ano;

popupHorario.textContent=
"📅 Sessões de Segunda a Sábado";

popupSinopse.textContent=
filme.sinopse;


popup.style.display="flex";

});


catalogo.appendChild(card);

});


/*==========================================
         FECHAR POPUP
==========================================*/

const popup=document.getElementById("popup");

const fecharPopup=document.getElementById("fecharPopup");


fecharPopup.addEventListener("click",()=>{

popup.style.display="none";

});


popup.addEventListener("click",(evento)=>{

if(evento.target===popup){

popup.style.display="none";

}

});


/*==========================================
      TECLA ESC FECHA O POPUP
==========================================*/

document.addEventListener("keydown",(evento)=>{

if(evento.key==="Escape"){

popup.style.display="none";

}

});


/*==========================================
        EFEITO HOVER NOS CARDS
==========================================*/

const cards=document.querySelectorAll(".card");

cards.forEach((card)=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px) scale(1.03)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0) scale(1)";

});

});


/*==========================================
      ANIMAÇÃO AO CARREGAR A PÁGINA
==========================================*/

window.addEventListener("load",()=>{

const cards=document.querySelectorAll(".card");

cards.forEach((card,indice)=>{

card.style.opacity="0";

card.style.transform="translateY(40px)";

setTimeout(()=>{

card.style.transition=".6s";

card.style.opacity="1";

card.style.transform="translateY(0)";

},indice*250);

});

});


/*==========================================
     MENSAGEM NO CONSOLE
==========================================*/

console.log("Catálogo Cine Mary+ carregado com sucesso!");

/*==========================================
   ESCONDER BANNER E CABEÇALHO AO ROLAR
==========================================*/

const banner = document.getElementById("banner");
const cabecalho = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {
        banner.classList.add("esconder");
        cabecalho.classList.add("esconder");
    } else {
        banner.classList.remove("esconder");
        cabecalho.classList.remove("esconder");
    }

});