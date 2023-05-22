import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

function BookForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [summary, setSummary] = useState('');
  const [coverImageUrl, setCoverImageUrl] = useState('');
  const navigate = useNavigate();
  const { shelfId } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${process.env.REACT_APP_API_BASE_URL}/books`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, author, summary, coverImageUrl, shelfId }),
    })
      .then(response => response.json())
      .then(data => {
        navigate(`/shelves/${shelfId}/books`);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBookTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter title" value={title} onChange={e => setTitle(e.target.value)} />
      </Form.Group>
      <Form.Group controlId="formBookAuthor">
        <Form.Label>Author</Form.Label>
        <Form.Control type="text" placeholder="Enter author" value={author} onChange={e => setAuthor(e.target.value)} />
      </Form.Group>
      <Form.Group controlId="formBookSummary">
        <Form.Label>Summary</Form.Label>
        <Form.Control type="text" placeholder="Enter summary" value={summary} onChange={e => setSummary(e.target.value)} />
      </Form.Group>
      <Form.Group controlId="formBookCoverImageUrl">
        <Form.Label>Cover Image URL</Form.Label>
        <Form.Control type="text" placeholder="Enter cover image URL" value={coverImageUrl} onChange={e => setCoverImageUrl(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default BookForm;
