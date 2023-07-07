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
export default storeToLocal;
