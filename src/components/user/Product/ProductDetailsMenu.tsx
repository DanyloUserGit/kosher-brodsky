import { ReactNode } from "react";
import Slider from "react-slick";

export const ProductDetailsMenu = ({
    children,
    sliderProperties
}:{
    children:ReactNode,
    sliderProperties?:{}
}) => {
    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        swipeToSlide: true,
        cssEase: "linear",
        arrows:false,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                }
              },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            // {
            //   breakpoint: 480,
            //   settings: {
            //     slidesToShow: 1,
            //     slidesToScroll: 1
            //   }
            // }
          ]
      };
      return (
        <Slider className="product__details-menu" {...settings}>
            {children}
        </Slider>
      );
}