import { Footer } from "../../ui/footer/Footer";
import { Header } from "../../ui/header/Header";
import { ProductDetails } from "./ProductDetails";
import { ProductItem } from "./ProductItem";
import { ProductSimilar } from "./ProductSimilar";

export const Product = () => {
    return(
        <div className="container">
            <Header />
                <div className="product">
                    <ProductItem />
                    <ProductDetails />
                    <ProductSimilar /> 
                </div>
            <Footer />
        </div>
    );
}