const form = document.querySelector('#form');
const btn = document.querySelector('#add-btn');
const libraryList = document.querySelector('#library-list');

const getID = () => {
  const id = new Date()
    .getTime()
    .toString(36)
    .concat(performance.now().toString(), Math.random().toString())
    .replace(/\./g, '');
  return id;
};

class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }
}

class storeToLocal {
  static getBooks() {
    let myLibrary;
    if (localStorage.getItem('myLibrary') === null) {
      myLibrary = [];
    } else {
      const objects = localStorage.getItem('myLibrary');
      myLibrary = JSON.parse(objects);
    }
    return myLibrary;
  }

  static addBooks(book) {
    const myLibrary = storeToLocal.getBooks();
    myLibrary.push(book);
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
  }

  static removeBooks(id) {
    const myLibrary = JSON.parse(localStorage.getItem('myLibrary'));
    const filter = myLibrary.filter(library => library.id !== id);
    localStorage.setItem('myLibrary', JSON.stringify(filter));
  }
}

class theBook {
  static createBook() {
    const myLibrary = storeToLocal.getBooks();
    const books = myLibrary;
    books.forEach(book => theBook.displayBooks(book));
  }

  static displayBooks(book) {
    const row = document.createElement('tr');
    row.innerHTML = `<table class="table table-striped table-responsive table-hover">
          <tbody>
            <tr> 
              <td><strong>"${book.title}" by ${book.author}</strong></td>
              <td><button class = "deleteButton btn-danger">Delete</button></td>
             <td style = 'display: none'>${book.id}</td>
            </tr>
          </tbody>
        </table>`;
    libraryList.appendChild(row);
  }

  static clearFields() {
    form.Title.value = '';
    form.Author.value = '';
  }

  static deleteBook(el) {
    if (el.classList.contains('deleteButton')) {
      el.parentElement.parentElement.remove();
    }
  }
}

document.addEventListener('DOMContentLoaded', theBook.createBook());

btn.addEventListener('click', e => {
  e.preventDefault();
  const id = getID();
  const title = form.Title.value;
  const author = form.Author.value;
  // add book to page
  if (title === '' || author === '') {
    return btn.disabled === true;
  }
  const books = new Book(id, title, author);
  theBook.displayBooks(books); // add books to ui
  theBook.clearFields();
  storeToLocal.addBooks(books); // add books to local
  return true;
});

// delete
libraryList.addEventListener('click', e => {
  theBook.deleteBook(e.target); // delete from ui
  storeToLocal.removeBooks(e.target.parentElement.nextElementSibling.textContent);
});
