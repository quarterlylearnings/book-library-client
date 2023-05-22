import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LibraryList from './LibraryList';
import ShelfList from './ShelfList';
import BookList from './BookList';
import LibraryForm from './LibraryForm';
import ShelfForm from './ShelfForm';
import BookForm from './BookForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LibraryList />} />
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
