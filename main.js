let Header = document.querySelector('header')

window.addEventListener('scroll', function () {
    Header.classList.toggle('back', this.window.screenY >= 0);
});


let progress = document.querySelector('header p')
let links1 = document.querySelector('header ul')

let close1 = document.querySelector('#close')


progress.onclick = function () {
  links1.classList.add("open")
};
close1.onclick = function () {
  this.parentElement.classList.remove('open')
};

let switcherLis = document.querySelectorAll(".manuFilter li");
let imgs = Array.from(document.querySelectorAll(".grid-item"));
switcherLis.forEach((li) => {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", manageImgs);
});

// Remove Active Class From All Lis And Add To Current
function removeActive() {
  switcherLis.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}

// Manage Imgs
function manageImgs() {
  imgs.forEach((img) => {
    img.style.display = "none";
  });
  document.querySelectorAll(this.dataset.cat).forEach((el) => {
    el.style.display = "block";
  });
}


let nums = document.querySelectorAll('.number')
let conter = document.querySelector('.conter')
let noStart=false


window.onscroll = function () {
  if (window.scrollY >= conter.offsetTop) {
    if (!noStart) {
      nums.forEach((num) => start(num));
    }
    noStart = true;
  }
};

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


});

function start(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count)
    }
  }, 2000 / goal);
}







// // 
// let scrol = ScrollReveal({
//   distance: '45px',
//   duration: 2700,
//   reset:true
// })

// scrol.reveal('.home-text', {delay:350,origin:'left'})
// scrol.reveal('.home img', {delay:350,origin:'right'})
// scrol.reveal('.social-media', { delay: 350, origin: 'left' })

// // About

// scrol.reveal('.About, .servise ,.project,.gallery ,.certificates ,.blog ,.contact', {delay:200,origin:'bottom'})




