import { useState } from "react";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export const HeaderSearch = ({
    className
}:{
    className:string
}) => {
    const [search, setSearch] = useState("");

    return(
        <div className={`header__search ${className}`}>
            <input 
                className="header__search-input"
                placeholder="Пошук"
                type="text"
                onChange={(e)=>setSearch(e.target.value)}
                value={search}
            />
            <SearchOutlinedIcon  />
        </div>
    );
}