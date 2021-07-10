const textInput = document.querySelector('#text-input');
const imgInput = document.querySelector('#meme-insert');

function memeTxt() {
  textInput.addEventListener('input', () => {
    const memeTextInput = document.querySelector('#meme-text');
    memeTextInput.innerText = textInput.value;
  });
}
memeTxt();

// https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications#example.3a_using_object_urls_to_display_images

function memeImg() {
  imgInput.addEventListener('change', () => {
    const memeImgInput = document.querySelector('#meme-image');
    memeImgInput.src = URL.createObjectURL(imgInput.files[0]);
  });
}
memeImg();

