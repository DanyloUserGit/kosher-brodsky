import { MainSlider } from "./MainSlider"
import { MainSpecial } from "./MainSpecial"

export const MainContent = () => {
    return(
        <div className="main-content">
            <MainSlider className="main-content__slider">
                <div className="main-content__slider-item">
                    <img src="Images/2024-10-30T08_35_32.jpg" />
                </div>
                <div className="main-content__slider-item">
                    <img src="Images/2024-03-07T13_54_24.jpg" />
                </div>
            </MainSlider>
            <MainSpecial />
        </div>
    )
}