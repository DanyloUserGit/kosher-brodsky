import Hamburger from "hamburger-react"
import { useState } from "react"
import { IconRightchevron } from "../../svg/IconRightchevron"
import { IconUk } from "../../svg/IconUk"
import { LogoIcon } from "../../svg/LogoIcon"
import { NewsIcon } from "../../svg/NewsIcon"
import { StoreIcon } from "../../svg/StoreIcon"
import { WorldIcon } from "../../svg/WorldIcon"
import { HeaderSearch } from "./HeaderSearch"
import { Flags } from "../../../types/enum"
import { IconRu } from "../../svg/IconRu"
import { IconIw } from "../../svg/IconIw"
export const HeaderTop = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenD1, setIsOpenD1] = useState(false);
    const [isOpenD2, setIsOpenD2] = useState(false);
    const [lang, setLang] = useState<Flags>(Flags.UK);

    return(
        <>
            <div className="header__top">
                <div className="header__top-logo">
                    <LogoIcon />
                </div>
                <HeaderSearch className=""/>
                <div className="header__top-links">
                    <div className="header__top-links-svg header__top-links-store">
                        <NewsIcon />
                    </div>
                    <div className="header__dropdown">
                        <div className="header__dropdown-btn" onClick={()=>setIsOpenD1(!isOpenD1)}>
                            <StoreIcon />
                            <span>
                                м. Київ, вул. Шота Руставелі 13 <br />
                                +38(063) 504-23-93
                            </span>
                            {!isOpenD1 ? <div className="chevron-down header__dropdown-btn-chevron">
                                <IconRightchevron />
                            </div> : <div className="chevron-up header__dropdown-btn-chevron">
                                <IconRightchevron />
                            </div>}
                        </div>
                        <div className={`header__dropdown-list ${!isOpenD1 ? "header__dropdown-inactive" : ""}`}>
                            <div className="header__dropdown-list-item">
                                <span>Контакти</span>
                            </div>
                            <div className="header__dropdown-list-item">
                                <span>Магазини</span>
                            </div>
                            <div className="header__dropdown-list-item">
                                <span>Доcтавка</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header__top-links">
                    <div>
                        <div className="header__dropdown-btn header__top-links-svg" onClick={()=>setIsOpenD2(!isOpenD2)}>
                            {lang === Flags.UK ? <>
                                <IconUk />
                            </> : ""}
                            {lang === Flags.RU && <>
                                <IconRu />
                            </>}
                            {lang === Flags.IW && <>
                                <IconIw />
                            </>}
                            <span>
                                {lang}
                            </span>
                            {!isOpenD2 ? <div style={{padding:"0 8px"}} className="chevron-down header__dropdown-btn-chevron header__top-links-span">
                                <IconRightchevron />
                            </div> : <div style={{padding:"0 8px"}} className="chevron-up header__dropdown-btn-chevron header__top-links-span">
                                <IconRightchevron />
                            </div>}
                        </div>
                        <div className={`header__dropdown-list header__dropdown-lang ${!isOpenD2 ? "header__dropdown-inactive" : ""}`}>
                            <div className="header__dropdown-list-item header__dropdown-list-lang" onClick={()=>setLang(Flags.UK)}>
                                <IconUk />
                                <span>{Flags.UK}</span>
                            </div>
                            <div className="header__dropdown-list-item header__dropdown-list-lang" onClick={()=>setLang(Flags.RU)}>
                                <IconRu />
                                <span>{Flags.RU}</span>
                            </div>
                            <div className="header__dropdown-list-item header__dropdown-list-lang" onClick={()=>setLang(Flags.IW)}>
                                <IconIw />
                                <span>{Flags.IW}</span>
                            </div>
                        </div>
                    </div>
                    <span className="header__top-links-link">Login</span>
                </div>
                <div className="header__top-menu">
                    <Hamburger toggled={isOpen} size={20} toggle={setIsOpen}/>
                </div>
            </div>
            <div className={`header__top-burgerMenu ${isOpen && "header__top-burgerMenu-active"}`}>
                <div className="header__burger">
                    {/* <div className="header__burger-close" onClick={()=>setIsOpen(false)} /> */}
                    <div className="header__bottom-menu f">
                <div className="header__bottom-menu-item">
                    <img src="/Images/sale.png" />
                </div>
                <div className="header__bottom-menu-item">
                    <img src="/Images/icons8-reload-50.png" />
                </div>
                <div className="header__bottom-menu-item">
                    <img src="/Images/icons8-add-document-64.png" />
                </div>
                <div className="header__bottom-menu-item">
                    <img src="/Images/icons8-delivery-64.png" />
                </div>
            </div>
                <HeaderSearch className="header__top-burgerMenu-search" />
                <div className="header__top-links f">
                    <div className="header__top-links-svg header__top-links-store r">
                        <NewsIcon />
                    </div>
                    <div className="header__dropdown">
                        <div className="header__dropdown-btn" onClick={()=>setIsOpenD1(!isOpenD1)}>
                            <StoreIcon />
                            <span>
                                м. Київ, вул. Шота Руставелі 13 <br />
                                +38(063) 504-23-93
                            </span>
                            {!isOpenD1 ? <div className="chevron-down header__dropdown-btn-chevron">
                                <IconRightchevron />
                            </div> : <div className="chevron-up header__dropdown-btn-chevron">
                                <IconRightchevron />
                            </div>}
                        </div>
                        <div className={`header__dropdown-list ${!isOpenD1 ? "header__dropdown-inactive" : ""}`}>
                            <div className="header__dropdown-list-item">
                                <span>Контакти</span>
                            </div>
                            <div className="header__dropdown-list-item">
                                <span>Магазини</span>
                            </div>
                            <div className="header__dropdown-list-item">
                                <span>Доcтавка</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header__top-links f">
                    <div className="header__dropdown">
                        <div className="header__dropdown-btn header__top-links-svg" onClick={()=>setIsOpenD2(!isOpenD2)}>
                            {lang === Flags.UK ? <>
                                <IconUk />
                            </> : ""}
                            {lang === Flags.RU && <>
                                <IconRu />
                            </>}
                            {lang === Flags.IW && <>
                                <IconIw />
                            </>}
                            <span>
                                {lang}
                            </span>
                            {!isOpenD2 ? <div style={{padding:"0 8px"}} className="chevron-down header__dropdown-btn-chevron header__top-links-span r s">
                                <IconRightchevron />
                            </div> : <div style={{padding:"0 8px"}} className="chevron-up header__dropdown-btn-chevron header__top-links-span r s">
                                <IconRightchevron />
                            </div>}
                        </div>
                        <div className={`header__dropdown-list header__dropdown-lang ${!isOpenD2 ? "header__dropdown-inactive" : ""}`}>
                            <div className="header__dropdown-list-item header__dropdown-list-lang" onClick={()=>setLang(Flags.UK)}>
                                <IconUk />
                                <span>{Flags.UK}</span>
                            </div>
                            <div className="header__dropdown-list-item header__dropdown-list-lang" onClick={()=>setLang(Flags.RU)}>
                                <IconRu />
                                <span>{Flags.RU}</span>
                            </div>
                            <div className="header__dropdown-list-item header__dropdown-list-lang" onClick={()=>setLang(Flags.IW)}>
                                <IconIw />
                                <span>{Flags.IW}</span>
                            </div>
                        </div>
                    </div>
                    <span className="header__top-links-link a">Login</span>
                    </div>
                </div>
            </div>
        </>
    )
}

