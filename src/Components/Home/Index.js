import React from 'react'
import styles from './Home.module.css'
import VehicleRange from './VehicleRange/Index'
import Slider from "react-slick";

export default function Index() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots:true
    };
    return (
        <>
        <section className={`${styles.video_banner}`}>
            <div className={styles.banner_button_wrapper}>
                <div className={styles.banner_button}>
                    <a href="" className="" title="">
                        <button className={`btn ${styles.white_button}`} buttontype="primary">
                            Explore
                        </button>
                    </a>
                    <a href="" className="" title="">
                        <button className={`btn ${styles.white_button}`} buttontype="primary">
                        Enquire Now
                        </button>
                    </a>
                </div>
            </div>
            <Slider {...settings} arrows={false}>
                <video autoPlay loop muted className={styles.video_banner_video}>
                    <source src="https://storage-uat.marutisuzukicommercial.com/homepage-herobanner/HeroBanner1Updated.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <video autoPlay loop muted className={styles.video_banner_video}>
                    <source src="https://storage-uat.marutisuzukicommercial.com/homepage-herobanner/HeroBanner2Updated.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                
            </Slider>
            {/* <div className={styles.video_overlay}></div> */}
        </section>
        <VehicleRange/>
        </>
    )
}
