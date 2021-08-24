import React, { useState } from 'react'
import "./Style.css";
import Menu from "./MenuApi";
import MenuCard from './MenuCard';
import Navbar from './Navbar';

const uniqList =[ ...new Set (Menu.map((curElem)=>{
    return curElem.category;
})),
"All"
];


const Resturant = () => {
    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqList);
    const filterItem = (category) => {

        if (category === "All"){
            setMenuData(Menu);
            return
        }
        const updatedList = Menu.filter((curElem) => {
            return curElem.category === category;
        });
        setMenuData(updatedList);
    };
    return (
        <>
           <Navbar filterItem={filterItem} menuList={menuList} />
           <MenuCard menuData={menuData} />
        </>
    )
}

export default Resturant;
