import { useState } from "react";
import { IconMeat } from "../../svg/IconMeat";
import { IconSousage } from "../../svg/IconSousage";
import { IconSweets } from "../../svg/IconSweets";
import { IconFroze } from "../../svg/IconeFroze";
import { IconAdultMilk } from "../../svg/IconAdultMilk";
import { IconJuice } from "../../svg/IconJuice";
import { IconBread } from "../../svg/IconBread";
import { IconJar } from "../../svg/IconJar";
import { IconBakery } from "../../svg/IconBakery";
import { IconEaster } from "../../svg/IconEaster";
import { IconMilk } from "../../svg/IconMilk";
import { IconSea } from "../../svg/IconSea";
import { IconGlass } from "../../svg/IconGlass";
import { IconEquipment } from "../../svg/IconEquipment";
import { IconShoping } from "../../svg/IconShoping";
import { IconRightchevron } from "../../svg/IconRightchevron";
import { useNavigate } from "react-router-dom";
import { CatalogNavigation, ProductCategories, ProductCategoriesLinks } from "../../../types/enum";
import { categoryType, catList } from "../../../utils/categories";

export const HeaderBottom = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenShopping, setIsOpenShopping] = useState(false);

    const navigate = useNavigate();

    const navigateToCategory = ({
        link,
        state
    }:{
        link:string,
        state:categoryType
    }) => {
        navigate(`${link}`, {state:{...state, icon:""}})
    }

    return(
        <div className="header__bottom">
            <div className="header__bottom-start">
                <div className="header__bottom-start-btn" onClick={()=>{
                    setIsOpen(!isOpen);
                }}>
                    Каталог
                </div>
                <div className={`header__bottom-start-list ${isOpen && "header__bottom-start-list-active"}`}>
                    {catList.map((item)=>(
                        <div className="header__bottom-start-list-item" onClick={()=>
                            navigateToCategory({link:item.link,state:{...item}})}>
                            {item.icon()}
                            <span>{item.title}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="header__bottom-menu">
                <div className="header__bottom-menu-item">
                    <img src="https://danylousergit.github.io/kosher-brodsky/Images/sale.png" />
                </div>
                <div className="header__bottom-menu-item">
                    <img src="https://danylousergit.github.io/kosher-brodsky/Images/icons8-reload-50.png" />
                </div>
                <div className="header__bottom-menu-item">
                    <img src="https://danylousergit.github.io/kosher-brodsky/Images/icons8-add-document-64.png" />
                </div>
                <div className="header__bottom-menu-item">
                    <img src="https://danylousergit.github.io/kosher-brodsky/Images/icons8-delivery-64.png" />
                </div>
            </div>
            <div className="header__bottom-cart">
                <div className="header__bottom-cart-header">
                    <div className="f">
                        <div className="header__bottom-cart-img">
                            <IconShoping />
                            <div className="header__bottom-cart-img-round">0</div>
                        </div>
                        <span className="header__bottom-cart-bal">
                            0.00 грн
                        </span>
                    </div>
                    <div className="header__bottom-cart-checkout d">
                        <span>
                            Сума
                        </span>
                    </div>
                </div>
                <span className="header__bottom-cart-prev">
                    Попередні замовлення
                </span>
                <div className={`header__bottom-cart-open ${isOpenShopping && ""}`}
                    onClick={()=>setIsOpenShopping(!isOpenShopping)}
                >
                {!isOpenShopping ? <div className="chevron-down header__dropdown-btn-chevron">
                    <IconRightchevron />
                </div> : <div className="chevron-up header__dropdown-btn-chevron">
                    <IconRightchevron />
                </div>}
                </div>
                <div className={`header__bottom-cart-menu ${isOpenShopping && "act"}`}>
                    <div className="header__bottom-cart-menu-content">
                        <div className="header__bottom-cart-menu-content-box">
                            Купони для нових учасників
                        </div>
                        <div>
                            <h2 className="header__bottom-cart-menu-content-title">
                                Ваш час дорогоцінний!
                            </h2>
                            <span className="header__bottom-cart-menu-content-sub">
                                Ми підготували список товарів, які ви зазвичай купуєте
                            </span>
                            <div className="header__bottom-cart-menu-content-btn">
                                <span>
                                Додайте продукти зі списку
                                </span>
                            </div>
                        </div>
                        <div className="header__bottom-cart-menu-content-btnEnd">
                                <span className="header__bottom-cart-menu-content-btnEnd-txt">
                                    Сума
                                </span>
                            <div className="header__bottom-cart-checkout">
                                <span>
                                    0.00 грн
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}