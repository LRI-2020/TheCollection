
function FulfillCardTemplate(book){
    return `<div class="card">
                    
                    <button type="button" class="btn deleteBtn align-self-end mt-2">
                    <img class="deleteIcon" src="assets/img/trash.svg" alt="trashIcon">
                    </button>
                    <img id="card${book.number}-img__cover" class="bookCover card-img-top" src=${book.cover} alt="Book${book.number} Cover">

                        <div class="card-body">
                            <h3 class="card-title">${book.title}</h3>
                            <p id="p-dateCard${book.number}" class="dateText card-text mb-0">${book.date.getFullYear()}</p>
                            <p id="p-authorCard${book.number}" class="authorText card-text">${book.author}</p>
                            <p id="p-summaryCard${book.number}" class="summaryText card-text">${book.summary}</p>
                        </div>

                        <a id="a-readMoreCard${book.number}" href="${book.readMoreLink}" target="_blank"
                           class="readMoreLink card-footer text-center">Read More</a>
                </div>`
}

export {FulfillCardTemplate}