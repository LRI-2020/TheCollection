import {Book} from "classes.js";
let imgPath = "assets/img/";
let collection=[];

let book1= new Book(
    "John Connolly",
    "Every dead thing",
    new Date(1999,0),
    "Introducing Detective Charlie Parker, whose hunt for a serial killer brings revelations.",
    `${imgPath}Tome1.png`,1,"https://www.johnconnollybooks.com/books/-every-dead-thing----------------------------");

let book2= new Book(
    "John Connolly",
    "Dark Hollow",
    new Date(2000,0),
    "PI Charlie Parker seeks justice for a dead woman and her son in a wintry Maine town.",
    `${imgPath}Tome2.png`,2,"https://www.johnconnollybooks.com/books/-dark-hollow---------------------------------");

let book3= new Book(
    "John Connolly",
    "The Killing Kind",
    new Date(2001,0),
    "PI Charlie Parker finds ties between the murder of an old friend and a 40-year-old massacre.",
    `${imgPath}Tome3.png`,3,"https://www.johnconnollybooks.com/books/-the-killing-kind----------------------------");

let book4= new Book(
    "John Connolly",
    "The White Road",
    new Date(2002,0),
    "Parker hunts a murderer in South Carolina with ties to an old adversary.",
    `${imgPath}Tome4.png`,4,"https://www.johnconnollybooks.com/books/-the-white-road------------------------------");

let book5= new Book(
    "John Connolly",
    "The Black Angel",
    new Date(2005,0),
    "Parker's search for the \"Black Angel\" relic leads to violence in this world and war in the next.",
    `${imgPath}Tome5.png`,5,"https://www.johnconnollybooks.com/books/the-black-angel");

let book6= new Book(
    "John Connolly",
    "The Unquiet",
    new Date(2007,0),
    "Parker uncovers the terrible secrets of his client's father, a child psychiatrist.",    
    `${imgPath}Tome6.png`,
    6,
    "https://www.johnconnollybooks.com/books/-the-unquiet---------------------------------");

let book7= new Book(
    "John Connolly",
    "The Reapers",
    new Date(2007,0),
    "Parker's allies Louis and Angel confront a deadly vendetta rooted in Louis's past.",
    `${imgPath}Tome7.png`,
    7,
    "https://www.johnconnollybooks.com/books/-the-reapers---------------------------------");

let book8= new Book(
    "John Connolly",
    "The Lovers",
    new Date(2009,0),
    "The hunt for a young woman leads to revelations about Parker's own father.",
    `${imgPath}Tome8.png`,
    8,
    "https://www.johnconnollybooks.com/books/the-lovers");

let book9= new Book(
    "John Connolly",
    "The Whisperers",
    new Date(2010,0),
    "Parker joins forces with an old enemy to stop a deadly and mysterious smuggling operation.",
    `${imgPath}Tome9.png`,
    9,
    "https://www.johnconnollybooks.com/books/-the-whisperers------------------------------");

let book10= new Book(
    "John Connolly",
    "The Burning Soul",
    new Date(2011,0),
    "BOOK 10\n" +
    "Parker hunts a missing girl whose disappearance is linked to a long-kept secret.",
    `${imgPath}Tome10.png`,
    10,
    "https://www.johnconnollybooks.com/books/-the-burning-soul----------------------------");

collection.push(book1,book2,book3,book4,book5,book6,book7,book8,book9,book10);

export{collection};