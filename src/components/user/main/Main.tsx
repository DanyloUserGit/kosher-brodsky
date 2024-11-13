import { Footer } from "../../ui/footer/Footer";
import { Header } from "../../ui/header/Header";
import { MainContent } from "./MainContent";

export const Main = () => {

    return(
        <>
            <div className="container">
                <Header />
                <MainContent />
                <Footer />
            </div>
        </>
    );
}