import {DeleteCard} from "./cardsManager/deleteCard.js";
import {SortCards} from "./cardsManager/sortCards.js";

function SetDeleteListeners() {
    let deleteBtns = document.getElementsByClassName('deleteBtn');

    for (let btn of deleteBtns) {
        btn.addEventListener('click', function () {
            DeleteCard(btn.closest('.cardWrapper'));
        })
    }
}

function EmptyHtmlElm(ElementSelector) {
    let Element = document.querySelector(ElementSelector);
    Element.innerHTML = "";
}

function SetSortingListeners() {
    let sortingBtns = document.getElementsByClassName("sortingBtn");
    let items = document.getElementsByClassName("cardWrapper");
    for (let sortingBtn of sortingBtns) {
        sortingBtn.addEventListener('click', function () {
            let sortedCards = SortCards(items, sortingBtn.name);
            let CardWrapper = document.querySelector("#c-section-divGrid__cards");
            CardWrapper.innerHTML="";
            for (let card of sortedCards) {
               CardWrapper.appendChild(card);
            }
        })
    }
}

export {SetDeleteListeners, SetSortingListeners}