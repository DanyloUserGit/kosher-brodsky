import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

export const MainCard = ({
    imgSrc,
    title,
    price,
    validDate
}:{
    imgSrc:string,
    title:string,
    price:number,
    validDate?:Date
}) => {
    const navigate = useNavigate();

    const toProductPage = () => {
        navigate('/kosher-brodsky/product', {state:{
            paragraph: "Всі товари",
            category: "Солодощі",
            subCategory: "Пироги та кекси",
            productName: title,
            productImg: imgSrc,
            productPrice: price,
            productPresent: 8,
        }})
    }

    return(
        <div className="main-content__special-card">
            <div className="main-content__special-card-content">
                <img src={imgSrc} />
                <div className="main-content__special-card-content-desc" onClick={toProductPage}>
                    <div className="main-content__special-card-content-desc-btn">
                        Лише {price}₴
                    </div>
                    <span className="main-content__special-card-content-desc-title">
                        {title} <br />
                    </span>
                    {validDate && 
                        <>
                            <span className="main-content__special-card-content-desc-sub">
                                Діє до {dayjs(validDate).format("DD.MM.YYYY")}
                            </span>
                        </>
                    }
                </div>
            </div>
        </div>
    );
}