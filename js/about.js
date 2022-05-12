// Função ver mais e ver menos -Sobre nós / trabalhando com o style
var stitches = document.getElementById('stitches')
var More = document.getElementById('More')
var see = document.getElementById('see')

function moreRedC() {
  if (stitches.style.opacity === '0') {
    stitches.style.opacity = '1'
    More.style.opacity = '0'
    see.innerHTML = ''
  } else {
    stitches.style.opacity = '0'
    More.style.opacity = '1'
    stitches2.style.opacity = '1'
    More2.style.opacity = '0'
    inserts.style.height = ''
    details.classList.remove('out')
    see.innerHTML = ''
  }
}

// Para a div ir para baixo -Sobre nós / trabalhando com o style
var details = document.getElementById('details')
var informationAbout = document.querySelector('.informationAbout')
var inserts = document.getElementById('inserts')
function moreRedA() {
  if (
    informationAbout.className == 'informationAbout' &&
    More.style.opacity === '1'
  ) {
    details.style.marginTop = 2.9375 + 'rem'
    inserts.style.height = 1529 + 'px'
    informationAbout.classList.add('out')
    see.innerHTML = ''
  } else {
    details.style.marginTop = ''
    inserts.style.height = ''
    informationAbout.classList.remove('out')
    see.innerHTML = ''
  }
}

// Função ver mais e ver menos -Detalhes / trabalhando com o style
var stitches2 = document.getElementById('stitches2')
var More2 = document.getElementById('More2')
var see2 = document.getElementById('see2')

function moreRedD() {
  if (stitches2.style.opacity === '0') {
    stitches2.style.opacity = '1'
    More2.style.opacity = '0'
    see2.innerHTML = ''
  } else {
    details.style.marginTop = ''
    // inserts.style.height = ''
    stitches2.style.opacity = '0'
    stitches.style.opacity = '1'
    More.style.opacity = '0'
    informationAbout.classList.remove('out')
    More2.style.opacity = '1'
    see2.innerHTML = ''
  }
}

// Para a div ir para baixo -Detalhes / trabalhando com o style
function moreRedE() {
  if (details.className == 'details' && More2.style.opacity === '1') {
    inserts.style.height = 1529 + 'px'
    details.classList.add('out')
  } else {
    inserts.style.height = ''
    details.classList.remove('out')
  }
}
