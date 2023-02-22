const food = ["Costa Vida", "Five Guys","Cafe Zupas","Seven Brothers Burgers"]

const random = food[(Math.random() * food.length) | 0]

function randomFood () {
    alert(random)
}

var randomBtn = document.querySelector("#randomBtn")

randomBtn.addEventListener("click", randomFood)
