import { ReactNode } from "react";

export const HeaderDropdown = ({
        children,
        icon
    }:
    {
        children:ReactNode
        icon: ReactNode
    }) => {

    return(
        <>
            <div className="header__dropdown-btn">
                {icon}
            </div>
            <div className="header__dropdown-list">
                {children}
            </div>
        </>
    );
}