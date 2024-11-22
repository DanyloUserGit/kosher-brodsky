import { ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IconSea } from "../../svg/IconSea";
export const el:{icon:ReactNode} = {icon:<IconSea />}
export const CatalogNav = ({
    categoryList,
    link
}:{
    categoryList: {[key: string]: string}[],
    link:string
}) => {
    const navigate = useNavigate();
    const location = useLocation();

    return(
        <div className="catalog__nav">
            <span className="catalog__nav-title">Категорії товарів</span>
            <div className="catalog__nav-list">
                {categoryList.map((item, index)=>(
                    <span className="catalog__nav-list-item" 
                        onClick={()=>navigate(`${link}/${categoryList[index][Object.keys(categoryList[index])[0]]}`,
                         {state:{...location.state}})}
                    >{Object.keys(categoryList[index])[0]}</span>
                ))}
            </div>
        </div>
    );
}