import ActivityChart from "./ActivityChart";
import CustomersFeedback from "./CustomersFeedback";
import DashboardWidget from "./DashboardWidget";
import Header from "./Header";
import QuickAccessMenu from "./QuickAccessMenu";
import RecentOrders from "./RecentOrders";
import Sidebar from "./Sidebar";
import StatsCard from "./StatsCard";
import TopBar from "./TopBar";

import React from 'react'


const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-900">
          <div className="container mx-auto px-6 py-8">
            {/* Other components */}
            <Header/>
            <div className="flex flex-wrap mt-6">
              <div className="w-full lg:w-8/12 pr-0 lg:pr-2">
                <ActivityChart />
              </div>
              <div className="w-full lg:w-4/12 pl-0 lg:pl-2 mt-6 lg:mt-0">
                <QuickAccessMenu />
              </div>
            </div>
            <div className="container mx-auto px-6 py-8">
            <div className="flex flex-wrap mt-6">
              <div className="w-full lg:w-8/12 pr-0 lg:pr-2">
                <RecentOrders />
              </div>
              <div className="w-full lg:w-4/12 pl-0 lg:pl-2 mt-6 lg:mt-0">
                <CustomersFeedback />
              </div>
          </div>
          </div>
          </div>
        </main>
      </div>
    </div>
  );
};
export default Dashboard;
