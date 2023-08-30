import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'

const Footer = () => {
  return <footer bg="dark" variant="dark">
    {/* <Container> */}
    <div className = "main-footer">
    {/* <div className ="container"> */}
    <div className ="row">

    {/* Column 1  */}
    <div className='col-md-3 col-sm-6'>
    <h4> Title</h4 >
    <ul className="list-unstyled">
        <li> What it do</li>
        <li> Howdy Partner</li>
        <li> I like muscle butt anime girls lol </li>
    </ul>
    </div>
{/* Column 2 */}
    <div className='col-md-3 col-sm-6'>
    <h4> Title</h4 >
    <ul className="list-unstyled">
        <li> What it do</li>
        <li> Howdy Partner</li>
        <li> I like muscle butt anime girls lol </li>
    </ul>
    </div>
    
    
    
    
    </div> 
    </div>
        
    {/* </Container> */}
  </footer> 
  
}

export default Footer