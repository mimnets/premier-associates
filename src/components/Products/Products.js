import React from 'react';
import {Card, Button, Row, Col, Container} from 'react-bootstrap'

const Products = (props) => {
    const {name, img, description, key} = props.products;
    return (
        <div className="products-container">
            <Container>
                <Row>
                    <Col xs={3}>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                        {description}
                        </Card.Text>
                    <Button variant="primary">Learn more about {name}</Button>
                    </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Products;