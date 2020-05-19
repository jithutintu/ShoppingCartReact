import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import Header from './Header.js'
import Footer from './Footer.js'
import  HomescreenCarousel  from './HomeScreenCarousel.js'
import Categories from './CategoriesCard.js'



class HomeScreenComponent extends Component {
    render() {
        return (
            <div >
                <Card className="text-center ">
                <Header/>
                <HomescreenCarousel/>
                    <Card.Body className="background-red">
                      
                      <Categories/>
                 
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                      
                       </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                <Footer/>
                </Card>
            </div>
        );
    }
}

export default HomeScreenComponent;