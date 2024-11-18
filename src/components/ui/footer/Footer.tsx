import { EmailInput } from "../../svg/EmailInput";
import { LocationIcon } from "../../svg/LocationIcon";
import { LogoIconFooter } from "../../svg/LogoIconFooter";
import { PhoneIcon } from "../../svg/PhoneIcon";
import { StoreIcon } from "../../svg/StoreIcon";
import { FooterMin } from "./FooterMin";

export const Footer = () => {

    return(
        <div className="footer">
            <div className="footer__content">
                <div className="footer__logo-block">
                    <LogoIconFooter />
                    <div className="footer__logo-block-drpdwn">
                        <div className="header__dropdown-btn">
                            <StoreIcon fill="#fff"/>
                            <span>
                                м. Київ, вул. Шота Руставелі 13 <br />
                                +38(063) 504-23-93
                            </span>
                        </div>
                    </div>
                </div>
                <div className="footer__menu">
                    <h2 className="footer__menu-title">Карта сайту</h2>
                    <ul>
                        <li>Головна</li>
                        <li>Про нас</li>
                        <li>Контакти</li>
                        <li>Умови повернення</li>
                        <li>Новини</li>
                        <li>Обліковий запис</li>
                    </ul>
                </div>
                <div className="footer__menu">
                    <h2 className="footer__menu-title">Контакти</h2>
                    <ul>
                        <li className="footer__menu-element">
                            <PhoneIcon />
                            <div className="footer__menu-element-text">
                                <b>+38(063) 504 23 93</b>
                                Зв'яжіться з нами
                            </div>
                        </li>
                        <li className="footer__menu-element">
                            <EmailInput />
                            <div className="footer__menu-element-text">
                                <b>kosherbrodskycom@gmail.com</b>
                                Напишіть нам
                            </div>
                        </li>
                        <li className="footer__menu-element">
                            <LocationIcon />
                            <div className="footer__menu-element-text">
                                <b>м. Київ, вул. Шота Руставелі 13</b> <br />
                                Час роботи ПН-ПТ: 09:00–20:00; <br /> СБ: Вихідний <br />Нд: 10:00 – 17:00
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <FooterMin />
        </div>
    );
}