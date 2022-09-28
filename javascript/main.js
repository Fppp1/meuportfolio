const hamburguer = document.querySelector(".hamburguer")
const navmenubar = document.querySelector(".nav-menu-bar")

    hamburguer.addEventListener("click", () =>{
        hamburguer.classList.toggle('active')
        navmenubar.classList.toggle('active')

    })

