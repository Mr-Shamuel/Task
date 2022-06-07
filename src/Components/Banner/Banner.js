import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
const Banner = () => {
    return (
        <div className="learningVideos container  ">


            <div className="row ">

                <div className="col-6 ">
                    <Carousel className="carousel bg-dark">
                        <Carousel.Item>
                            <img
                                className="d-block "
                                src="https://api.shod.ai/v1/media/pictures/product/ezgif-6-fecb45736f11.webp"
                                alt="First slide"
                            />
                            
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block   "
                                src="https://api.shod.ai/v1/media/pictures/product/snickers-chocolate-50-gm.webp"
                                alt="First slide"
                            />
                            
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block "
                                src="https://api.shod.ai/v1/media/pictures/product/milk-vita-ghee-400-gm.jpg"
                                alt="First slide"
                            />
                            
                        </Carousel.Item>

                    </Carousel>
                </div>
                <div className="col-6 ">
                    <Carousel className="carousel">
                        <Carousel.Item>
                            <img
                                className="d-block "
                                src="https://api.shod.ai/v1/media/pictures/product/pringles-original-potato-chips-147-gm.webp"
                                alt="First slide"
                            />
                           
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block "
                                src="https://api.shod.ai/v1/media/pictures/product/orange_copy.jpg"
                                alt="First slide"
                            />
                           
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block "
                                src="https://api.shod.ai/v1/media/pictures/product/Boneless-beef-stew.jpg"
                                alt="First slide"
                            />
                           
                        </Carousel.Item>

                    </Carousel>
                </div>

            </div>



            
            <section className="mb-5"></section>

        </div>
    );
};

export default Banner;