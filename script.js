let myLibrary = [];

let newBook;

const newButton = document.querySelector("#newButton");
newButton.addEventListener("click", () => (popup.style.display = "block"));

const popup = document.getElementById("popup");
close.addEventListener("click", () => (popup.style.display = "none"));

class Book {
  constructor() {
    this.title = form.title.value;
    this.author = form.author.value;
    this.pages = form.pages.value;
    this.read = form.read.checked;
  }
}

function addBookToLibrary(e) {
  e.preventDefault();
  popup.style.display = "none";
  newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  setStorage();
  displayBooks();
  form.reset();
}

function displayBooks() {
  const bookDisplay = document.getElementById("bookDisplay");
  const currentBooks = document.querySelectorAll(".book");
  currentBooks.forEach((book) => bookDisplay.removeChild(book));

  for (let i = 0; i < myLibrary.length; i++) {
    createBookCard(myLibrary[i]);
  }
}

function createBookCard(item) {
  const bookDisplay = document.querySelector("#bookDisplay");

  const bookBox = document.createElement("div");
  bookBox.classList.add("book");
  bookBox.setAttribute("id", myLibrary.indexOf(item));

  const titleBox = document.createElement("div");
  titleBox.textContent = "Title: " + item.title;
  titleBox.classList.add("title");
  bookBox.appendChild(titleBox);

  const authorBox = document.createElement("div");
  authorBox.textContent = "Author: " + item.author;
  authorBox.classList.add("author");
  bookBox.appendChild(authorBox);

  const pagesBox = document.createElement("div");
  pagesBox.textContent = "Pages: " + item.pages;
  pagesBox.classList.add("pages");
  bookBox.appendChild(pagesBox);

  const readButton = document.createElement("button");
  readButton.classList.add("readButton");
  bookBox.appendChild(readButton);
  if (item.read === false) {
    readButton.textContent = "Not read";
    readButton.style.backgroundColor = "rgb(110, 49, 6)";
  } else {
    readButton.textContent = "Read";
    readButton.style.backgroundColor = "darkolivegreen";
  }
  readButton.addEventListener("click", () => {
    item.read = !item.read;
    setStorage();
    displayBooks();
  });

  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.setAttribute("id", "removeButton");
  bookBox.appendChild(removeButton);
  removeButton.addEventListener("click", () => {
    myLibrary.splice(myLibrary.indexOf(item), 1);
    setStorage();
    displayBooks();
  });

  bookDisplay.appendChild(bookBox);
}

const form = document.querySelector("#form");
form.addEventListener("submit", addBookToLibrary);

function setStorage() {
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}

function refresh() {
  if (!localStorage.myLibrary) {
    displayBooks();
  } else {
    let items = localStorage.getItem("myLibrary");
    myLibrary = JSON.parse(items);
    displayBooks();
  }
}
refresh();
