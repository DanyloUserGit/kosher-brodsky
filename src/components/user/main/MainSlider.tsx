import { ReactNode } from "react";
import Slider from "react-slick";

export const MainSlider = ({
    children,
    className,
    sliderProperties
}:{
    children:ReactNode,
    className:string,
    sliderProperties?:{}
}) => {
    let settings = sliderProperties || {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay:true,
        autoplaySpeed: 5000,
        cssEase: "linear",
        arrows:false
      };
      return (
        <Slider className={className} {...settings}>
            {children}
        </Slider>
      );
}