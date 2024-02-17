import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      fill:'end',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      fill:'end',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};



 function LineChart() {
  return (
    <div style={styles.flex__wrap}>
    <div style={styles.line_container}>
           <Line options={options} data={data} />
    </div>

    <div>

    <div style={styles.expenses__card }>
        <div style={{fontWeight:"600", fontSize:"20px"}}>Monthly Expenses Breakdown</div>
        <div style={styles.expense__content}>
            <div style={styles.list__item}>
                <div style={{display:"flex",  justifyContent:"center", alignItems:"center",}}>
                  <p style={{background:"red", width:"10px", height:"10px", borderRadius:"50px", marginRight:" 7px"}}></p>
                    <p style={{color:"rgb(113, 132, 173)"}}>Food</p>
                </div>
                <div>
                    <span style={{marginRight:"19px", color:"rgb(113, 132, 173)"}}>$1200</span>
                    <span>38%</span>
                </div>
                
            </div>
            <div style={styles.list__item} className='border__top'>
            <div style={{display:"flex",  justifyContent:"center", alignItems:"center",}}>
                  <p style={{background:"red", width:"10px", height:"10px", borderRadius:"50px", marginRight:" 7px"}}></p>
                    <p style={{color:"rgb(113, 132, 173)"}}>Food</p>
                </div>
                <div>
                    <span style={{marginRight:"19px", color:"rgb(113, 132, 173)"}}>$1200</span>
                    <span>38%</span>
                </div>
                
            </div>
            <div style={styles.list__item} className='border__top'>
            <div style={{display:"flex",  justifyContent:"center", alignItems:"center",}}>
                  <p style={{background:"red", width:"10px", height:"10px", borderRadius:"50px", marginRight:" 7px"}}></p>
                    <p style={{color:"rgb(113, 132, 173)"}}>Food</p>
                </div>
                <div>
                    <span style={{marginRight:"19px", color:"rgb(113, 132, 173)"}}>$1200</span>
                    <span>38%</span>
                </div>
                
            </div>
            <div style={styles.list__item} className='border__top'>
            <div style={{display:"flex",  justifyContent:"center", alignItems:"center",}}>
                  <p style={{background:"red", width:"10px", height:"10px", borderRadius:"50px", marginRight:" 7px"}}></p>
                    <p style={{color:"rgb(113, 132, 173)"}}>Food</p>
                </div>
                <div>
                    <span style={{marginRight:"19px", color:"rgb(113, 132, 173)"}}>$1200</span>
                    <span>38%</span>
                </div>
                
            </div>
            <div style={styles.list__item} className='border__top'>
            <div style={{display:"flex",  justifyContent:"center", alignItems:"center",}}>
                  <p style={{background:"red", width:"10px", height:"10px", borderRadius:"50px", marginRight:" 7px"}}></p>
                    <p style={{color:"rgb(113, 132, 173)"}}>Food</p>
                </div>
                <div>
                    <span style={{marginRight:"19px", color:"rgb(113, 132, 173)"}}>$1200</span>
                    <span>38%</span>
                </div>
                
            </div>
            <div style={styles.list__item} className='border__top'>
            <div style={{display:"flex",  justifyContent:"center", alignItems:"center",}}>
                  <p style={{background:"red", width:"10px", height:"10px", borderRadius:"50px", marginRight:" 7px"}}></p>
                    <p style={{color:"rgb(113, 132, 173)"}}>Food</p>
                </div>
                <div>
                    <span style={{marginRight:"19px", color:"rgb(113, 132, 173)"}}>$1200</span>
                    <span>38%</span>
                </div>
                
            </div>
            <div style={styles.list__item} className='border__top'>
            <div style={{display:"flex",  justifyContent:"center", alignItems:"center",}}>
                  <p style={{background:"red", width:"10px", height:"10px", borderRadius:"50px", marginRight:" 7px"}}></p>
                    <p style={{color:"rgb(113, 132, 173)"}}>Food</p>
                </div>
                <div>
                    <span style={{marginRight:"19px", color:"rgb(113, 132, 173)"}}>$1200</span>
                    <span>38%</span>
                </div>
                
            </div>

        </div>
        
        {/* <div style={styles.amount}>$ 432568</div> */}
        {/* <p style={styles.months}>2.47% Last month $24,478</p> */}

        </div>

    </div>
    </div>
   
   
  )
}


const styles = {
    flex__wrap: {
        display: "flex",
        flexWrap: "wrap",

    },
    line_container: {
        width: "65%",
        "height": "100%",
        
    },

    expenses__card:{
        width:"360px",
        height:"100%",
        // position: relative;
        marginBottom: "30px",
        boxShadow: "rgba(145, 158, 171, 0.3) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
        background: "rgb(255, 255, 255)",
        padding: "20px",
        borderRadius: "6px",
        
        
    },

    expense__content: {
        marginTop: "40px",
       
        width:"100%"

    }, 

    list__item : {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
      
    },


    // months: {
    //     paddingTop: "10px",
    //     color: "rgb(113, 132, 173)",
    //     fontSize: "14px",
    //     fontWeight: "400",
    //     marginBottom: 0,
    //     borderTop: "1px solid rgb(229, 234, 239)"
    // }
}


export default LineChart;