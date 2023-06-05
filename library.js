const myLibrary = [
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
    buildLibrary()
}

function buildLibrary() {
    myLibrary.forEach(book => {

        console.log(book.author)
    })
}

function resetForm() {
    paper.style.display = 'none'
    header.style.opacity = '1'
    main.style.opacity = '1'
    form.bookTitle.value = ''
    form.bookAuthor.value = ''
    form.read.value = 'notRead'
}

const paper = document.querySelector('#paper')
const header = document.querySelector('header')
const main = document.querySelector('main')
const form = document.querySelector('form')

const addBook = document.querySelector('#addBook')

addBook.addEventListener('click', () => {
    header.style.opacity = '0.35'
    main.style.opacity = '0.35'
    paper.style.display = 'block'
})

let cancelButton = document.querySelector('#cancelButton')

cancelButton.addEventListener('click', event => {
    event.preventDefault();
    resetForm();
})

let submitButton = document.querySelector('#submitButton')
submitButton.addEventListener('click', event => {
    event.preventDefault();
    if (!form.bookTitle.value || !form.bookAuthor.value) {
        window.alert("Fill in both title and author.");
        return;
    }
    let book = new Book(form.bookTitle.value, form.bookAuthor.value, form.read.value);
    addBookToLibrary(book);
    //console.log(myLibrary);
    resetForm();

    for (i=0; i<myLibrary.length; i++) {
        console.log(myLibrary[i].author)}
})