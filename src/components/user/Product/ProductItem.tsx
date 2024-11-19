import { useState } from "react";
import { useLocation } from "react-router-dom";

export const ProductItem = () => {
    const location = useLocation();
    const [count, setCount] = useState(0);
    
    const addCount = () => {
        if(count<location.state.productPresent)
            setCount((c)=>c+1)
    }
    const lessCount = () => {
        if(count>1)
            setCount((c)=>c-1)
    }

    return(
        <div className="product__item">
            <div className="product__item-category">
                Головна / {location.state.paragraph} / {location.state.category} / {location.state.subCategory} / 
                <span>{location.state.productName}</span>
            </div>
            <div className="product__item-info">
                <img src={location.state.productImg} alt={location.state.productName} />
                <div className="product__item-info-text">
                    <h2 className="product__item-info-text-title">
                        {location.state.productName}
                    </h2>
                    <span className="product__item-info-text-price">
                        {location.state.productPrice}₴
                    </span>
                    <span className="product__item-info-text-present">
                        {location.state.productPresent} у наявності 
                    </span>
                    <div className="product__item-info-text-cart">
                        <div className="product__item-info-text-cart-add">
                            <div className="product__item-info-text-cart-add-btn product__item-info-text-cart-add-btn-l"
                                onClick={addCount}
                            >
                                +
                            </div>
                            <div className="product__item-info-text-cart-add-input">
                                <input type="number" value={count} onChange={(e)=>{
                                    if(Number(e.target.value)<location.state.productPresent && Number(e.target.value)>0){
                                        setCount(Number(e.target.value))
                                    }
                                }} />
                            </div>
                            <div className="product__item-info-text-cart-add-btn product__item-info-text-cart-add-btn-r"
                                onClick={lessCount}
                            >
                                -
                            </div>
                        </div>
                        <div className="product__item-info-text-cart-btn">
                            У КОШИК
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}