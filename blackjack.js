let firstCard = 10
let secondCard = 7
let sum = firstCard+secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardEl=document.getElementById("card-el")
function start() {
    if (sum <= 20) {
        message="Do you want to draw a new card? "
       
    } else if (sum === 21) {
        message="Wohoo!! You've got a blackjack"
        hasBlackJack=true
    } else {
        message="You are out of the game!"
        isAlive=false
    }
    console.log(message)
    messageEl.textContent=message
    sumEl.innerText
}


