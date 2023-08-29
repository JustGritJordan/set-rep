import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'

const Footer = () => {
  return <footer bg="dark" variant="dark">
    {/* <Container> */}
    <div className = "main-footer">
    {/* <div className ="container"> */}
    <div className ="row">
    <div className='col-md-3 col-sm-6'>
    <h4> Title</h4>
    <ul>
        <li> What it do</li>
        <li> Howdy Partner</li>
        <li> I like muscle butt anime girls lol </li>
    </ul>

    </div>
    </div> 
    {/* </div> */}
    </div>
        <Row >
           <Col className='text-center py-3' >Copyright &copy; ProShop</Col> 
        </Row>
    {/* </Container> */}
  </footer> 
  
}

export default Footer