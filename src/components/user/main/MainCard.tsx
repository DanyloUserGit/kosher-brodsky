import dayjs from "dayjs";

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
    return(
        <div className="main-content__special-card">
            <div className="main-content__special-card-content">
                <img src={imgSrc} />
                <div className="main-content__special-card-content-desc">
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