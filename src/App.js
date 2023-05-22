import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LibraryList from './LibraryList';
import ShelfList from './ShelfList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LibraryList />} />
        <Route path="/libraries/:libraryId/shelves" element={<ShelfList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
