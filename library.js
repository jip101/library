let myLibrary = [
    {
        title: "War of the Worlds",
        author: "H.G. Wells", 
        read: true
    },
    {
        title: "The Time Machine",
        author: "H.G. Wells",
        read: false
    }
];

function Book(title, author) {
    this.title = title;
    this.author = author;
}

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
    let book = new Book("lotr", "tolkien")
    addBookToLibrary(book)
    header.style.opacity = '0.35'
    main.style.opacity = '0.35'
    paper.style.display = 'block'
})

let cancelButton = document.querySelector('#cancelButton')

cancelButton.addEventListener('click', () => {
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
    let info = document.querySelector('form')
    console.log(info)
    console.log(info['bookTitle'].value)
    console.log(document.querySelector('form')['read'].value)
})