let home = 0
let away = 0

let score_h = document.getElementById("home-el")
let score_a = document.getElementById("away-el")

function addOne() {
    home += 1
    score_h.textContent = home
}

function addTwo() {
    home += 2
    score_h.textContent = home
}

function addThree() {
    home += 3
    score_h.textContent = home
}

function addOneGuest() {
    away += 1
    score_a.textContent = away
}

function addTwoGuest() {
    away += 2
    score_a.textContent = away
}

function addThreeGuest() {
    away += 3
    score_a.textContent = away
}

function reset() {
    home = 0
    away = 0
    score_h.textContent = home
    score_a.textContent = away
}