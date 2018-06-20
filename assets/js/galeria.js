let galeria = document.getElementsByClassName('img-galeria')
let imgGrande = document.getElementById('img01')
let modal = document.getElementById('myModal')
let close = document.getElementById('close')


for (miniatura of galeria) {
  miniatura.addEventListener('click', function(event){
    let caminho = event.target.getAttribute('src')
    imgGrande.setAttribute('src', caminho)
    modal.style.display = "block"

  })
}

close.onclick = function () {
  modal.style.display = 'none'
}