import React from 'react'
import Slider from "react-slick";

export default function Index() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: false,
        arrows:false,
        centerMode: true,
    };
    return (
        <section className='vehicle-range'>
            <div className="container mx-auto">
                <h1 className='heading'>vehicle range</h1>
            </div>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className="nav-link active" data-toggle="tab" href="#home">Goods Carrier</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#profile">Passenger Carrier</a>
                </li>
            </ul>


            {/* <!-- Tab panes --> */}
            <div className="tab-content">
                <div id="home" className="container tab-pane active">
                    <div className='vehicle-content-wrapper'>
                        <div className='vehicle-content'>
                            <div className="flex-shrink-0">
                                <i className="veicle-shrink-img"></i>
                            </div>
                            <div className='flex-icon'>
                                <p className='text-title'>Starting from</p>
                                <div className='text-wrapper'>
                                    ₹
                                    <span className='digit-start'>592995</span>
                                </div>
                            </div>
                            <div className="hidden xl:block">
                                <img data-src="images/thumb-shadow.webp" alt="" width="29" height="127" className="" src="	http://35.154.31.96/creative/ms-commercial-html/images/thumb-shadow.webp" />
                            </div>
                            <div className='flex-text'></div>
                        </div>
                        <div className='vehicle-content'>
                            <div className='flex-icon'>
                                <p className='text-title'>Starting from</p>
                                <div className='text-wrapper'>
                                    ₹
                                    <span className='digit-start'>592995</span>
                                </div>
                            </div>
                            <div className="hidden xl:block">
                                <img data-src="images/thumb-shadow.webp" alt="" width="29" height="127" className="" src="	http://35.154.31.96/creative/ms-commercial-html/images/thumb-shadow.webp" />
                            </div>
                            <div className='flex-text'></div>
                        </div>
                        <div className='vehicle-content'>
                            <div className='flex-icon'>
                                <p className='text-title'>Starting from</p>
                                <div className='text-wrapper'>
                                    ₹
                                    <span className='digit-start'>592995</span>
                                </div>
                            </div>
                            <div className="hidden xl:block">
                                <img data-src="images/thumb-shadow.webp" alt="" width="29" height="127" className="" src="	http://35.154.31.96/creative/ms-commercial-html/images/thumb-shadow.webp" />
                            </div>
                            <div className='flex-text'></div>
                        </div>
                    </div>
                    <Slider {...settings}>
                        <div className='vehicle-block'>

                            <div className='vehicle-range-item'>
                                <img src='http://35.154.31.96/creative/ms-commercial-html/images/car-img.webp' />
                            </div>
                        </div>
                        <div className='vehicle-block'>
                            <div className='vehicle-range-item'>
                                <img src='http://35.154.31.96/creative/ms-commercial-html/images/car-img.webp' />
                            </div>
                        </div>
                        <div className='vehicle-block'>
                            <div className='vehicle-range-item'>
                                <img src='http://35.154.31.96/creative/ms-commercial-html/images/car-img.webp' />
                            </div>
                        </div>
                        <div className='vehicle-block'>
                            <div className='vehicle-range-item'>
                                <img src='http://35.154.31.96/creative/ms-commercial-html/images/car-img.webp' />
                            </div>
                        </div>
                    </Slider>
                </div>
                <div id="profile" className="container tab-pane fade"><br />
                    <h3>Passenger Carrier</h3>
                    <p>This is the profile tab.</p>
                </div>

            </div>
        </section>
    )
}
