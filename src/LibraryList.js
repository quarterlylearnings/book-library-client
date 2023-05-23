import { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function LibraryList() {
  const [libraries, setLibraries] = useState([]);

  useEffect(() => {
    console.log(process.env.REACT_APP_API_BASE_URL)
    fetch(`${process.env.REACT_APP_API_BASE_URL}/libraries`)
      .then(response => response.json())
      .then(data => setLibraries(data));
  }, []);

  return (
    <ListGroup>
      {libraries.map(library => (
        <ListGroup.Item key={library.id}>
          {library.name}
          <Link to={`/libraries/${library.id}`}>View Shelves</Link>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default LibraryList;
