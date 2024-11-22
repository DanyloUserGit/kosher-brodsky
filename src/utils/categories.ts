import { IconAdultMilk } from "../components/svg/IconAdultMilk";
import { IconBakery } from "../components/svg/IconBakery";
import { IconBread } from "../components/svg/IconBread";
import { IconFroze } from "../components/svg/IconeFroze";
import { IconEquipment } from "../components/svg/IconEquipment";
import { IconGlass } from "../components/svg/IconGlass";
import { IconJar } from "../components/svg/IconJar";
import { IconJuice } from "../components/svg/IconJuice";
import { IconMeat } from "../components/svg/IconMeat";
import { IconMilk } from "../components/svg/IconMilk";
import { IconSea } from "../components/svg/IconSea";
import { IconSousage } from "../components/svg/IconSousage";
import { IconSweets } from "../components/svg/IconSweets";
import { CatalogNavigation, ProductCategories, ProductCategoriesLinks } from "../types/enum";

export const baseLink = `/kosher-brodsky/product-category/${CatalogNavigation}`;

export type categoryType = {
    icon:() => JSX.Element,
    title:ProductCategories,
    subList:{[key: string]: string}[],
    link:string,
}
export const catList:categoryType[] = [
    {
        icon:IconMeat,
        title:ProductCategories.Meat,
        subList:[
            {"Яловичина":"яловичина"},
            {"Курятина та індичата":"курятина-та-індичата"},
            {"М'ясо та птиця":"м'ясо-та-птиця"},
            {"Песах":"песах"},
            {"Товари для сайту продмаг":"товари-для-сайту-продмаг"}
        ],
        link:`${baseLink}/${ProductCategoriesLinks.Meat}`
    },
    {
        icon:IconSousage,
        title:ProductCategories.Sausages,
        subList:[
            {"Варена копчена сиров'ялена ковбаса":"варена-копчена-сиров'ялена-ковбаса"},
            {"Ковбаси та сосиски":"ковбаси-та-сосиски"},
            {"Нарізки м'ясні та копченості":"нарізки-м'ясні-та-копченості"},
            {"Сосиски та кабаноси":"сосиски-та-кабаноси"},
            {"Товари для сайту продмаг":"товари-для-сайту-продмаг"}
        ],
        link:`${baseLink}/${ProductCategoriesLinks.Sausages}`
    },
    {
        icon:IconSweets,
        title:ProductCategories.Sweets,
        subList:[
            {"Батончики та Klik":"батончики-та-klik"},
            {"Жувальні цукерки та маршмелоу":"жувальні-цукерки-та-маршмелоу"},
            {"Цукерки та жуйки":"цукерки-та-жуйки"},
            {"Молочний та чорний шоколад":"молочний-та-чорний-шоколад"},
            {"Печиво та вафлі":"печиво-та-вафлі"},
            {"Пироги та кекси":"пироги-та-кекси"},
            {"Солодощі":"солодощі"},
            {"Товари для сайту продмаг":"товари-для-сайту-продмаг"},
            {"Халва":"халва"},
            {"Шоколадні цукерки та Рева Лешева":"шоколадні-цукерки-та-рева-лешева"},
            {"Шоколадні намазки мед та сиропи":"шоколадні-намазки-мед-та-сиропи"}
        ],
        link:`${baseLink}/${ProductCategoriesLinks.Sweets}`
    },
    {
        icon:IconFroze,
        title:ProductCategories.Freeze,
        subList:[
            {"Заморожування":"заморожування"},
            {"Пельмені вареники та бургер":"пельмені-вареники-та-бургер"},
            {"Сирки та морозиво":"сирки-та-морозиво"},
            {"Тісто бурекас та соєві продукти":"тісто-бурекас-та-соєві-продукти"},
            {"Товари для сайту продмаг":"товари-для-сайту-продмаг"}
        ],
        link:`${baseLink}/${ProductCategoriesLinks.Freeze}`
    },
    {
        icon:IconAdultMilk,
        title:ProductCategories.Milk,
        subList:[
            {"Йогурти десерти та котедж":"йогурти-десерти-та-котедж"},
            {"Молоко та молочні продукти":"молоко-та-молочні-продукти"},
            {"Молочна продукція":"молочна-продукція"},
            {"М'які сири":"м'які-сири"},
            {"Плавлений сир намазки та соєві продукти":"плавлений-сир-намазки-та- соєві-продукти"},
            {"Тверді сири":"тверді-сири"},
            {"Товари для сайту продмаг":"товари-для-сайту-продмаг"},
        ],
        link:`${baseLink}/${ProductCategoriesLinks.Milk}`
    },
    {
        icon:IconJuice,
        title:ProductCategories.Drinks,
        subList:[
            {"Алкоголь": "алкоголь"},
            {"Напої": "напої"},
            {"Напої та виноградний сік": "напої-та-виноградний-сік"},
            {"Товари для сайту продмаг": "товари-для-сайту-продмаг"}
        ],
        link:`${baseLink}/${ProductCategoriesLinks.Drinks}`
    },
    {
        icon:IconBread,
        title:ProductCategories.Bread,
        subList:[
            {"Крекери хлібці та прецель": "крекери-хлібці-та-прецель"},
            {"Свіжа випічка та хали": "свіжа-випічка-та-хали"},
            {"Товари для сайту продмаг": "товари-для-сайту-продмаг"},
            {"Хліб": "хліб"}
        ],
        link:`${baseLink}/${ProductCategoriesLinks.Bread}`
    },
    {
        icon:IconJar,
        title:ProductCategories.Jars,
        subList:[
            {"Бакалія": "бакалія"},
            {"Все для суші та для випічки": "все-для-суші-та-для-випічки"},
            {"Крупи локшина та панірувальні сухарі": "крупи-локшина-та-панірувальні-сухарі"},
            {"Майонез соуси масло та оцет": "майонез- соуси-масло-та-оцет"},
            {"Спеції порошки для супу": "спеції-порошки-для-супу"},
            {"Сухі сніданки": "сухі-сніданки"},
            {"Товари для сайту продмаг": "товари-для-сайту-продмаг"}
        ],
        link:`${baseLink}/${ProductCategoriesLinks.Jars}`
    },
    {
        icon:IconBakery,
        title:ProductCategories.Snacks,
        subList:[
            {"Бамба бісслі чіпси та дорітос": "бамба-бісслі-чіпси-та-дорітос"},
            {"Горіхи та насіння": "горіхи-та-насіння"},
            {"Снеки": "снеки"},
            {"Товари для сайту продмаг": "товари-для-сайту-продмаг"}
        ],
        link:`${baseLink}/${ProductCategoriesLinks.Snacks}`
    },
    {
        icon:IconJar,
        title:ProductCategories.Cans,
        subList:[
            {"Консерви": "консерви"},
            {"Оливки та овочеві консерви": "оливки-та-овочеві-консерви"},
            {"Рибні консерви та м'ясні паштети": "рибні-консерви-та-м'ясні-паштети"},
            {"Товари для сайту продмаг": "товари-для-сайту-продмаг"}
        ],
        link:`${baseLink}/${ProductCategoriesLinks.Cans}`
    },
    {
        icon:IconMilk,
        title:ProductCategories.ChildFood,
        subList:[
            {"Дитяче харчування": "дитяче-харчування"},
            {"Товари для сайту продмаг": "товари-для-сайту-продмаг"}
        ],
        link:`${baseLink}/${ProductCategoriesLinks.ChildFood}`
    },
    {
        icon:IconSea,
        title:ProductCategories.SeaFood,
        subList:[
            {"Рибна продукція": "рибна-продукція"},
            {"Товари для сайту продмаг": "товари-для-сайту-продмаг"}
        ],
        link:`${baseLink}/${ProductCategoriesLinks.SeaFood}`
    },
    {
        icon:IconGlass,
        title:ProductCategories.CoffeeAndTea,
        subList:[
            {"Товари для сайту продмаг": "товари-для-сайту-продмаг"},
            {"Чай кави какао": "чай-кави-какао"}
        ],
        link:`${baseLink}/${ProductCategoriesLinks.CoffeeAndTea}`
    },
    {
        icon:IconEquipment,
        title:ProductCategories.House,
        subList:[
            {"Все для дому та свічки":"все-для-дому-та-свічки"},
            {"Товари для сайту продмаг":"товари-для-сайту-продмаг"},
            {"Хімія":"хімія"},
        ],
        link:`${baseLink}/${ProductCategoriesLinks.House}`
    },
]
