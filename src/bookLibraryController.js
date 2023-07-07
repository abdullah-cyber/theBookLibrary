import Book from './bookClass';
import storeToLocal from './localStorageClass';
import theBook from './displayBook';
import getID from './getID';
import addBookUI from './addBookUI';
import Display from './displayList';

const bookLibraryController = () => {
  const form = addBookUI.theForm();
  const btn = document.querySelector('#add-btn');
  const libraryList = document.querySelector('#library-list');

  document.addEventListener('DOMContentLoaded', theBook.createBook());

  btn.addEventListener('click', e => {
    e.preventDefault();
    const id = getID.theID();
    const title = form.Title.value;
    const author = form.Author.value;
    // add book to page
    if (title === '' || author === '') {
      return btn.disabled === true;
    }
    const books = new Book(id, title, author);
    Display.displayBooks(books); // add books to ui
    theBook.clearFields();
    storeToLocal.addBooks(books); // add books to local
    return true;
  });

  // delete
  libraryList.addEventListener('click', e => {
    theBook.deleteBook(e.target); // delete from ui
    storeToLocal.removeBooks(e.target.parentElement.nextElementSibling.textContent);
  });
};
export default bookLibraryController;
