import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LibraryList from './LibraryList';
import ShelfList from './ShelfList';
import BookList from './BookList';
import LibraryForm from './LibraryForm';
import ShelfForm from './ShelfForm';
import BookForm from './BookForm';
import Breadcrumbs from './Breadcrumbs';
import { Container, Navbar } from 'react-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <Navbar>
        <Container>
          <Navbar.Brand><Link to={'/'}>Home</Link></Navbar.Brand>
          <Breadcrumbs />
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<LibraryList />} />
        <Route path="/libraries" element={<LibraryList />} />
        <Route path="/libraries/new" element={<LibraryForm />} />
        <Route path="/libraries/:libraryId/shelves" element={<ShelfList />} />
        <Route path="/libraries/:libraryId/shelves/new" element={<ShelfForm />} />
        <Route path="/shelves/:shelfId/books" element={<BookList />} />
        <Route path="/shelves/:shelfId/books/new" element={<BookForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
