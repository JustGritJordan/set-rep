import React from 'react'
import { Container, Row, col} from 'react-bootstrap'

const Footer = () => {
  return <footer bg="light" data-bs-theme="light">
    <Container>
    <div className = "main-footer">
    <div className ="Row">

    {/* Column 1  */}
    
    <div className='col-md-3 col-sm-6'>
    <h4 className='text-white'> Title</h4 >
    <ul className="list-unstyled">
        <li className='text-white'> What it do</li>
        <li className='text-white'> Howdy Partner</li>
        <li className='text-white'> Keep Going </li>
    </ul>
    </div>
    
    </div> 
    </div>
        
    </Container>
  </footer> 
//  This is crazy right here
//  This is crazy right here

}

export default Footer

