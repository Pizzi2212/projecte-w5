const lettersM = document.querySelectorAll('[stroke-linecap="butt"]')

const visibility = function () {
  const random = Math.floor(Math.random() * lettersM.length)
  const selectedM = lettersM[random]
  if (selectedM.classList.contains('hiddenM')) {
    selectedM.classList.remove('hiddenM')
  } else {
    selectedM.classList.add('hiddenM')
  }
}
setInterval(visibility, 40)

window.addEventListener('scroll', (e) => {
  const navbar = document.getElementById('headNav')
  const scrollP = 300
  if (scrollY > scrollP) {
    navbar.classList.add('modScroll')
  } else {
    navbar.classList.remove('modScroll')
  }

  const started = document.getElementById('started')
  if (scrollY > scrollP) {
    started.style.backgroundColor = 'green'
  } else {
    started.style.backgroundColor = 'black'
  }
})
