import {DeleteCard} from "./cardsManager/deleteCard.js";
import {SortCards} from "./cardsManager/sortCards.js";
import {DisplayCards} from "./cardsManager/cardDisplayer.js";
import {NavigateToUrl} from "./Navigation/URLManager.js";
import {GenerateAllCards} from "./cardsManager/generateCards.js";

function SetSearchListener() {

    let searchButton = document.querySelector("button.searchBtn");
    let clearButton = document.querySelector("form.searchForm>button.clearBtn");

    searchButton.addEventListener('click', function (event) {

            event.preventDefault();

            let input = document.querySelector("input.searchInput").value;
            let params = new URLSearchParams();

            //Check input and add it into param
            if (input.trim() !== "") {
                params.append("year", input);
                NavigateToUrl(params);
            }
        }
    );

    clearButton.addEventListener('click', function () {
        GenerateAllCards();
    })
}

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
            DisplayCards(sortedCards);

        })
    }
}

export {SetDeleteListeners, SetSortingListeners, SetSearchListener}