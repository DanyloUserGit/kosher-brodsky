import { useLocation } from "react-router-dom";
import { ProductDetailsMenu } from "./ProductDetailsMenu";
import { useState } from "react";
import { ProductDetail } from "../../../types/enum";
import { ProductPayment } from "./ProductPayment";

export const ProductDetails = () => {
    const location = useLocation();
    const [currentDetail, setCurrentDetail] = useState<ProductDetail>(ProductDetail.DESC);

    return(
        <div className="product__details">
            <ProductDetailsMenu>
                <span className={`product__details-menu-item 
                ${currentDetail === ProductDetail.DESC && "product__details-menu-item-active"}`}
                    onClick={()=>setCurrentDetail(ProductDetail.DESC)}
                >
                    Опис
                </span>
                <span className={`product__details-menu-item 
                ${currentDetail === ProductDetail.DET && "product__details-menu-item-active"}`}
                    onClick={()=>setCurrentDetail(ProductDetail.DET)}
                >
                    Деталі
                </span>
                <span className={`product__details-menu-item 
                ${currentDetail === ProductDetail.PAYMENT && "product__details-menu-item-active"}`}
                    onClick={()=>setCurrentDetail(ProductDetail.PAYMENT)}
                >
                    Оплата та доставка
                </span>
            </ProductDetailsMenu>
            <div className="product__details-item">
                {currentDetail === ProductDetail.DESC && <span className="product__details-item-name">{location.state.productName}</span>}
                {currentDetail === ProductDetail.DET && 
                    <div className="product__details-item-det">
                        <div className="product__details-item-det-el product__details-item-det-el-b">
                            <b>Песах</b>
                            <span>Так</span>
                        </div>
                        <div className="product__details-item-det-el">
                            <b>Наявність</b>
                            <span>В наявності</span>
                        </div>
                    </div>  
                }
                {currentDetail === ProductDetail.PAYMENT && <ProductPayment />}
            </div>
        </div>
    );
}