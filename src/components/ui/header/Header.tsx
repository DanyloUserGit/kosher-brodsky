import { HeaderBottom } from "./HeaderBottom";
import { HeaderTop } from "./HeaderTop";

export const Header = () => {
    
    return(
        <div className="header">
            <HeaderTop />
            <HeaderBottom />
        </div>
    );
}