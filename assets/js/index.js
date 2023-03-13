/* 
Antes de começar a digitar o código (JavaScript), escrever os objetivos.
Pensar na visão do usuário

OBJETIVO - quando clicarmos no botão, temos que mostrar a imagem de fundo correspondente.
Algoritmo:
- passo 1: Dar um jeito de pegar o elemento HTML dos botões
- passo 2: Indentificar o clique do usuário no botão
- passo 3: desmarcar o botão selecionado anterior
- passo 4: marcar o botão clicado como se estivesse selecionado
- passo 5: esconder a imagem anterior
- passo 6: fazer aparecer a imagem correspondente ao botão clicado

*/

const buttonsCarousel = document.querySelectorAll('.button'); /* passo1 */
const imagesCarousel = document.querySelectorAll('.image');

function desactiveSelectedImage() {
  const activeImage = document.querySelector('.active');
  activeImage.classList.remove('active');
}
function desactiveSelectedButton() {
  const selectedButton = document.querySelector('.selected');
  selectedButton.classList.remove('selected');
}
function SelectButton(button) {
  button.classList.add('selected');
}
function showSelectedImage(i) {
  imagesCarousel[i].classList.add('active');
}

buttonsCarousel.forEach((button, i) => {
  button.addEventListener('click', () => {
    
    desactiveSelectedButton();

    SelectButton(button);
    
    desactiveSelectedImage();

    showSelectedImage(i);
  })
})






