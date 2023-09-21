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

function createCard(number) //create a card, set the attributes and classes, add it to the wrapper 
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

    //create elements of the card - Img and Body
    let cardElements = [
        createCardImg(cardNumber, "bookCover,card-img-top", book),
        createCardBody(cardNumber, book)
    ];

    //add each element to the card
    for (let el of cardElements) {
        card.querySelector('.card').appendChild(el);
    }
}


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
    cardBody.classList.add("card-body", "row");

    addCardBodyRows(cardBody);
    addCardElements(cardBody, cardNumber, book); // add html content in each body rows

    return cardBody;
}

// add rows to ensure all content of card are align with one another --> card body is itself a grid)
function addCardBodyRows(cardBody) {
    let cardBodyRows = createCardBodyRows();

    for (let row of cardBodyRows) {
        cardBody.appendChild(row);
    }
}


// create all rows needed to display book properties --- allow to have all content align with content of another card
function createCardBodyRows() {
    
    let rowsToCreate=[
        "row,h20,titleRow,mb-2",
        "row,h20,serieAuthorRow,my-2",
        "row,h30,summaryRow,my-2",
        "row,linkRow,mb-2"
    ];
    let cardBodyRows = [];
    
    for(let r of rowsToCreate){
        cardBodyRows.push(createDivWithClasses(r));   
    }

    return cardBodyRows;
}

//create a div with row class
function createDivWithClasses(classNames) {
    let divElement = document.createElement('div');
    for(let className of classNames.split(',')){
        divElement.classList.add(className)
    }
    return divElement;
}

//add the elements containing the book properties to the cardBody
function addCardElements(cardBody, cardNumber, book) {

    let cardBodyElements = createCardElement(cardNumber, book);

    // add the element in the correct order --> select them in the array through their class value
    cardBody.querySelector(".titleRow").appendChild(cardBodyElements.find(i => i.classList.contains("titleText")));
    cardBody.querySelector(".serieAuthorRow").appendChild(cardBodyElements.find(i => i.classList.contains("serieNumberText")));
    cardBody.querySelector(".serieAuthorRow").appendChild(cardBodyElements.find(i => i.classList.contains("authorText")));
    cardBody.querySelector(".summaryRow").appendChild(cardBodyElements.find(i => i.classList.contains("summaryText")));
    cardBody.querySelector(".linkRow").appendChild(cardBodyElements.find(i => i.classList.contains("linkDivWrapper")));

}

// create and return each element that contain the book properties

function createCardElement(cardNumber, book) {

    return [
        createParagraph(`p-titleCard${cardNumber}`, 'titleText,col-12', `${book.title}`),
        createParagraph(`p-serieNumberCard${cardNumber}`, 'serieNumberText,col-12,mb-0', `${book.serie} - Book ${book.number}`),
        createParagraph(`p-authorCard${cardNumber}`, 'authorText,col-12', book.author),
        createParagraph(`p-summaryCard${cardNumber}`, 'summaryText,col-12', book.summary),
        addLink(`a-readMoreCard${cardNumber}`, `readMoreLink,col-12`, book.readMoreLink, "Read More")
    ];
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

// create the link element in a  wrapper and set attributes
function addLink(id, classNames, href, innerText) {
    let divWrapper = document.createElement('div');
    divWrapper.classList.add('center', 'linkDivWrapper', 'col-12','align-text-bottom');
    let a = document.createElement('a');
    setLinkAttributes(a, id, classNames, href, innerText);
    divWrapper.appendChild(a);
    return divWrapper;
}

// set attributes to a element

function setLinkAttributes(a, id, classNames, href, innerText) { // ste attributes needed to the link element

    a.setAttribute('id', id);
    a.setAttribute('href', href);
    a.setAttribute('target','_blank');
    for (let className of classNames.split(',')) {
        a.classList.add(className);
    }
    a.innerText = innerText;
}