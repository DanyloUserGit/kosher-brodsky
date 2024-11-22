import { ReactNode } from "react";
import Slider from "react-slick";

export const HeaderVerticalSlider = ({
    children,
    className,
}:{
    children:ReactNode,
    className:string,
}) => {
    let settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay:false,
        cssEase: "linear",
        arrows:false,
        vertical: true,
        verticalSwiping: true,
        adaptiveHeight:true,
        variableHeight:false
      };

    return(
        <Slider className={className} {...settings}>
            {children}
        </Slider>
    )
}