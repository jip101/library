let myLibrary = [];

function Book(title, author) {
    this.title = title;
    this.author = author;
}

//TODO - get form data
function addBookToLibrary(book) {
    myLibrary.push(book)
}

let addButton = document.querySelector('#addBook')

addButton.addEventListener('click', () => {
    let book = new Book("lotr", "tolkien")
    addBookToLibrary(book)
    let header = document.querySelector('header')
    let main = document.querySelector('main')
    let form = document.querySelector('#page')
    header.style.opacity = '0.35'
    main.style.opacity = '0.35'
    form.style.display = 'block'
})