import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Col, Container, ListGroup, Row, Stack } from 'react-bootstrap';

function ShelfList() {
  const [shelves, setShelves] = useState([]);
  const { libraryId } = useParams();
  const navigate = useNavigate();

  const addShelf = () => {
    navigate('/libraries/:libraryId/shelves/new');
  }

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/libraries/${libraryId}/shelves`)
      .then(response => response.json())
      .then(data => setShelves(data));
  }, [libraryId]);

  return (
    <Container>
      <Stack gap={2}>
        <ListGroup>
          {shelves.map(shelf => (
            <ListGroup.Item key={shelf.id}>
              {shelf.genre}
              <Link to={`/shelves/${shelf.id}/books`}>View Books</Link>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <Row>
        <Col xs={{offset:10}}>

          <Button onClick={addShelf}>+</Button>
          </Col>
        </Row>
      </Stack>
    </Container>
  );
}

export default ShelfList;
