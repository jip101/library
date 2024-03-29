const myLibrary = [
    {
        title: "War of the Worlds",
        author: "H.G. Wells", 
        read: 'read'
    },
    {
        title: "The Time Machine",
        author: "H.G. Wells",
        read: 'notRead'
    }
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
    let prevLib = document.querySelectorAll('.book')
    prevLib.forEach(book => {
        book.remove()
    })
    myLibrary.forEach(book => {
        let bookDiv = document.createElement('div')
        bookDiv.className = 'book'
        main.appendChild(bookDiv)

        let title = document.createElement('div')
        title.className = 'title'
        title.textContent = book.title

        let author = document.createElement('div')
        author.className = 'author'
        author.textContent = book.author

        let read = document.createElement('div')
        read.className = book.read
        if (book.read === 'read') {
            read.textContent = 'Read'
        }
        else {
            read.textContent = 'Not Read'
        }
        read.addEventListener('click', () => {
            if (book.read === 'read') {
                book.read = 'notRead'
            }
            else {
                book.read = 'read'
            }
            buildLibrary()
        })

        let delButton = document.createElement('div')
        delButton.className = 'delButton'
        delButton.textContent = 'X'
        delButton.addEventListener('click', () => {
            let index = myLibrary.indexOf(book)
            myLibrary.splice(index, 1)
            buildLibrary()
        })

        bookDiv.appendChild(title)
        bookDiv.appendChild(author)
        bookDiv.appendChild(read)
        bookDiv.appendChild(delButton)
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
//        console.log(myLibrary[i].author)
    }
})


buildLibrary();
