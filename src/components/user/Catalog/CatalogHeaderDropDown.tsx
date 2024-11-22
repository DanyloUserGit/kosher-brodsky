import { useState } from "react"
import { CatalogOrder } from "../../../types/enum"
import { IconRightchevron } from "../../svg/IconRightchevron"

export const CatalogHeaderDropDown = ({
    select,
    setSelect
}:{
    select:CatalogOrder,
    setSelect:(s: CatalogOrder) => void
}) => {

    const [isOpen, setIsOpen] = useState(false);
    const list = Object.values(CatalogOrder);

    return(
        <div className="catalog__content-header-dropdown">
            <div className="catalog__content-header-dropdown-btn"
                onClick={()=>setIsOpen(!isOpen)}
            >
                <span>
                    Сортування: <b>{select}</b>
                </span>
                {!isOpen ? <div className="chevron-down catalog__content-header-dropdown-btn-svg">
                    <IconRightchevron />
                </div> : <div className="chevron-up catalog__content-header-dropdown-btn-svg">
                    <IconRightchevron />
                </div>}
            </div>
            {isOpen && 
                <div className="catalog__content-header-dropdown-list">
                    {list.slice(1, list.length).map((item)=>(
                        <div className="catalog__content-header-dropdown-list-item" onClick={()=>setSelect(item)}>{item}</div>
                    ))}
                </div>
            }
        </div>
    )
}