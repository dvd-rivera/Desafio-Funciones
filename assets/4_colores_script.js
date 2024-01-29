const colors = document.querySelectorAll(".div-container div")

colors.forEach((div) => {
    div.addEventListener("click", (event) => {
        event.target.style.backgroundColor = "black"
    })
})