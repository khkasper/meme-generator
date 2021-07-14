const memeImgContainer = document.querySelector('#meme-image-container');
const textInput = document.querySelector('#text-input');
const imgInput = document.querySelector('#meme-insert');
const memeImg = document.querySelector('#meme-image');
const fireBttn = document.querySelector('#fire');
const waterBttn = document.querySelector('#water');
const earthBttn = document.querySelector('#earth');
const sgMemes = document.querySelector('#sug-memes');

textInput.addEventListener('input', () => {
  const memeTextInput = document.querySelector('#meme-text');
  memeTextInput.innerText = textInput.value;
});

// https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications#example.3a_using_object_urls_to_display_images

imgInput.addEventListener('change', () => {
  memeImg.src = URL.createObjectURL(imgInput.files[0]);
});

sgMemes.addEventListener('click', (event) => {
  memeImg.src = event.target.src;
});

fireBttn.addEventListener('click', () => {
  memeImgContainer.style.border = '3px dashed red';
});

waterBttn.addEventListener('click', () => {
  memeImgContainer.style.border = '5px double blue';
});

earthBttn.addEventListener('click', () => {
  memeImgContainer.style.border = '6px groove green';
});
