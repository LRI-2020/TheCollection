import {GenerateAllCards} from "./assets/js/generateCards.js";
import {DeleteCard} from "./assets/js/deleteCard.js";

//on page load, cards are generated
window.onload = function () {
    GenerateAllCards();


    let btns = document.getElementsByClassName('deleteBtn');

    for (let btn of btns) {
        btn.addEventListener('click', function(){
            DeleteCard(btn.closest('.cardWrapper'));
        })
    }

}





