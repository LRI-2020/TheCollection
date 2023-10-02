import {booksCollection} from "../booksCollection.js";
import {DisplayCards} from "./cardDisplayer.js";

// import * as DOMPurify from '../../dompurify/';

function FilterCardsByDate(year) {

    //TODO Validate input here

    let allCurrentCards = Array.from(document.querySelectorAll(".cardWrapper"));

    let filteredBooks = booksCollection.filter(b => b.date.getFullYear() === Number(year));
    let filteredCards = [];

    for (let b of filteredBooks) {
        let card = allCurrentCards.find(i => Number(i.getAttribute("book_id")) === b.id);
        if (card !== undefined) {
            filteredCards.push(card);
        }
    }

    return filteredCards;

}

function dangerToSafe(character) {
    
    switch(character){
        case "<":
            character = "&lt;"
            break;
        case">":
            character = "&gt;"
            break;
        case'"':
            character = "&quot;"
            break;
        case"'":
            character = "&apos;"
            break;
        case'&':
            character = "&amp;"
            break;
    }
    
    return character;
}

function encodeFilter(filter) {

    let arr = filter.split("");
    let safeArr = arr.map(i => dangerToSafe(i));
    return safeArr.join("");
}

function DisplayFilter(filter) {

    let title = document.querySelector(".section-title__filter");

    //Vulnerable code

   title.innerHTML=filter;

    //XSS ATTACKS
    // Attack 1 --  <img src="x" onerror="alert(document.cookie)" >
    // Attack 2 -- <button onmouseover=alert('Wufff!')>click me!</button>


    // SOLUTION 1 - USE SAFE SINK
    //title.innerText=filter;
    //OR
    //title.textContent=filter;

    // SOLUTION 2 - ENCODE OUTPUT (better to use an external library for that)
    // title.innerHTML = encodeFilter(filter);

    // SOLUTION 3 - SANITIZE
    // recommended library : DOMPurify
    // DOMPurify.sanitize(filter);
    // title.innerHTML=filter;


    
}

function RunFilter(params) {
    if (params !== undefined && params.has("year")) {
        let value = params.get("year");
        let filteredCards = FilterCardsByDate(value);
        DisplayCards(filteredCards);
        DisplayFilter(value);
    }
}

export {RunFilter}

