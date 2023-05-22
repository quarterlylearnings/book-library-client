import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LibraryList from './LibraryList';
import ShelfList from './ShelfList';
import BookList from './BookList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LibraryList />} />
        <Route path="/libraries/:libraryId/shelves" element={<ShelfList />} />
        <Route path="/shelves/:shelfId/books" element={<BookList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
