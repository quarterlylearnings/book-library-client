import { useState, useEffect } from 'react';
import { Button, Col, Container, ListGroup, Row, Stack } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function LibraryList() {
  const [libraries, setLibraries] = useState([]);

  const navigate = useNavigate();

  const addLibrary = () => {
    navigate('/libraries/new')
  }

  useEffect(() => {
    console.log(process.env.REACT_APP_API_BASE_URL)
    fetch(`${process.env.REACT_APP_API_BASE_URL}/libraries`)
      .then(response => response.json())
      .then(data => setLibraries(data));
  }, []);

  return (
  <Container>
    <Stack gap={2}>
      <ListGroup>
        {libraries.map(library => (
          <ListGroup.Item key={library.id}>
            {library.name}
            <Link to={`/libraries/${library.id}/shelves`}>View Shelves</Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Row>
        <Col xs={{offset:10}}>
          <Button onClick={addLibrary}>+</Button>
        </Col>
      </Row>
    </Stack>
  </Container>
  );  
}

export default LibraryList;
