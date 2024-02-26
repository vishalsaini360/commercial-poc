import React from 'react'
import Slider from "react-slick";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const nextArrow={
    left: "36px",
    position: "absolute"
}

const previousArrow={
    top: "112px",
    position: "absolute"
}
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className="msc-gallery__arrow" style={nextArrow}>
        <button className="msc-gallery__arrow-next slick-arrow" onClick={onClick}> &nbsp; </button>
        </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className="msc-gallery__arrow" style={previousArrow}>
        <button className="msc-gallery__arrow-prev slick-arrow" onClick={onClick}> &nbsp; </button>
        </div>
    );
  }
  
export default function demo() {
    const displayStyle = {
        maxWidth: "355px"
    };

    const sliderWidth = {
        width: "98%"
    };

    const displayBlock={
        display:"block"
    }

    

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };

    const settings2 = {
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <>
           <div className="sec-block sec-block1 sec-block1-quick-action">

<div className="sec-block2__content sec-block2__remove-space">
  <div className="quick-action__title-xs">QUICK ACTIONS</div>
  <div className="quick-action">
    <div className="quick-action-col4 quick-action-col4-mobile" id="carousel-qa">
    <Slider {...settings}>
      <div>
        <div className="quick-action-box quick-action-box__full">
          <div className="quick-action-image quick-action__full">
            <picture>
              <source media="(min-width:1200px)" srcSet="images/location.png"/>
              <source media="(max-width:767px)" srcSet="images/location-mobile.png"/>
              <img src="images/location.png" />
            </picture>
          </div>
          <div className="quick-action-content quick-action-content__full">
            <div className="quick-action-title">
              Lorem ipsum
            </div>
            <div className="quick-action-text">
              Lorem ipsum dolor sit amet dolor sit.
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="quick-action-box quick-action-box__full">
          <div className="quick-action-image quick-action__full">
            <picture>
              <source media="(min-width:1200px)" srcSet="images/calc.png"/>
              <source media="(max-width:767px)" srcSet="images/calc-mobile.png"/>
              <img src="images/calc.png" />
            </picture>
          </div>
          <div className="quick-action-content quick-action-content__full">
            <div className="quick-action-title">
              Lorem ipsum
            </div>
            <div className="quick-action-text">
              Lorem ipsum dolor sit amet dolor sit.
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="quick-action-box quick-action-box__full">
          <div className="quick-action-image quick-action__full">
            <picture>
              <source media="(min-width:1200px)" srcSet="images/whatsapp.png"/>
              <source media="(max-width:767px)" srcSet="images/whatsapp-mobile.png"/>
              <img src="images/whatsapp.png" />
            </picture>
          </div>
          <div className="quick-action-content quick-action-content__full">
            <div className="quick-action-title">
              Lorem ipsum
            </div>
            <div className="quick-action-text">
              Lorem ipsum dolor sit amet dolor sit.
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="quick-action-box quick-action-box__full">
          <div className="quick-action-image quick-action__full">
            <picture>
              <source media="(min-width:1200px)" srcSet="images/phone.png"/>
              <source media="(max-width:767px)" srcSet="images/phone-mobile.png"/>
              <img src="images/phone.png" />
            </picture>
          </div>
          <div className="quick-action-content quick-action-content__full">
            <div className="quick-action-title">
              Lorem ipsum
            </div>
            <div className="quick-action-text">
              Lorem ipsum dolor sit amet dolor sit.
            </div>
          </div>
        </div>
      </div>
</Slider>
    </div>
  </div>
</div>
</div>
        </>
    )
}
