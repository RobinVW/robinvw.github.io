// modal image code
let pictureNumber;

let onderhoudContainer = document.querySelector(`.onderhoud-s`);
console.log(onderhoudContainer);
let modalImageContainer = document.querySelector(`.modal-image-container`);

let onderhoudPictures = onderhoudContainer.children;

const mouseClickModalPicture = (e) =>{
  clearModalPictureContainer();
  let clickTarget = e.currentTarget.firstChild.getAttribute("alt");
  let nArray = clickTarget.split(" ");
  pictureNumber = nArray[2];

  addModalPicture();
}

const clearModalPictureContainer = () =>{
      modalImageContainer.removeChild(modalImageContainer.lastChild);
}

const addModalPicture = () => {
      const $image = document.createElement(`img`);
      $image.src=`assets/onderhoud/afbeelding`+pictureNumber+`.JPG`;
      $image.classList.add(`onderhoud-image`);
      modalImageContainer.appendChild($image);
}

for(picture of onderhoudPictures){
  picture.addEventListener('click',mouseClickModalPicture);
}


let footer = document.querySelector(`footer`);
console.log(footer);
let date = new Date();
let year = date.getFullYear();
let $text = document.createElement(`p`);
$text.innerHTML = `COPYRIGHT `+year+`, TUINEN HEYSE. ALL RIGHTS RESERVED.`;
footer.appendChild($text);
