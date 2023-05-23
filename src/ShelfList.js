import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';

function ShelfList() {
  const [shelves, setShelves] = useState([]);
  const { libraryId } = useParams();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/libraries/${libraryId}/shelves`)
      .then(response => response.json())
      .then(data => setShelves(data));
  }, [libraryId]);

  return (
    <ListGroup>
      {shelves.map(shelf => (
        <ListGroup.Item key={shelf.id}>
          {shelf.genre}
          <Link to={`/shelves/${shelf.id}/books`}>View Books</Link>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default ShelfList;
