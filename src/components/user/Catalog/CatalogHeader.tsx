import { useState } from "react";
import { CatalogOrder } from "../../../types/enum";
import { CatalogHeaderDropDown } from "./CatalogHeaderDropDown";

export const CatalogHeader = ({
    categoryText
}:{
    categoryText: string
}) => {
    const [select, setSelect] = useState(CatalogOrder.Select);

    return(
        <div className="catalog__content-header">
            <h2 className="catalog__content-header-title">{categoryText}</h2>
            <CatalogHeaderDropDown select={select} setSelect={setSelect} />
        </div>
    );
}