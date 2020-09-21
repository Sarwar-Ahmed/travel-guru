import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './CustomSlider.css'

const CustomSlider = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                    <img
                        className="slideImg"
                        src="https://iili.io/2nAPhN.png"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item> 
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                    <img
                        className="slideImg"
                        src="https://iili.io/2nAPhN.png"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                    <img
                        className="slideImg"
                        src="https://iili.io/2nAPhN.png"
                        alt="Third slide"
                    />

                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default CustomSlider;