import bookLibraryController from './bookLibraryController';
import Header from './header';
import addBookUI from './addBookUI';
import Footer from './footer';
import LibraryList from './libraryList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';

const fragment = document.createDocumentFragment();
fragment.appendChild(Header.callHeader());
fragment.appendChild(addBookUI.callAddBookUI());
fragment.appendChild(LibraryList.callLibraryList());
fragment.appendChild(Footer.callFooter());

const content = document.querySelector('.container');
content.appendChild(fragment);

bookLibraryController();
