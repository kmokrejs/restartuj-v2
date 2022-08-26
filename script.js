let toggleBut = document.getElementsByClassName("toggle-but")[0]
let links= document.getElementsByClassName("menu")[0]

toggleBut.addEventListener("click", () => {
    links.classList.toggle("active")
})