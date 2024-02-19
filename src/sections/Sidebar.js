import React from "react";
import { useState } from "react";
import { SideNav } from "../utils/helpers";
import "../index.css";

function Sidebar() {
  const [isHovering, setIsHovering] = useState("");

  const handleMouseOver = (name) => {
    const selectedNav = name;
    setIsHovering(selectedNav);
    setTimeout(() => {
      setIsHovering("");
    }, 3000);
  };

  return (
    <div style={style.main_sidebar}>
      <a herf="#" style={{ marginBottom: "" }}>
        <div style={{ fontSize: "30px" }}>404</div>
      </a>

      <ul style={style.main_nav_bar}>
        {SideNav.map((list, index) => {
          return (
            <li
              key={index}
              style={style.inner_nav_bar}
              onMouseEnter={() => handleMouseOver(list.name.toLowerCase())}
            >
              <a herf="" style={style.tooltip}>
                {list.icon}
                {isHovering === list.name.toLowerCase() && (
                  <span style={style.tootiptext}>{list.name}</span>
                )}
              </a>
            </li>
          );
        })}
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
    padding: "25px",
    cursor: "pointer",
    // fontSize: "13px",
    fontWeight: "600",
  },

  tooltip: {
    position: "relative",
    display: "inline-block",
    cursor: "default",
    fontSize: "20px",
  },

  tootiptext: {
    padding: "8px 15px",
    fontSize: "14px",
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

    transitionDelay: "0.5s",
  },
};

export default Sidebar;
