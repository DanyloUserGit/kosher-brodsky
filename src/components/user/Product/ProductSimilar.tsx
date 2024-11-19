import { MainCard } from "../main/MainCard";
import { MainSlider } from "../main/MainSlider";

export const ProductSimilar = () => {
    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 500,
        swipeToSlide: true,
        cssEase: "linear",
        arrows:false,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                }
              },
            {
              breakpoint: 1024,
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
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    }
    return(
        <div className="product__similar">
            <div className="main-content__special-header">
                <h2 className="main-content__special-title">
                    Схожі товари
                </h2>
                <div className="main-content__special-header-controlls">
                    <span className="main-content__special-header-controlls-link">
                        
                    </span>
                </div>
            </div>
            <MainSlider sliderProperties={settings} className="main-content__special-slider">
                <div className="main-content__special-slider-item">
                    <MainCard 
                        imgSrc="Images/cardShoco.png"
                        title="ACHVA Brownie Cake пиріг брауні, 400 г"
                        price={280}
                        validDate={new Date()}
                    />
                </div>
                <div className="main-content__special-slider-item">
                    <MainCard 
                        imgSrc="Images/cardShoco.png"
                        title="ACHVA Brownie Cake пиріг брауні, 400 г"
                        price={280}
                        validDate={new Date()}
                    />
                </div>
                <div className="main-content__special-slider-item">
                    <MainCard 
                        imgSrc="Images/cardShoco.png"
                        title="ACHVA Brownie Cake пиріг брауні, 400 г"
                        price={280}
                        validDate={new Date()}
                    />
                </div>
                <div className="main-content__special-slider-item">
                    <MainCard 
                        imgSrc="Images/cardShoco.png"
                        title="ACHVA Brownie Cake пиріг брауні, 400 г"
                        price={280}
                        validDate={new Date()}
                    />
                </div>
                <div className="main-content__special-slider-item">
                    <MainCard 
                        imgSrc="Images/cardShoco.png"
                        title="ACHVA Brownie Cake пиріг брауні, 400 г"
                        price={280}
                        validDate={new Date()}
                    />
                </div>
                <div className="main-content__special-slider-item">
                    <MainCard 
                        imgSrc="Images/cardShoco.png"
                        title="ACHVA Brownie Cake пиріг брауні, 400 г"
                        price={280}
                        validDate={new Date()}
                    />
                </div>
            </MainSlider>
        </div>
    );
}