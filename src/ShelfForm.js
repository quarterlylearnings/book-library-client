import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

function ShelfForm() {
  const [genre, setGenre] = useState('');
  const navigate = useNavigate();
  const { libraryId } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${process.env.REACT_APP_API_BASE_URL}/shelves`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ genre, libraryId }),
    })
      .then(response => response.json())
      .then(data => {
        navigate(`/libraries/${libraryId}/shelves`);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formShelfGenre">
        <Form.Label>Shelf Genre</Form.Label>
        <Form.Control type="text" placeholder="Enter genre" value={genre} onChange={e => setGenre(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default ShelfForm;
