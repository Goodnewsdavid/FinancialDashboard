import React from "react";
import Sidebar from "./sections/Sidebar";
import Header from "./sections/Header";
import DashboardBody from "./sections/DashboardBody";
import Card from "./components/Cards/Card";
import LineChart from "./components/Dashboard/LineChart";

function App() {
  return (
    <>
      <div style={style.main_container_div}>
        
        <div style={style.inner_main_container_sidebar}>
          <Sidebar />
        </div>

        <div className="container">
          <Header />
          <DashboardBody />
          <Card />
          <LineChart/>
        </div>
      </div>
    </>
  );
}

const style = {
  main_container_div: {
    display: "flex",
    background: "#F6F9FC",
    height:"100vh",
    overflow: "auto",
    "overflow-y": "scroll"
  },

 inner_main_content : {
  height: '100%'
 }
};

export default App;
