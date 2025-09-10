/*
Eventos em JavaScript

Eventos são ações ou ocorrências que acontecem na página WEB, como cliques de mouse, pressionamento de teclas, carregamento de página, entre outros. Em JavaScript, eventos permitem que você execute código em resposta a essas ações, tornando suas páginas web interativas.
*/



const meuBotao = document.querySelector('#meuBotao');
meuBotao.addEventListener('click', function () {
    alert('Você clicou no botão!');
});


const minhaDiv = document.querySelector('#minhaDiv');


minhaDiv.addEventListener('mouseover', function () {
    minhaDiv.style.backgroundColor = 'lightblue';
});


minhaDiv.addEventListener('mouseout', function () {
    minhaDiv.style.backgroundColor = 'salmon';
    minhaDiv.style.color = 'black';
});


const meuFormulario = document.querySelector('#meuFormulario');

meuFormulario.addEventListener('submit', function (event) {

    event.preventDefault();


    const nome = document.querySelector('#nome').value;

    alert(`Seu nome foi enviado! Nome: ${nome}`);
});


const botaoRosa = document.querySelector('#botaoRosa');
const botaoAzul = document.querySelector('#botaoAzul');


botaoRosa.addEventListener('click', function () {
    document.body.style.backgroundColor = 'pink';
    alert('A página agora está rosa!');
});


botaoAzul.addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightblue';
    alert('A página agora está azul!');
});


const teclaPressionada = document.querySelector('#teclaPressionada');

document.addEventListener('keydown', function (event) {
    teclaPressionada.textContent = `Você pressionou a tecla: ${event.key}`;
});
