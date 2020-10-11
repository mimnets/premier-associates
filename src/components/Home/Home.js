import React, { useState } from 'react';
import fakeData from '../../FakeData';
import Products from '../Products/Products';
import {Carousel, Col, Container, Row} from  'react-bootstrap';

const Home = () => {
    const products = fakeData;
    return (
        <div className="home-container">
            <Container>
            <Row>
                <Col sm={1}>
                    {/* Empty */}
                </Col>
                <Col sm={10}>

                <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://1.bp.blogspot.com/-WiSG8WPd83E/X4MaKCLmMHI/AAAAAAAAoSQ/P4K-TbvR_sMR2tJ9_DPHiiUd-N_FJJ9gQCLcBGAsYHQ/s1920/banner-modified-05.jpg"
                alt="First slide"
                height="400"
                />
                {/* <Carousel.Caption>
                <h3 style={{color:"red"}}>First slide label</h3>
                <p style={{color:"red"}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://1.bp.blogspot.com/-cgt9KrUwCMk/X4MX8zR6AtI/AAAAAAAAoSA/hn9ZmaRGQ9YC58_6Sgf9-Wcg9NVaCBCawCLcBGAsYHQ/s1400/mv_poster_en-min.png"
                alt="Third slide"
                height="400"
                />

                {/* <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://1.bp.blogspot.com/-7hKUSscALts/X4MaJzLKGLI/AAAAAAAAoSM/Fjwrm4Fd78ERgo3x9RKK5gxstNWEGwtzQCLcBGAsYHQ/s1920/banDesk3.jpg"
                alt="Third slide"
                height="400"
                />

                {/* <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>

                </Col>
                <Col sm={1}>
                    {/* Empty */}
                </Col>
            </Row>
            </Container>
            
        <div>
            {
                products.map(pd => <Products products={pd}></Products>)
            }
        </div>
        </div>
    );
};

export default Home;