let myLibrary = [{
        "title": 'K-PAX',
        "author": 'Gene Brewer',
        "pages": 500,
        "read": true
    },{
        "title": 'Omon Ra',
        "author": 'Victor Pelevin',
        "pages": 250,
        "read": false
    }];

let newBook;

class Book {
    constructor(title, author, pages,read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }
}

function addBookToLibrary() {
    newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);

}

function displayBooks() {
    const bookDisplay = document.getElementById('bookDisplay');
    const currentBooks = document.querySelectorAll('.book');
    currentBooks.forEach(book => bookDisplay.removeChild(book));
    
    for (let i = 0; i<myLibrary.length; i++) {
        createBookCard(myLibrary[i]);
    }
}

function createBookCard(item) {
    const bookDisplay = document.querySelector('#bookDisplay');

    const bookBox = document.createElement('div');
    bookBox.classList.add('book');
    bookBox.setAttribute('id', myLibrary.indexOf(item));

    const titleBox = document.createElement('div');
    titleBox.textContent = item.title;
    titleBox.classList.add('title');
    bookBox.appendChild(titleBox);

    const authorBox = document.createElement('div');
    authorBox.textContent = item.author;
    authorBox.classList.add('author');
    bookBox.appendChild(authorBox);

    const pagesBox = document.createElement('div');
    pagesBox.textContent = item.pages;
    pagesBox.classList.add('pages');
    bookBox.appendChild(pagesBox);

    const readButton = document.createElement('button');
    readButton.classList.add('readButton');
    bookBox.appendChild(readButton);
    if (item.read === false) {
        readButton.textContent = "Not read";
    } else {
        readButton.textContent = 'Read';
    }
    readButton.addEventListener('click', () => {
        item.read = !item.read;
        //setStorage();
        displayBooks();
    })

    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove";
    removeButton.setAttribute('id', 'removeButton');
    bookBox.appendChild(removeButton);
    removeButton.addEventListener('click', () => {
        myLibrary.splice(myLibrary.indexOf(item), 1);
        //setStorage();
        displayBooks();
    });
    

    bookDisplay.appendChild(bookBox);
}

//function createVisual() {}

//function setStorage() {}

displayBooks();