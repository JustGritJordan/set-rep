import Button from 'react-bootstrap/Button'
import'../src/index.css';
import{Container} from "@material-ul/core"

function Header() {
  return (
    <div>
<Container style={{backgroundColor:"skyblue"}}>
    <header className="header">
      <h1 className='h1'>SetRep</h1>
    </header>
    </Container>
    </div>
  );
}

export default Header;
