import {booksCollection} from "./assets/js/booksCollection.js";

//get existing elment in html -- container for all card section
let cardsGrid = document.getElementById("c-section-divGrid__cards");
let cards = [];

//get all objects books store din the collection -- see booksCollection.js file
for (let book of booksCollection) {

    let number = booksCollection.indexOf(book) + 1;
    //create a card for the book
    let currentCard = createCard(number);

    //fulfill the card
    fulfillCard(currentCard, number, book);
    cards.push(currentCard);

}

for (let card of cards) {
    cardsGrid.appendChild(card);
}

////////////////////////////////////////////////////////////////////////

//functions

//create a card, set the attributes and classes, add it to the item grid
function createCard(number)  
{

    //card wrapper - item of the grid
    let currentCardWrapper = document.createElement('div');
    currentCardWrapper.setAttribute('id', `c-section-gridItem__Card${number}`);
    currentCardWrapper.classList.add("col-lg-3", "col-md-5", "col-sm-12", "col-xs-12", "m-2");

    //card
    let currentCard = document.createElement('div');
    currentCard.classList.add("card");

    currentCardWrapper.appendChild(currentCard);
    return currentCardWrapper;
}

//fulfill the empty card
function fulfillCard(card, cardNumber, book) {

    //create elements of the card - Img - Body - footer
    let cardElements = [
        createCardImg(cardNumber, "bookCover,card-img-top", book),
        createCardBody(cardNumber, book),
        createCardFooter(cardNumber, book)
    ];

    //add each element to the card
    for (let el of cardElements) {
        card.querySelector('.card').appendChild(el);
    }
}

// create the img of the card
function createCardImg(cardNumber, classNames, book) {

    let img = document.createElement('img');
    setImgAttributes(img, `card${cardNumber}-img__cover`, classNames, book.cover, `Book${book.number} Cover`);
    return img;
}

//Set the attributes and classes for each img of each card
function setImgAttributes(img, id, classNames, src, alt) {
    img.setAttribute('id', id);

    for (let className of classNames.split(',')) {
        img.classList.add(className);

    }
    img.setAttribute('src', src);
    img.setAttribute('alt', alt);
}

//create and fulfill the body card
function createCardBody(cardNumber, book) {

    let cardBody = document.createElement('div');
    cardBody.classList.add("card-body");

    addCardBodyElements(cardBody, cardNumber, book); 

    return cardBody;
}

//add the elements containing the book properties to the cardBody
function addCardBodyElements(cardBody, cardNumber, book) {

    let cardBodyElements = createCardBodyElements(cardNumber, book);

    // add the element in the correct order --> select them in the array through their class value
    cardBody.appendChild(cardBodyElements.find(i => i.classList.contains("card-title")));
    cardBody.appendChild(cardBodyElements.find(i => i.classList.contains("serieNumberText")));
    cardBody.appendChild(cardBodyElements.find(i => i.classList.contains("authorText")));
    cardBody.appendChild(cardBodyElements.find(i => i.classList.contains("summaryText")));
}

//create all the elements that are in the card body
function createCardBodyElements(cardNumber, book) {

    return [
        createTitle('3', 'card-title', `${book.title}`),
        createParagraph(`p-serieNumberCard${cardNumber}`, 'serieNumberText,card-text,mb-0', `${book.serie} - Book ${book.number}`),
        createParagraph(`p-authorCard${cardNumber}`, 'authorText,card-text', book.author),
        createParagraph(`p-summaryCard${cardNumber}`, 'summaryText,card-text', book.summary),
    ];
}


//create a title html element and set class names
function createTitle(level, classNames, innerText) {

    let title = document.createElement(`h${level}`);
    for (let className of classNames.split(',')) {
        title.classList.add(className)
    }
    title.innerText = innerText;
    return title;
}

// create a paragraph with the desired attributes
function createParagraph(id, classNames, innerText) {
    let p = document.createElement('p');
    setParaAttributes(p, id, classNames, innerText);
    return p;
}

// set attributes to p element
function setParaAttributes(p, id, classNames, innerText) {
    p.setAttribute('id', id);
    for (let className of classNames.split(',')) {
        p.classList.add(className);
    }
    p.innerText = innerText;
}


//create the card footer
function createCardFooter(cardNumber, book) {
    return createLink(`a-readMoreCard${cardNumber}`, `readMoreLink,card-footer,text-center`, book.readMoreLink, "Read More")
}


// create a link element with attributes and classes
function createLink(id, classNames, href, innerText) {
   
    let a = document.createElement('a');
    setLinkAttributes(a, id, classNames, href, innerText);
    return a;
}

// set attributes to a link element
function setLinkAttributes(a, id, classNames, href, innerText) { // ste attributes needed to the link element

    a.setAttribute('id', id);
    a.setAttribute('href', href);
    a.setAttribute('target', '_blank');
    for (let className of classNames.split(',')) {
        a.classList.add(className);
    }
    a.innerText = innerText;
}