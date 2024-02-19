import React from "react";
import "../../index.css";

function PaymentHis() {
  return (
    <div style={styles.expenses__card}>
      <div style={{ fontWeight: "600", fontSize: "20px" }}>
        Payments History
      </div>

      <div style={styles.expense__content}>
        <div style={styles.list__item}>
          <div
            style={{
              display: "block",
              marginBottom: "15px",
            }}
          >
            <p
              style={{
                fontWeight: "600",
                color: "#1f2c73",
                marginBottom: " 5px",
              }}
            >
              Electricity
            </p>
            <p style={{ color: "rgb(113, 132, 173)" }}>5 january 2024</p>
          </div>
          <div style={{ display: "block" }}>
            <p style={{ color: "rgb(113, 132, 173)" }}>+450.00</p>
            <p
              style={{
                width: "50px",
                textAlign: "center",
                color: "#fff",
                // height: "30px",
                background: "#06bb06",
                padding: " 5px 10px",
                fontSize: "13px",
                borderRadius: "50px",
                marginRight: " 7px",
                marginTop: "5px",
              }}
            >
              Paid
            </p>
          </div>
        </div>
        <div style={styles.list__item} className="border__top">
          <div
            style={{
              display: "block",
              marginBottom: "15px",
            }}
          >
            <p
              style={{
                fontWeight: "600",
                color: "#1f2c73",
                marginBottom: " 5px",
              }}
            >
              Internet
            </p>
            <p style={{ color: "rgb(113, 132, 173)" }}>5 january 2024</p>
          </div>
          <div style={{ display: "block" }}>
            <p style={{ color: "rgb(113, 132, 173)" }}>+200.00</p>
            <p
              style={{
                width: "50px",
                textAlign: "center",
                color: "#fff",
                // height: "30px",
                background: "#fba801",
                padding: " 5px 10px",
                fontSize: "13px",
                borderRadius: "50px",
                marginRight: " 7px",
                marginTop: "5px",
              }}
            >
              Due
            </p>
          </div>
        </div>
        <div style={styles.list__item} className="border__top">
          <div
            style={{
              display: "block",
              marginBottom: "15px",
            }}
          >
            <p
              style={{
                fontWeight: "600",
                color: "#1f2c73",
                marginBottom: " 5px",
              }}
            >
              Apple Music
            </p>
            <p style={{ color: "rgb(113, 132, 173)" }}>5 january 2024</p>
          </div>
          <div style={{ display: "block" }}>
            <p style={{ color: "rgb(113, 132, 173)" }}>+359.00</p>
            <p
              style={{
                width: "50px",
                textAlign: "center",
                color: "#fff",
                // height: "30px",
                background: "red",
                padding: " 5px ",
                fontSize: "13px",
                borderRadius: "50px",
                marginRight: " 7px",
                marginTop: "5px",
              }}
            >
              Cancel
            </p>
          </div>
        </div>
        <div style={styles.list__item} className="border__top">
          <div
            style={{
              display: "block",
              marginBottom: "15px",
            }}
          >
            <p
              style={{
                fontWeight: "600",
                color: "#1f2c73",
                marginBottom: " 5px",
              }}
            >
              Groceries
            </p>
            <p style={{ color: "rgb(113, 132, 173)" }}>5 january 2024</p>
          </div>
          <div style={{ display: "block" }}>
            <p style={{ color: "rgb(113, 132, 173)" }}>+390.00</p>
            <p
              style={{
                width: "50px",
                textAlign: "center",
                color: "#fff",
                background: "#06bb06",
                padding: " 5px",
                fontSize: "13px",
                borderRadius: "50px",
                marginRight: " 7px",
                marginTop: "5px",
              }}
            >
              Paid
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  expenses__card: {
    width: "360px",
    // position: relative;
    marginBottom: "30px",
    marginRight: "0 9px",
    boxShadow:
      "rgba(145, 158, 171, 0.3) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
    background: "rgb(255, 255, 255)",
    padding: "20px",
    borderRadius: "6px",
  },

  expense__content: {
    marginTop: "40px",

    width: "100%",
  },

  list__item: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
};

export default PaymentHis;
