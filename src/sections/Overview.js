import React from "react";
import "../index.css";

function Overview() {
  return (
    <div className="container_card">
      <div
        className="inner__container__card class_flex_justify"
        style={{ display: "flex", flexWrap: "wrap", gap: "18px" }}
      >
        <div style={style.card}>
          <div style={{ color: "color: #1f2c73" }}>Total Balance</div>
          <div style={style.amount}>$ 432568</div>
          <p style={style.months}>2.47% Last month $24,478</p>
        </div>
        <div style={style.card}>
          <div>Total Period Change</div>
          <div style={style.amount}>$ 245860</div>
          <p style={style.months}>2.47% Last month $24,478</p>
        </div>
        <div style={style.card}>
          <div>Total Period Expenses</div>
          <div style={style.amount}>$ 25.35</div>
          <p style={style.months}>2.47% Last month $24,478</p>
        </div>
        <div style={style.card}>
          <div>Total Period Income</div>
          <div style={style.amount}>$ 22.56</div>
          <p style={style.months}>2.47% Last month $24,478</p>
        </div>
      </div>
    </div>
  );
}

const style = {
  card: {
    width: "240px",
    height: "150px",
    // position: relative;
    marginBottom: "30px",
    boxShadow:
      "rgba(145, 158, 171, 0.3) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
    background: "rgb(255, 255, 255)",
    padding: "20px",
    borderRadius: "6px",
  },
  amount: {
    fontSize: "28px",
    margin: "20px 0px",
    fontWeight: "600",
    color: "#1f2c73",
  },

  months: {
    paddingTop: "10px",
    color: "rgb(113, 132, 173)",
    fontSize: "14px",
    fontWeight: "400",
    marginBottom: 0,
    borderTop: "1px solid rgb(229, 234, 239)",
  },
};
export default Overview;
