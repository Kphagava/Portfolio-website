const arrowBtn = document.getElementsByClassName('scrollArrow')[0];

const typedTextSpan = document.querySelector(".animated-text");
const cursonSpan = document.querySelector(".cursor");

const textArray = ["Hello!", "გამარჯობა!", "Bonjour!", "Hola!", "Guten Tag!"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
const isTyping = false;
let textArrayIndex = 0;
let charIndex = 0;
let slidePerView = 3;

var mySwiper = new Swiper('.swiper-blog', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: slidePerView,
  spaceBetween: 30,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-blog',
    prevEl: '.swiper-button-prev-blog',
  },
})

var mySwiperCert = new Swiper('.swiper-cert', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: slidePerView,
    spaceBetween: 30,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next-cert',
      prevEl: '.swiper-button-prev-cert',
    },
  })

arrowBtn.addEventListener('click', () => {
    window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
    });   
})

function type() {
    if(charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex ++;
        setTimeout(type, typingDelay);
    }
    else {
        cursonSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}
function erase(){
    if(charIndex > 0 ) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
        charIndex --;
        setTimeout(erase, erasingDelay);
    }
    else {
        textArrayIndex ++;
        if(textArrayIndex>=textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100 );
    }
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(type, typingDelay + 250 );
});
