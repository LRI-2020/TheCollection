import {booksCollection} from "../booksCollection.js";
import  {FulfillCardTemplate} from "./htmlTemplates.js";

function GenerateAllCards() {
//get existing element in html -- container for all card section
    let cardsGrid = document.getElementById("c-section-divGrid__cards");
    let allCards = [];

//get all objects books store din the collection -- see booksCollection.js file
    for (let book of booksCollection) {

        //create a wrapper card for the book
        let currentCardWrapper = document.createElement('div');
        currentCardWrapper.setAttribute('id', `c-section-gridItem__Card${book.number}`);
        currentCardWrapper.classList.add("col-lg-3", "col-md-5", "col-sm-12", "col-xs-12","cardWrapper","m-2");   
        
        //Add the card to the wrapper;
        currentCardWrapper.innerHTML = createCard(book);

        allCards.push(currentCardWrapper);

    }

    //Add cards to grid
    for (let card of allCards) {
        cardsGrid.appendChild(card);
    }
}

function createCard(book) {
    
    return FulfillCardTemplate(book);
}



export {GenerateAllCards};