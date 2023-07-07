class addBookUI {
  static callAddBookUI() {
    const addBook = document.createElement('div');
    addBook.innerHTML = `
      <form id="form" class="col-md-4 col-md-offset-4">
        <h1 class="text-center pb-5"><strong>Add a new book</strong></h1>
        <div class="form-group">
          <label for="title" class="sr-only">Title</label>
          <input
            type="text"
            name="Title"
            placeholder="Title"
            id="title"
            required
            class="form-control book-input"
          />
        </div>
      
        <div class="form-group">
          <label for="author" class="sr-only"></label>
          <input
            type="text"
            name="Author"
            placeholder="Author"
            id="author"
            required
            class="form-control book-input"
          />
        </div>
        <button type="submit" id="add-btn" class="btn text-capitalize pull-right">
          <strong>add</strong>
        </button>
      </form>
          `;

    return addBook;
  }

  static theForm() {
    const form = document.querySelector('#form');

    return form;
  }
}

export default addBookUI;
