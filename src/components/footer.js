import {Row,Col,Container,Form,FormControl,Button} from 'react-bootstrap';

function Footer() {
    return(
        <div className="footer">
         <Container>
  <Row>
    <Col lg={4} xs={6} sm={12}>
    
    <img
        src="/logoo.png"
        max-width= "100%"
        height= "auto"
        className="mb-5"
        alt="React Bootstrap logo"
      />


    <Row className="pt-5">

  <i class="fab fa-facebook-f ml-3  icone"></i>
  <i class="fab fa-twitter ml-4 icone"></i>
  <i class="fab fa-instagram ml-4 icone"></i>
  <i class="fab fa-youtube ml-4 icone"></i>

  </Row>
    

    
    </Col>
    <Col lg={4} xs={6} sm={12}>
 
    <p>CONTACT US</p>
    <li><a href="#"><i class="fas fa-map-marker-alt pr-3"></i>6890 Blvd, The Bronx, NY 1058 New York, USA</a></li>
    <li><a href="#"><i class="far fa-envelope mr-3"></i>hello@vidnext.com
<br/>          Skype: example</a></li>
    <li><a href="#"><i class="fas fa-phone-alt pr-3"></i>+1 587 785 4578
<br/>+1 485 456 0102
</a></li>

    </Col>
    <Col lg={4} xs={6} sm={12}>
    <p>PROFFISH LINKS</p>
    <li><a href="#">About</a></li>
    <li><a href="#">CONTACT</a></li>
    <li><a href="#">Latest Videos</a></li>
    <li><a href="#">Team</a></li>
    <li><a href="#"></a></li>
    
    

    </Col>

  </Row>
  <hr className="mt-5 mb-3" color="#dadada " />
  <div className="d-flex justify-content-center">
  <h3>Copyright @2021 . Designed By Belhaj</h3>
  </div>


 
  

</Container>


        </div>
    )
    
}
export default Footer