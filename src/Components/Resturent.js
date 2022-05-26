import React from "react";
import MenuAPI from "./MenuAPI";
import MenuCard from "./MenuCard";
import "./Style.css";
import Navbar from "./Navbar";

const uniqeList = [
  ...new Set(
    MenuAPI.map((curElm) => {
      return curElm.category;
    })
  ),
  "All",
];

const Resturent = () => {
  const [menuData, setMenuData] = React.useState(MenuAPI);
  const [menuList, setMenuList] = React.useState(uniqeList);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(MenuAPI);
      return;
    }

    const updateList = MenuAPI.filter((curElm) => {
      return curElm.category === category;
    });
    setMenuData(updateList);
  };

  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Resturent;
