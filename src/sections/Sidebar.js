import React from "react";
import { useState } from "react";
// import { useState } from 'react/cjs/react.production.min'
import { IoWalletOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { GoGoal } from "react-icons/go";
import { SideNav } from "../utils/helpers";


function Sidebar() {
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredNavSection, setHoveredNavSection] = useState([]);

  const handleMouseOver = (name) => {
    setIsHovering(true);
    setHoveredNavSection([...hoveredNavSection, {id: 1, name}])
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

 
 


  // const getAllSideNav = ()=>{
  //   return 
  // }
  return (
    <div style={style.main_sidebar}>
      <a herf="#" style={{ marginBottom: "" }}>
        <div style={{ fontSize: "30px" }}>404</div>
      </a>

      <ul style={style.main_nav_bar}>
        {SideNav.map((list)=>{
     return (<li style={style.inner_nav_bar}>
     <a
       herf=""
       style={style.tooltip}
       onMouseOver={handleMouseOver(list.name.toLowerCase())}
       onMouseOut={handleMouseOut}
     >
       {list.icon}
       {isHovering && <span style={style.tootiptext}>{list.name}</span>}
     </a>
   </li>)
   })}
        {/* <li style={style.inner_nav_bar}>
          <a
            herf=""
            style={style.tooltip}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <IoHomeOutline />
            {isHovering && <span style={style.tootiptext}>Home</span>}
          </a>
        </li>
        <li style={style.inner_nav_bar}>
          <a
            herf=""
            style={style.tooltip}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <IoWalletOutline />
            {isHovering && <span style={style.tootiptext}>Wallets</span>}
          </a>
        </li>
        <li style={style.inner_nav_bar}>
          <a
            herf=""
            style={style.tooltip}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <FaCircleDollarToSlot />

            {isHovering && <span style={style.tootiptext}>Budgets</span>}
          </a>
        </li>
        <li style={style.inner_nav_bar}>
          <a
            herf=""
            style={style.tooltip}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <GoGoal />
            {isHovering && <span style={style.tootiptext}>Goals</span>}
          </a>
        </li>
        <li style={style.inner_nav_bar}>
          <a
            herf=""
            style={style.tooltip}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Profile
            {isHovering && <span style={style.tootiptext}>Profile</span>}
          </a>
        </li>
        <li style={style.inner_nav_bar}>
          <a
            herf=""
            style={style.tooltip}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Analytics
            {isHovering && <span style={style.tootiptext}>Analytics</span>}
          </a>
        </li>
        <li style={style.inner_nav_bar}>
          <a
            herf=""
            style={style.tooltip}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Support
            {isHovering && <span style={style.tootiptext}>Support</span>}
          </a>
        </li>
        <li style={style.inner_nav_bar}>
          <a
            herf=""
            style={style.tooltip}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Affiliates
            {isHovering && <span style={style.tootiptext}>Affiliates</span>}
          </a>
        </li>
        <li style={style.inner_nav_bar}>
          <a
            herf=""
            style={style.tooltip}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Settings
            {isHovering && <span style={style.tootiptext}>Settings</span>}
          </a>
        </li> */}
      </ul>
    </div>
  );
}

const style = {
  main_sidebar: {
    height: "100%",
    padding: "13px",
    display: "flex",
    textAlign: "center",
    flexDirection: "column",
    background: "rgb(47, 44, 216)",
    color: "#fff",
    // position: "fixed"
  },

  main_nav_bar: {
    display: "flex",
    flexDirection: "column",
    marginTop: "30px",
  },

  inner_nav_bar: {
    listStyle: "none",
    // width:"80px",
    paddingBottom: "40px",
    cursor: "pointer",
    fontSize: "13px",
    fontWeight: "600",
  },

  tooltip: {
    position: "relative",
    display: "inline-block",
    cursor: "default",
  },

  tootiptext: {
    padding: "8px 15px",
    // padding: "0.25em 0.5em",
    backgroundColor: "#fff",
    color: "rgb(47, 44, 216)",
    textAlign: "center",
    alignItem: "center",
    borderRadius: "0.25em",
    whiteSpace: "nowrap",
    position: "absolute",
    left: "40px",
    top: "0",
    zIndex: "1",
    // transitionProperty: "visibility",
    transitionDelay: "0.5s",
  },
};

export default Sidebar;
