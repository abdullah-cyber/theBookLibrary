class LibraryList {
  static callLibraryList() {
    const awesomeBooks = document.createElement('div');
    awesomeBooks.innerHTML = `
      <div class="awesome-books">
      <h1 class="text-center pb-5"><strong>All awesome books</strong></h1>
      <div class="table-div">
        <table class="table table-striped table-responsive table-hover">
          <tbody id="library-list"></tbody>
        </table>
      </div>
          `;

    return awesomeBooks;
  }
}

export default LibraryList;
