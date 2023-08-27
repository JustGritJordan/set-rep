import'../src/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComp from './compenets/NavBarComp.js';



function Header() {
  return (  
    <div className='container'>
    <NavBarComp/>
  
  
    <header className="header">
      <h1 className='SetRep'>SetRep</h1>
      <h1 className='SetsQuestion'> How many sets?</h1>
    </header>
    <Form className='inputBox'>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="email" placeholder="1 to 15 sets" />
      </Form.Group>
    </Form>  
    {/* <Form>
      {['checkbox', 'radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="1"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="2"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            disabled
            label="3 (disabled)"
            type={type}
            id={`inline-${type}-3`}
          />
        </div>
      ))}
    </Form>
    <Stack gap={2} className="col-md-5 mx-auto">
      <Button variant="secondary">Save changes</Button>
      <Button variant="outline-secondary">Cancel</Button>
    </Stack> */}
    <div className='GoButtonDiv'>
    <Button className='GoButton'>START EXERCISE
    </Button>
    </div>
    </div>
  );
}

export default Header;
