import {DeleteCard} from "./cardsManager/deleteCard.js";
import {SortCards, DisplaySortedCards} from "./cardsManager/sortCards.js";

function SetDeleteListeners() {
    let deleteBtns = document.getElementsByClassName('deleteBtn');

    for (let btn of deleteBtns) {
        btn.addEventListener('click', function () {
            DeleteCard(btn.closest('.cardWrapper'));
        })
    }
}



function SetSortingListeners() {
    let sortingBtns = document.getElementsByClassName("sortingBtn");
    
    let items = document.getElementsByClassName("cardWrapper");
    
    for (let sortingBtn of sortingBtns) {
        sortingBtn.addEventListener('click', function () {
           
            //Sort the cards
            let sortedCards = SortCards(items, sortingBtn.name);
            
            //display the sorted cards
            DisplaySortedCards(sortedCards,document.querySelector("#c-section-divGrid__cards"));
            
        })
    }
}

export {SetDeleteListeners, SetSortingListeners}