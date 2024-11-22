import { Route, Routes } from "react-router-dom";
import { CatalogCard } from "./CatalogCard";
import { CatalogHeader } from "./CatalogHeader";

export const CatalogContent = ({
    categoryText,
    link,
}:{
    categoryText: string,
    link:string,
}) => {
    return(
        <div className="catalog__content">
            <CatalogHeader categoryText={categoryText}/>
            <div className="catalog__content-container">
                {[...Array(45)].map((it)=>(
                    <CatalogCard 
                        imgSrc="https://kosher-brodsky.com.ua/wp-content/uploads/2022/05/72f181a7985b11ebba86666164313664_68e8e92cd76e11ecac27a4bb6d6481fa-150x150.png"
                        title="ACHVA Brownie Cake пиріг брауні, 400 г"
                        price={280}
                    />
                ))}
            </div>
        </div>
    );
}