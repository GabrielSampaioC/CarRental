const opiniao = document.querySelector(".testemunhas-opnioes");
const avaliacao = document.querySelector(".testemunhas-avaliacao");
const img = document.querySelector(".pessoas-foto");
const nome = document.querySelector(".testemunhas-nome");
const botao1 = document.getElementById("botao-1");
const botao2 = document.getElementById("botao-2");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }

    })
});

const hiddenElements = document.querySelectorAll('.hidden', '.animation');
hiddenElements.forEach((el) => observer.observe(el));

var contador = 0;
var testemunhas = [];

testemunhas[0] = {
    img: "style/photo-man1.png",
    opiniao: "There are many variations of passages a but Nullam vulputate urna, adipiscing vulputate mauris nisl sagittis et. Quisque id semper est nullam enim leo innec laoreet.",
    avaliacao: "4.8",
    nome: "Charlie Johnson"
}

testemunhas[1] = {
    img: "style/photo-woman.png",
    opiniao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, nam deleniti magni error vero quo quam maiores tempora ullam assumenda quibusdam quas, impedit incidunt.",
    avaliacao: "4.0",
    nome: "Mary Veni"
}

testemunhas[2] = {
    img: "style/photo-man.png",
    opiniao: "Aut eius amet ex numquam repellendus et repellat eveniet id sint laudantium sit molestiae neque! Et ipsum perspiciatis qui debitis internos sed reiciendis quasi,quibusdam quas.",
    avaliacao: "5.0",
    nome: "João Pedro Brauna"
}

testemunhas[3] = {
    img: "style/photo-woman2.png",
    opiniao: "Est quae nemo et provident corrupti et vitae quae est amet voluptatibus. Et voluptates consectetur et soluta aliquid non debitis fuga non exercitationem perspiciatis aut eligendi eius.",
    avaliacao: "4.7",
    nome: "Letícia Elisabeth"
}

botao1.addEventListener("click", function () {
    contador = mudaTestemunha( contador,"retroceder");
});


botao2.addEventListener("click", () => {
    contador = mudaTestemunha(contador,"avancar");
})

function mudaTestemunha(contador,acao = null) {
    let teste = "btn-" + contador;
    console.log(teste);
    document.getElementById("bt-" + contador).classList.remove('carrossel-ativo');


    if (acao === "avancar") {
        contador++;

    }
    else if(acao === "retroceder") {
        contador--;
    }


    if (contador < 0) {
        contador = 3;
    }
    else if (contador > 3) {
        contador = 0;
    }
    opiniao.innerHTML = testemunhas[contador].opiniao;
    avaliacao.innerHTML = testemunhas[contador].avaliacao;
    img.src = testemunhas[contador].img;
    nome.innerHTML = testemunhas[contador].nome;

    document.getElementById("bt-" + contador).classList.add('carrossel-ativo');
    return contador;

}

const botoes = document.querySelectorAll(".botao-carrosel");

botoes.forEach(botao => {
    botao.addEventListener("click", ()=> {
        document.querySelector(".carrossel-ativo").classList.remove("carrossel-ativo");
        mudaTestemunha(botao.value);
    })
})





// function mudaTestemunhaBotao(testemunhas){
//     testemunhas.forEach(testemunha => {
//         opiniao.innerHTML = testemunha[contador].opiniao;
//         avaliacao.innerHTML = testemunha[contador].avaliacao;
//         img.src = testemunha[contador].img;
//         nome.innerHTML = testemunha[contador].nome;

//     })
// }



