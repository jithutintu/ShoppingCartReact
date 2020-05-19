import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'



class HomeScreenCarousel extends Component {
    render() {
        return (
            <div style={{marginTop:"3rem"}}>
                  <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/images/bank.jpg"
                            width={500} height={500} mode='fit' 
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>All your favourites on one swipe</h3>
                            <p>Lets fight together aganist corona by staying home</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/images/person.jpg"
                            width={500} height={500} mode='fit' 
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/images/woman.jpg"
                            width={500} height={500} mode='fit' 
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </div>
        );
    }
}

export default HomeScreenCarousel;