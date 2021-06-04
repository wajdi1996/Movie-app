import{Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap'
import { Link } from "react-router-dom";

  

function Menu({getInput,favorites}) {

    return(
        <div >
            <Navbar  expand="lg" fixed="top" className="navs" >
            <div className="container">
    <Navbar.Brand href="#home">
      <img
        src="/logoo.png"
        max-width= "100%"
        height= "auto"
        className="d-inline-block align-top"
        width="110px" 
        alt="React Bootstrap logo"
      />
      </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mx-auto">
    <Form inline>
      <FormControl type="text" placeholder="SEARCH" onChange={getInput}  />
      <Button variant="outline-secondary"   ><i class="fas fa-search  "></i></Button>
      <Link to="/favorit"><i class="fas fa-heart iconeNav "></i><span class="badge bg-danger rounded-circle ml-1" id="val">{favorites}</span></Link> <Link to="/contact"><i class="far fa-user iconeNav"></i></Link>

    </Form>

    </Nav>
    <Link className="space" to="/">HOME</Link>
    <Link className="space" to="/about">ABOUT US</Link>
   

   
    
  </Navbar.Collapse>
  </div>
</Navbar>


        </div>
    )
    
}
export default Menu