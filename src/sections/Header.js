import React from "react";
import "../index.css";
import { FaSearch } from "react-icons/fa";
import { RiUserLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";

function Header() {
  return (
    <div style={style.header__content}>
      <div style={style.header__left}>
        <input name="" placeholder="Search Here" style={style.input} />
        <span style={style.searchIcon}>
          <FaSearch />
        </span>
      </div>
      <div style={style.header__right}>
        <span style={{ cursor:"pointer", marginRight: "20px", paddingTop:"10px", color:"rgb(113, 132, 173)", fontSize:"24px" }}>
          <FiBell />
        </span>
        <span
          style={{
            height: "40px",
            width: "40px",
            borderRadius: "50%",
            background: "rgb(47, 44, 216)",
          }}
        >
          <RiUserLine style={style.userIcon} />
        </span>
      </div>
    </div>
  );
}

const style = {
  header__content: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    alignItem: "center",
    padding: "0 30px",
    position: "fixed",
    top: "0px",
    left: "120px",
    right: "89px",
    zIndex: "2",
    padding: "20px 0px",
  },

  header__left: {
    position: "relative",
    display: "flex",
    flexWrap: "wrap",
    // alignIitems: "stretch",
    // width: "100%",
  },

  input: {
    // height:"45px",
    width: "400px",
    padding: "10px 22px",
    fontSize: "14px",
    height: "45px",
    color: "rgb(15, 23, 42)",
    borderRadius: "5px",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "rgb(229, 234, 239)",
    background: "rgb(255, 255, 255)",
    // fontWeight: "600",
  },

  searchIcon: {
    color: "rgb(255, 255, 255)",
    height: "45px",
    marginBottom: "0px !important",
    padding: "11px 15px",
    background: "rgb(47, 44, 216)",
    borderColor: "rgb(229, 234, 239)",
    display: "flex",
    position: "absolute",
    left: "390px",
    cursor: "pointer",
    alignItems: "center",
    fontSize: " 20px",
    lineHeight: "1.6",
    borderTopRightRadius: "6px",
    borderBottomRightRadius: "6px",
    // borderBottomRightRadius: "6px",
    // background: rgb(47, 44, 216);
  },

  header__right: {
    // width:"100px",
    // height:"200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // justifyContent: "space-between"
  },

  userIcon: {
    fontSize: "20px",
    color: "#fff",
    width: "100%",
    position: "relative",
    top: "10px",
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
    cursor:"pointer"
  },
};

export default Header;
