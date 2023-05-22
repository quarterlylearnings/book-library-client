import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LibraryList from './LibraryList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LibraryList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
