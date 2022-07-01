class Display {
  static displayBooks(book) {
    const libraryList = document.querySelector('#library-list');
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

    return libraryList;
  }
}
export default Display;
