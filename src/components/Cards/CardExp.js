import React from 'react'
import { Expenses } from '../../utils/cardItem'

function CardExp() {
  return (
    <div style={styles.expenses__card}>
          <div style={{ fontWeight: "600", fontSize: "20px" }}>
            Monthly Expenses Breakdown
          </div>
          
          <div style={styles.expense__content}>
            <div style={styles.list__item}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    background: "red",
                    width: "10px",
                    height: "10px",
                    borderRadius: "50px",
                    marginRight: " 7px",
                  }}
                ></p>
                <p style={{ color: "rgb(113, 132, 173)" }}>Food</p>
              </div>
              <div>
                <span
                  style={{ marginRight: "19px", color: "rgb(113, 132, 173)" }}
                >
                  $1200
                </span>
                <span>38%</span>
              </div>
            </div>
            {Expenses.map((item, id) => {
                return(
                    <div style={styles.list__item} key={id} className="border__top">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <p
                        style={{
                          background: item.backgroundColor,
                          width: "10px",
                          height: "10px",
                          borderRadius: "50px",
                          marginRight: " 7px",
                          
                          
                        }}
                      ></p>
                      <p style={{ color: "rgb(113, 132, 173)" }}>{item.item}</p>
                    </div>
                    <div>
                      <span
                        style={{ marginRight: "19px", color: "rgb(113, 132, 173)" }}
                      >
                        {item.amount}
                      </span>
                      <span>{item.percentage}</span>
                    </div>
                  </div>
                )

            })}
          </div>

        </div>
  )
}

const styles = {
    
  expenses__card: {
    width: "360px",
    // position: relative;
    marginBottom: "30px",
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

}

export default CardExp
