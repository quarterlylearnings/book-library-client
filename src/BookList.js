import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, ListGroup } from 'react-bootstrap';

function BookList() {
  const [books, setBooks] = useState([]);
  const { shelfId } = useParams();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/shelves/${shelfId}/books`)
      .then(response => response.json())
      .then(data => setBooks(data));
  }, [shelfId]);

  return (
    <ListGroup>
      {books.map(book => (
        <ListGroup.Item key={book.id}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={book.coverImageUrl} />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{book.author}</Card.Subtitle>
              <Card.Text>{book.summary}</Card.Text>
            </Card.Body>
          </Card>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default BookList;
