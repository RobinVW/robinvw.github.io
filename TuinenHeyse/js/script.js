let pictureNumber;
let amount;

let container = document.querySelector('.project-images');
let swiperArray = document.querySelectorAll('.swiper-wrapper');

console.log(container);

let pictures = container.children;
console.log(pictures);

let a = pictures[0];
console.log(a);
//console.log(a.getAttribute("class"));

const mouseClickPicture = (e) =>{

  clearCarouselContainer();

  let clickTarget = e.currentTarget.getAttribute("class");
  let nArray = clickTarget.split(" ");
  pictureNumber = nArray[0];
  amount = nArray[1];

  console.log(`number:`+ pictureNumber +` amount:`+ amount);

  addCarouselPictures();
  carouselFunctions();
}


const clearCarouselContainer = () =>{
  console.log(swiperArray);
  for(let swiper of swiperArray){
    while(swiper.hasChildNodes()){
      swiper.removeChild(swiper.lastChild);
    }
  }
}


/* <div class="swiper-slide" style="background-image:url(http://lorempixel.com/1200/1200/nature/1)"></div> */
const addCarouselPictures = () => {

  //let iUrl = `url(assets/realisaties/project`+pictureNumber+`/afbeelding`+i+`.jpg)`

  for(let swiper of swiperArray){
    for(let i = 1; i <= amount; i++){
      const $slide = document.createElement(`div`);
      $slide.classList.add(`swiper-slide`);
      // $slide.style.backgroundImage ="url(http://lorempixel.com/1200/1200/nature/1)";
      $slide.style.backgroundImage = `url(assets/realisaties/project`+pictureNumber+`/afbeelding`+i+`.JPG)`;
      console.log($slide);
      swiper.appendChild($slide);
    }
  }
}

for(let picture of pictures){
  picture.addEventListener('click',mouseClickPicture);
}





const carouselFunctions = () =>{

  var galleryTop = new Swiper('.gallery-top', {
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          spaceBetween: 10,
      });
  var galleryThumbs = new Swiper('.gallery-thumbs', {
          spaceBetween: 10,
          centeredSlides: true,
          slidesPerView: 'auto',
          touchRatio: 0.2,
          slideToClickedSlide: true
      });
  galleryTop.params.control = galleryThumbs;
  galleryThumbs.params.control = galleryTop;

}

let footer = document.querySelector(`footer`);
console.log(footer);
let date = new Date();
let year = date.getFullYear();
let $text = document.createElement(`p`);
$text.innerHTML = `COPYRIGHT `+year+`, TUINEN HEYSE. ALL RIGHTS RESERVED.`;
footer.appendChild($text);

let $navbar = document.querySelector(`nav`);

document.addEventListener("scroll", function() {
  if (window.pageYOffset > $navbar.offsetTop)
  document.querySelector(`header`).style.display = "none";
});

const clickArrow = () =>{
  document.querySelector(`header`).style.display = "none";
}

let $pijl = document.querySelector(`.down`);
$pijl.addEventListener(`click`,clickArrow);
