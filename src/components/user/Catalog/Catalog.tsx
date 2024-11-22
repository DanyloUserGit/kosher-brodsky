import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Footer } from "../../ui/footer/Footer";
import { Header } from "../../ui/header/Header";
import { CatalogContent } from "./CatalogContent";
import { CatalogNav } from "./CatalogNav";

export const Catalog = () => {
    const location = useLocation();
    const {title, subList, link} = location.state;


    return(
        <div className="container-catalog">
            <Header />
                <div className="catalog">
                    <CatalogNav link={link} categoryList={subList} />
                    <CatalogContent  link={link} categoryText={title} />
                </div>
            <Footer />
        </div>
    );
}