import { IconShoping } from "../../svg/IconShoping";

export const CatalogCard = ({
    imgSrc,
    title,
    price,
}:{
    imgSrc: string,
    title: string,
    price: number,
}) => {
    return(
        <div className="catalog__content-card">
            <div className="catalog__content-card-img">
                <img src={imgSrc} alt={title} />
            </div>
            <div className="catalog__content-card-text">
                <span className="catalog__content-card-text-title">{title}</span>
                <span className="catalog__content-card-text-price">{price}₴</span>
            </div>
            <div className="catalog__content-card-add">
                <div className="catalog__content-card-add-btn">
                    <IconShoping />
                    <span className="catalog__content-card-add-btn-txt">Add</span>
                </div>
            </div>
        </div>
    );  
}