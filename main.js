import{collection} from "./assets/js/collection.js";

let cardsGrid = document.getElementById("c-section-divGrid__cards");
let cards = createCards(collection);
function createCards(collection) {
    let cards=[];

    for (let item of collection){
        let currentCard = document.createElement('div');
        currentCard.setAttribute('id',`c-section-div__Card${collection.indexOf(item)+1}`);
        currentCard.classList.add("col-lg-4 col-sm-6 col-xs-12");
        cards.push(currentCard);
    }
    
    return cards;
}

function fulfillCards(card){
    
}

