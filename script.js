const textInput = document.querySelector('#text-input');
const imgInput = document.querySelector('#meme-insert');
const memeImg = document.querySelector('#meme-image');
const memeImgContainer = document.querySelector('#meme-image-container');
const fireBttn = document.querySelector('#fire');
const waterBttn = document.querySelector('#water');
const earthBttn = document.querySelector('#earth');
const meme1 = document.querySelector('#meme-1');
const meme2 = document.querySelector('#meme-2');
const meme3 = document.querySelector('#meme-3');
const meme4 = document.querySelector('#meme-4');

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

function memeImgAdd() {
  imgInput.addEventListener('change', () => {
    memeImg.src = URL.createObjectURL(imgInput.files[0]);
  });
}
memeImgAdd();

function fire() {
  fireBttn.addEventListener('click', () => {
    memeImgContainer.style.border = '3px dashed red';
  });
}
fire();

function water() {
  waterBttn.addEventListener('click', () => {
    memeImgContainer.style.border = '5px double blue';
  });
}
water();

function earth() {
  earthBttn.addEventListener('click', () => {
    memeImgContainer.style.border = '6px groove green';
  });
}
earth();

function meme1Add() {
  meme1.addEventListener('click', () => {
    memeImg.src = 'imgs/meme1.png';
  });
}
meme1Add();

function meme2Add() {
  meme2.addEventListener('click', () => {
    memeImg.src = 'imgs/meme2.png';
  });
}
meme2Add();

function meme3Add() {
  meme3.addEventListener('click', () => {
    memeImg.src = 'imgs/meme3.png';
  });
}
meme3Add();

function meme4Add() {
  meme4.addEventListener('click', () => {
    memeImg.src = 'imgs/meme4.png';
  });
}
meme4Add();
