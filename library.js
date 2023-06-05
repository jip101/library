let myLibrary = [
//    {
//    title: "War of the Worlds",
//        author: "H.G. Wells", 
//        read: 'read'
//    },
//    {
//        title: "The Time Machine",
//        author: "H.G. Wells",
//        read: 'notRead'
//    }
];

function Book(title, author, read) {
    this.title = title;
    this.author = author;
    this.read = read;
//  this.index = () => myLibrary.indexOf(this)
}

//Book.prototype.index = () => myLibrary.indexOf(this)

//TODO - get form data
function addBookToLibrary(book) {
    myLibrary.push(book)
}

let paper = document.querySelector('#paper')
let header = document.querySelector('header')
let main = document.querySelector('main')
let form = document.querySelector('form')

let addBook = document.querySelector('#addBook')

addBook.addEventListener('click', () => {
    header.style.opacity = '0.35'
    main.style.opacity = '0.35'
    paper.style.display = 'block'
})

let cancelButton = document.querySelector('#cancelButton')

cancelButton.addEventListener('click', event => {
    event.preventDefault();
    paper.style.display = 'none'
    header.style.opacity = '1'
    main.style.opacity = '1'
    form.bookTitle.value = ''
    form.bookAuthor.value = ''
    form.read.value = 'notRead'
})

let submitButton = document.querySelector('#submitButton')
submitButton.addEventListener('click', event => {
    event.preventDefault()
    let book = new Book(form.bookTitle.value, form.bookAuthor.value, form.read.value)
    addBookToLibrary(book)
    console.log(myLibrary)
    paper.style.display = 'none'
    header.style.opacity = '1'
    main.style.opacity = '1'
    form.bookTitle.value = ''
    form.bookAuthor.value = ''
    form.read.value = 'notRead'

    for (i=0; i<myLibrary.length; i++) {
        console.log(myLibrary[i])}
})