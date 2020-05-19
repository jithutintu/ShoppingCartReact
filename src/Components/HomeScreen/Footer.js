import React, { Component } from 'react';
import { Card } from 'react-bootstrap'
import { FaRegCopyright } from 'react-icons/fa';

class Footer extends Component {
    render() {
        return (
            <Card.Footer className="text-muted">
                  <FaRegCopyright style={{marginRight:"0.3rem"}}/>
                   Shop Cart
            </Card.Footer>
        );
    }
}

export default Footer;