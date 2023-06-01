let myLibrary = [];

function Book(title, author) {
    this.title = title;
    this.author = author;
}

//TODO - get form data
function addBookToLibrary(book) {
    myLibrary.push(book)
}

let form = document.querySelector('#page')
let header = document.querySelector('header')
let main = document.querySelector('main')

let addBook = document.querySelector('#addBook')

addBook.addEventListener('click', () => {
    let book = new Book("lotr", "tolkien")
    addBookToLibrary(book)
    header.style.opacity = '0.35'
    main.style.opacity = '0.35'
    form.style.display = 'block'
})

let cancelButton = document.querySelector('#cancelButton')

cancelButton.addEventListener('click', () => {
    form.style.display = 'none'
    header.style.opacity = '1'
    main.style.opacity = '1'
})

let submitButton = document.querySelector('#submitButton')
submitButton.addEventListener('click', event => {
    event.preventDefault()
    let bookInfo = document.querySelectorAll('.bookInfo')
    bookInfo.forEach(info => {
        console.log(info.value)
    })
    console.log(document.querySelector('form')['read'].value)
})