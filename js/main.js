// // carousel
// // método 2
// let slideIndex = 1 /*para o usuario fazer interação manual*/
// var slideIndex2 = 0 /*para os slides passarem de forma automatica*/
// showSlidesAutomatic()

// // função para controlar o proximo e o anterior
// function plusSlides(n) {
//   showSlides((slideIndex += n))
// }

// // para quando der o click ele vá para o slide que quero
// function currentSlide(n) {
//   showSlides((slideIndex = n))
// }

// function showSlides(n) {
//   let i
//   let slides = document.getElementsByClassName('mySlides')
//   let dots = document.getElementsByClassName('dot')
//   if (n > slides.length) {
//     slideIndex = 1 //para não ultrapaçar a quantidade de slides e dar bug
//   }
//   if (n < 1) {
//     slideIndex = slides.length
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = 'none'
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(' active', '') // replace - para pegar o valor atual do dot e substituir pelo valor atual - vai add o active na class - "dot active"
//   }
//   slides[slideIndex - 1].style.display = 'block'
//   dots[slideIndex - 1].className += ' active'
// }

// // Para passar slaids de forma automatica
// function showSlidesAutomatic() {
//   let i
//   let slides = document.getElementsByClassName('mySlides')
//   let dots = document.getElementsByClassName('dot')

//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = 'none'
//   }
//   slideIndex2++
//   if (slideIndex2 > slides.length) {
//     slideIndex2 = 1
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(' active', '') // replace - para pegar o valor atual do dot e substituir pelo valor atual - vai add o active na class - "dot active"
//   }
//   slides[slideIndex2 - 1].style.display = 'block'
//   dots[slideIndex2 - 1].className += ' active'
//   setTimeout(showSlidesAutomatic, 4000)
// }

// /* carousel slider swiper */
// const swiper = new Swiper('.swiper-container', {
//   slidesPerView: 1,
//   pagination: {
//     el: '.swiper-pagination'
//   },
//   mousewheel: true,
//   keyboard: true,
//   breakpoints: {
//     1000: {
//       /*true sig. verdadeiro*/
//       /*menor ou maior quero que seja 2*/
//       slidesPerView: 1,
//       /* slidesPerView: 2, aqui é a quantidade de slides que vão aparecer*/
//       setWrapperSize: true /*isso vai fazer que os dois apareçam por seção*/
//     }
//   }
// })

// /* ScrollReveal: Mostrar elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 600,
  reset: true
})
// /*é a sequencia para aparecer na pagina*/
scrollReveal.reveal(
  `#home .swiper-container, #home .marckDescrip,
#product .boxImg, #product .description1,
#product .specify1, #product .description2,
#product .specify2, #product .description3,
#product .specify3, #product .description4,
#product .specify4, #product .description5,
#product .specify5, #product .description6
 `,
  { interval: 100 }
)

/* Botão voltar para o topo */
/*para quando eu for rolar o botão aparecer em determinado ponto da tela*/
const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 5) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/*When Scroll */
window.addEventListener('scroll', function () {
  backToTop()
})
