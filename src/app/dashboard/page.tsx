import React from "react";
import SideBar from "../component/SideBar";
import Header from "../component/Header";
import Feature from "../component/Feature";
import Filter from "../component/filter";



function Dashboard() {
  return (
    <div className="h-screen">
      <div className="grid bg-[#fbfbfb] grid-cols-12">
        <div className=" sm:col-span-3 md:col-span-3 lg:col-span-2 hidden sm:block">
          <SideBar />
        </div>
        <div className="col-span-12 sm:col-span-9 md:col-span-9 lg:col-span-10">
          <Header />
          <Feature/>
          <Filter/>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
