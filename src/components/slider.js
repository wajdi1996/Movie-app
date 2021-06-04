import{Carousel} from 'react-bootstrap'
function Slider() {
    return(
        <div>
            <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="img/tof1.jpg"
      alt="First slide"
    />

  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="img/tof2.jpg"
      alt="Second slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="img/tof3.jpg"
      alt="Third slide"
    />

  </Carousel.Item>
  {/* <Carousel.Item>
    <img
      className="d-block w-100"
      src="img/movie4.webp"
      alt="4 slide"
    />

  </Carousel.Item> */}
</Carousel>


        </div>
    )
    
}
export default Slider