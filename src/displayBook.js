import storeToLocal from './localStorageClass';
import Display from './displayList';
import addBookUI from './addBookUI';

class theBook {
  static createBook() {
    const myLibrary = storeToLocal.getBooks();
    const books = myLibrary;
    books.forEach(book => Display.displayBooks(book));
  }

  static clearFields() {
    const form = addBookUI.theForm();
    form.Title.value = '';
    form.Author.value = '';
  }

  static deleteBook(el) {
    if (el.classList.contains('deleteButton')) {
      el.parentElement.parentElement.remove();
    }
  }
}

export default theBook;
