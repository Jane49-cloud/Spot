import React from "react";
import Dashboard from "../pages/Dashboard";
import UserVideos from "../pages/UserVideos";
import Statistics from "../pages/Statistics";
import Balance from "../pages/Balance";
import Subscriptions from "../pages/Subscriptions";
import Comments from "../pages/Comments";
import Referrals from "../pages/Referrals";
import Settings from "../pages/Settings";
import Help from "../pages/Help";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Sidebar from "../components/Sidebar";

interface Props {}

const Index = (props: Props) => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user-videos" element={<UserVideos />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/balance" element={<Balance />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/referrals" element={<Referrals />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </div>
    </>
  );
};

export default Index;
