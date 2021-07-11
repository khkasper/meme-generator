const textInput = document.querySelector('#text-input');
const imgInput = document.querySelector('#meme-insert');
const memeImageContainer = document.querySelector('#meme-image-container');
const fireBttn = document.querySelector('#fire');
const waterBttn = document.querySelector('#water');
const earthBttn = document.querySelector('#earth');

// Adiciona texto do "text-input" dentro do "meme-text"

function memeTxt() {
  textInput.addEventListener('input', () => {
    const memeTextInput = document.querySelector('#meme-text');
    memeTextInput.innerText = textInput.value;
  });
}
memeTxt();

// https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications#example.3a_using_object_urls_to_display_images
// Adiciona uma imagem selecionada dentro do "meme-image". Usei o elemento 'img' para

function memeImg() {
  imgInput.addEventListener('change', () => {
    const memeImgInput = document.querySelector('#meme-image');
    memeImgInput.src = URL.createObjectURL(imgInput.files[0]);
  });
}
memeImg();

function fire() {
  fireBttn.addEventListener('click', () => {
    memeImageContainer.style.border = '3px dashed red';
  });
}
fire();

function water() {
  waterBttn.addEventListener('click', () => {
    memeImageContainer.style.border = '5px double blue';
  });
}
water();

function earth() {
  earthBttn.addEventListener('click', () => {
    memeImageContainer.style.border = '6px groove green';
  });
}
earth();
