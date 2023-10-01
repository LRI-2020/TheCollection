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

function DisplayFilter(filter){
    
    let title = document.querySelector(".section-title__filter");
    
    //Vulnerable code

   // title.innerHTML=filter;
    
    //XSS attacks
    //Attack 1 --  <img src="x" onerror="alert(document.cookie)" >
    // Attack 2 -- <button onmouseover=alert('Wufff!')>click me!</button>
 
    
    //Solution 1 if content is only text
    //title.innerText=filter;
    //OR
    //title.textContent=filter;
    
    //Solution 2 - if innerHtml is needed - sanitize
   // recommended library : DOMPurify
   //  DOMPurify.sanitize(filter);
    title.innerHTML=filter;
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

