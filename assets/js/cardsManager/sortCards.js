function SortCards(cards, sortOption) {

    let sortedCards = [];
    
    switch (sortOption) {
        case"Oldest":
            sortedCards = SortElements(Array.from(cards), "dateText", "ascending");
            break;
        case"Newest":
            sortedCards =  SortElements(Array.from(cards), "dateText", "descending");
            break;
        case"Title":
            sortedCards =  SortElements(Array.from(cards), "card-title", "ascending");
            break;
        default:
            throw Error("sorting option is not known");
    }
    
    return sortedCards;   

}

function SortElements(elements, property, order) {
    
    let selector=`.card>.card-body>.${property}`;

    switch (order) {
        case"ascending":
            elements.sort(function (a, b) {
                if (a.querySelector(selector).innerText > b.querySelector(selector).innerText) {
                    return 1
                }
                return -1
            });
            break;
        case"descending":
            elements.sort(function (a, b) {
                if (a.querySelector(selector).innerText > b.querySelector(selector).innerText) {
                    return -1
                }
                return 1
            });
            break;
    }

    return elements;

}

export {SortCards}