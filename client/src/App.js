import'../src/index.css';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';

function Header() {
  return (
    <div className='container'>
    
    <header className="header">
      <h1 className='h1'>SetRep</h1>
      <h1 className='SetsQuestion'> How many sets?</h1>
    </header>
    <Form className='inputBox'>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="email" placeholder="Number between 1 and 15" />
      </Form.Group>
    </Form>
    <Button className='GoButton'>Here is the button
    </Button>
    </div>
  );
}

export default Header;
