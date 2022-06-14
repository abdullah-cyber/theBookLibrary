const form = document.querySelector('#form');
const Btn = document.querySelector('#add-btn');
const libraryList = document.querySelector('#library-list');

let myLibrary = [];

const getID = () => {
  const id = new Date()
    .getTime()
    .toString(36)
    .concat(performance.now().toString(), Math.random().toString())
    .replace(/\./g, '');
  return id;
};

const clear = () => {
  form.Author.value = '';
  form.Title.value = '';
};

// saving to local
const addBookToLocal = myLibrary => {
  localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
};

const createBook = () => {
  const book = { id: '', title: '', author: '' };
  book.id = getID();
  book.title = form.Title.value;
  book.author = form.Author.value;
  myLibrary.push(book);
  myLibrary.join(', ');
  clear();
};

// displayBooks
const displayBooks = () => {
  libraryList.innerHTML = '';
  for (let i = 0; i < myLibrary.length; i += 1) {
    const libraryItem = document.createElement('div');
    libraryItem.classList.add('library-row');
    libraryItem.innerHTML = `<table class="table table-striped table-responsive table-hover">
        <tbody>
          <tr>  
            <td>${i}</td>
            <td>${myLibrary[i].title}</td>
            <td>${myLibrary[i].author}</td>
            <td><button class = "deleteButton">Delete</button></td>
           <td style = 'display: none'>${myLibrary[i].id}</td>
          </tr>
        </tbody>
      </table>`;
    libraryList.append(libraryItem);
  }
};

Btn.addEventListener('click', e => {
  e.preventDefault();
  createBook();
  addBookToLocal(myLibrary);
  displayBooks();
});

const getBookFromLocal = () => {
  if (!localStorage.myLibrary) {
    myLibrary = [];
  } else {
    let objects = localStorage.getItem('myLibrary');
    objects = JSON.parse(objects);
    myLibrary = objects;
    displayBooks();
  }
};

document.addEventListener('DOMContentLoaded', getBookFromLocal());

// delete from localStorage
const removeBook = id => {
  const myLibrary = JSON.parse(localStorage.getItem('myLibrary'));
  const filter = myLibrary.filter(library => library.id !== id);
  localStorage.setItem('myLibrary', JSON.stringify(filter));
};

const deleteBook = el => {
  if (el.classList.contains('deleteButton')) {
    el.parentElement.parentElement.remove();
  }
};

libraryList.addEventListener('click', e => {
  deleteBook(e.target);
  removeBook(e.target.parentElement.nextElementSibling.textContent);
  getBookFromLocal();
});
