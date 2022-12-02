import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../components/nsslider.css';
function BasicExample() {
  return (
    <main>
        <div className='form'>
    <Form className='mt-5'>
      <Form.Group className="mb-3 text-light" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3 text-light" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3 text-light" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    </main> 
  );
}

export default BasicExample;