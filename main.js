import {booksCollection} from "./assets/js/booksCollection.js";

let cardsGrid = document.getElementById("c-section-divGrid__cards");
let cards = [];

for (let book of booksCollection) {

    let number = booksCollection.indexOf(book) + 1;
    let currentCard = createCard(number);
    fulfillCard(currentCard, number, book);
    cards.push(currentCard);

}

for (let card of cards) {
    cardsGrid.appendChild(card);
}

function createCard(number) {

    //grid item
    let currentCardItem = document.createElement('div');
    currentCardItem.setAttribute('id', `c-section-gridItem__Card${number}`);
    currentCardItem.classList.add("col-lg-3","col-md-5", "col-sm-12", "col-xs-12", "m-2");

    //card
    let currentCard = document.createElement('div');
    currentCard.classList.add("card","p-3");

    currentCardItem.appendChild(currentCard);
    return currentCardItem;
}

function createCardImg(card, cardNumber, classNames, book) {

    let img = document.createElement('img');
    setImgAttributes(img, `card${cardNumber}-img__cover`, classNames, book.cover, `Book${book.number} Cover`);
    return img;
}

function setImgAttributes(img, id, classNames, src, alt) {
    img.setAttribute('id', id);

    for (let className of classNames.split(',')) {
        img.classList.add(className);

    }
    img.setAttribute('src', src);
    img.setAttribute('alt', alt);
}

function createParagraph(card, cardNumber, book, id, classNames, innerText) {
    let p = document.createElement('p');
    setParaAttributes(p, id, classNames, innerText);
    return p;
}

function setParaAttributes(p, id, classNames, innerText) {
    p.setAttribute('id', id);
    for (let className of classNames.split(',')) {
        p.classList.add(className);
    }
    p.innerText = innerText;
}

function addLink(card, cardNumber, book, id, classNames, href, innerText) {
    let divWrapper = document.createElement('div');
    divWrapper.classList.add('center');
    let a = document.createElement('a');
    setLinkAttributes(a, id, classNames, href, innerText);
    divWrapper.appendChild(a);
    return divWrapper;
}

function setLinkAttributes(a, id, classNames, href, innerText) {

    a.setAttribute('id', id);
    a.setAttribute('href', href);
    for (let className of classNames.split(',')) {
        a.classList.add(className);
    }
    a.innerText = innerText;
}

function createCardBody(card, cardNumber, book) {

    let cardBody = document.createElement('div');
    cardBody.classList.add("card-body");

    let bodyElements = [createParagraph(card, cardNumber, book, `p-titleCard${cardNumber}`, 'titleText', `${book.title}`),
        createParagraph(card, cardNumber, book, `p-serieNumberCard${cardNumber}`, 'serieNumberText', `${book.serie} - Book ${book.number}`),
        createParagraph(card, cardNumber, book, `p-authorCard${cardNumber}`, 'authorText', book.author),
        createParagraph(card, cardNumber, book, `p-summaryCard${cardNumber}`, 'summaryText', book.summary),
        addLink(card, cardNumber, book, `a-readMoreCard${cardNumber}`, `readMoreLink`, book.readMoreLink, "Read More")
    ];

    for (let el of bodyElements) {
        cardBody.appendChild(el);
    }

    return cardBody;
}

function fulfillCard(card, cardNumber, book) {

    let cardElements = [
        createCardImg(card, cardNumber, "bookCover,card-img-top", book),
        createCardBody(card, cardNumber, book)
    ];

    for (let el of cardElements) {
        card.querySelector('.card').appendChild(el);
    }
}

