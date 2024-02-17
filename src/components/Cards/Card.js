import React from 'react'
import "../../index.css"

function Card() {
  return (
    <div className='container_card'>
        <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center", alignItems:"center", gap:"25px" }}>
        <div style={style.card}>
        <div>Total Balance</div>
        <div style={style.amount}>$ 432568</div>
        <p style={style.months}>2.47% Last month $24,478</p>

        </div>
        <div style={style.card}>
        <div>Total Balance</div>
        <div style={style.amount}>$ 432568</div>
        <p style={style.months}>2.47% Last month $24,478</p>

        </div>
        <div style={style.card}>
        <div>Total Balance</div>
        <div style={style.amount}>$ 432568</div>
        <p style={style.months}>2.47% Last month $24,478</p>

        </div>
        <div style={style.card}>
        <div>Total Balance</div>
        <div style={style.amount}>$ 432568</div>
        <p style={style.months}>2.47% Last month $24,478</p>

        </div>
        </div>
    </div>
  )
}

const style = {
    card:{
        width:"250px",
        height:"150px",
        // position: relative;
        marginBottom: "30px",
        boxShadow: "rgba(145, 158, 171, 0.3) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
        background: "rgb(255, 255, 255)",
        padding: "20px",
        borderRadius: "6px",
        
        
    },
    amount: {
        fontSize: "28px",
    margin: "20px 0px"
    },

    months: {
        paddingTop: "10px",
        color: "rgb(113, 132, 173)",
        fontSize: "14px",
        fontWeight: "400",
        marginBottom: 0,
        borderTop: "1px solid rgb(229, 234, 239)"
    }
}

export default Card
