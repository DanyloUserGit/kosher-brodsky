import { MainCard } from "./MainCard";
import { MainSlider } from "./MainSlider";

export const MainSpecial = () => {
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
        <div className="main-content__special">
            <div className="main-content__special-header">
                <h2 className="main-content__special-title">
                    Сьогоднішні спеціальні пропозиції
                </h2>
                <div className="main-content__special-header-controlls">
                    <span className="main-content__special-header-controlls-link">
                        До пропозицій
                    </span>
                </div>
            </div>
            <MainSlider sliderProperties={settings} className="main-content__special-slider">
                <div className="main-content__special-slider-item">
                    <MainCard 
                        imgSrc="/Images/cardShoco.png"
                        title="ACHVA Brownie Cake пиріг брауні, 400 г"
                        price={280}
                        validDate={new Date()}
                    />
                </div>
                <div className="main-content__special-slider-item">
                    <MainCard 
                        imgSrc="/Images/cardShoco.png"
                        title="ACHVA Brownie Cake пиріг брауні, 400 г"
                        price={280}
                        validDate={new Date()}
                    />
                </div>
                <div className="main-content__special-slider-item">
                    <MainCard 
                        imgSrc="/Images/cardShoco.png"
                        title="ACHVA Brownie Cake пиріг брауні, 400 г"
                        price={280}
                        validDate={new Date()}
                    />
                </div>
                <div className="main-content__special-slider-item">
                    <MainCard 
                        imgSrc="/Images/cardShoco.png"
                        title="ACHVA Brownie Cake пиріг брауні, 400 г"
                        price={280}
                        validDate={new Date()}
                    />
                </div>
                <div className="main-content__special-slider-item">
                    <MainCard 
                        imgSrc="/Images/cardShoco.png"
                        title="ACHVA Brownie Cake пиріг брауні, 400 г"
                        price={280}
                        validDate={new Date()}
                    />
                </div>
                <div className="main-content__special-slider-item">
                    <MainCard 
                        imgSrc="/Images/cardShoco.png"
                        title="ACHVA Brownie Cake пиріг брауні, 400 г"
                        price={280}
                        validDate={new Date()}
                    />
                </div>
            </MainSlider>
            <div className="main-content__special-header">
                <h2 className="main-content__special-title">
                    Фірмові м'ясні та рибні страви з курки
                </h2>
                <div className="main-content__special-header-controlls">
                    <span className="main-content__special-header-controlls-link">
                    До пропозицій
                    </span>
                </div>
            </div>
            <MainSlider sliderProperties={settings} className="main-content__special-slider">
                <div className="main-content__special-slider-item">
                    <MainCard 
                        imgSrc="/Images/cardShoco.png"
                        title="ACHVA Brownie Cake пиріг брауні, 400 г"
                        price={280}
                        validDate={new Date()}
                    />
                </div>
                <div className="main-content__special-slider-item">
                    <MainCard 
                        imgSrc="/Images/cardShoco.png"
                        title="ACHVA Brownie Cake пиріг брауні, 400 г"
                        price={280}
                        validDate={new Date()}
                    />
                </div>
                <div className="main-content__special-slider-item">
                    <MainCard 
                        imgSrc="/Images/cardShoco.png"
                        title="ACHVA Brownie Cake пиріг брауні, 400 г"
                        price={280}
                        validDate={new Date()}
                    />
                </div>
                <div className="main-content__special-slider-item">
                    <MainCard 
                        imgSrc="/Images/cardShoco.png"
                        title="ACHVA Brownie Cake пиріг брауні, 400 г"
                        price={280}
                        validDate={new Date()}
                    />
                </div>
                <div className="main-content__special-slider-item">
                    <MainCard 
                        imgSrc="/Images/cardShoco.png"
                        title="ACHVA Brownie Cake пиріг брауні, 400 г"
                        price={280}
                        validDate={new Date()}
                    />
                </div>
                <div className="main-content__special-slider-item">
                    <MainCard 
                        imgSrc="/Images/cardShoco.png"
                        title="ACHVA Brownie Cake пиріг брауні, 400 г"
                        price={280}
                        validDate={new Date()}
                    />
                </div>
            </MainSlider>
            <div className="main-content__special-header">
                <h2 className="main-content__special-title">
                Миючі засоби 
                </h2>
                <div className="main-content__special-header-controlls">
                    <span className="main-content__special-header-controlls-link">
                    До пропозицій
                    </span>
                </div>
            </div>
            <MainSlider sliderProperties={settings} className="main-content__special-slider">
                <div className="main-content__special-slider-item">
                    <MainCard 
                        imgSrc="/Images/cardShoco.png"
                        title="ACHVA Brownie Cake пиріг брауні, 400 г"
                        price={280}
                        validDate={new Date()}
                    />
                </div>
                <div className="main-content__special-slider-item">
                    <MainCard 
                        imgSrc="/Images/cardShoco.png"
                        title="ACHVA Brownie Cake пиріг брауні, 400 г"
                        price={280}
                        validDate={new Date()}
                    />
                </div>
                <div className="main-content__special-slider-item">
                    <MainCard 
                        imgSrc="/Images/cardShoco.png"
                        title="ACHVA Brownie Cake пиріг брауні, 400 г"
                        price={280}
                        validDate={new Date()}
                    />
                </div>
                <div className="main-content__special-slider-item">
                    <MainCard 
                        imgSrc="/Images/cardShoco.png"
                        title="ACHVA Brownie Cake пиріг брауні, 400 г"
                        price={280}
                        validDate={new Date()}
                    />
                </div>
                <div className="main-content__special-slider-item">
                    <MainCard 
                        imgSrc="/Images/cardShoco.png"
                        title="ACHVA Brownie Cake пиріг брауні, 400 г"
                        price={280}
                        validDate={new Date()}
                    />
                </div>
                <div className="main-content__special-slider-item">
                    <MainCard 
                        imgSrc="/Images/cardShoco.png"
                        title="ACHVA Brownie Cake пиріг брауні, 400 г"
                        price={280}
                        validDate={new Date()}
                    />
                </div>
            </MainSlider>
        </div>
    );
}