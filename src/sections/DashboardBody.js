import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import "../index.css"


function Contentbody() {
  return (
    <div className='container__dashboard'>
    <div style={style.content__body}>
        
        <div className='page__title__content'>
            <h3>Dashboard</h3>
            <p>Welcome Goodnews Finance Management</p>
        </div>
        <div style={style.breadcrumbs}>
            <span>Home</span>
            <span>
            <IoIosArrowForward style={{margin:"0 20px"}} />
            </span>
            <span>Dashboard</span>

        </div>

        </div>
        
      
    </div>
  )
}

const style = {
    content__body: {
        display:"flex",
        justifyContent:"space-between",
        alignItems: "center",
       flexWrap:"wrap"
    },

    breadcrumbs: {
        display: "flex",
        justifyContent: "center",
        color: "rgb(113, 132, 173)",
        cursor:"pointer"
    }

   

}

export default Contentbody
