import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import styled from 'styled-components';

const ImgSlider = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };


    return (
        <Carousel {...settings}>
            <Wrap>
                <img src="/images/slider-badag.jpg" alt="badging" />
            </Wrap>
            <Wrap>
                <img src="/images/slider-badging.jpg" alt="badging" />
            </Wrap>
            <Wrap>
                <img src="/images/slider-scale.jpg" alt="badging" />
            </Wrap>
            <Wrap>
                <img src="/images/slider-scales.jpg" alt="badging" />
            </Wrap>

        </Carousel>
    )
}

export default ImgSlider;

const Carousel = styled(Slider)`
    margin-top:6rem;

    ul li button {
        &:before {
            font-size: 0.625rem;
            color:rgb(150, 158, 171);
        }
    }


    li.slick-active button::before {
        color:#fff;
    }
    .slick-list{
        overflow: visible;
    }

    button {
        z-index: 1;
    }
`

const Wrap = styled.div`
    cursor: pointer;
    img {
        border: 0.25rem solid transparent;
        border-radius:0.25rem;
        width:100%;
        height:100%;
        box-shadow: rgb(0 0 0 / 69%) 0 1.625rem 1.875rem -0.625rem, rgb(0 0 0 / 73%) 0 1rem 0.625rem -0.625rem;
        transition-duration: 300ms;

        &:hover{
            border: 0.25rem solid rgba(249,249,249,0.8);
        }
    }
`