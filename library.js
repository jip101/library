let myLibrary = [];

function Book(title, author) {
    this.title = title;
    this.author = author;
}

//TODO
function addBookToLibrary(book) {
    myLibrary.push(book)
}

let addButton = document.querySelector('#addBook')

addButton.addEventListener('click', () => {
    let book = new Book("lotr", "tolkien")
    addBookToLibrary(book)
})