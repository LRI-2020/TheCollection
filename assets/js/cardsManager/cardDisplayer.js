function DisplayCards(cards) {

    let parent = document.querySelector("#c-section-divGrid__cards");
        parent.innerHTML="";

    for (let card of cards) {
        parent.appendChild(card);
    }
}

export{DisplayCards}