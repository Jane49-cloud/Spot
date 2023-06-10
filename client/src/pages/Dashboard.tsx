import React from "react";

interface Props {}

const Dashboard = (props: Props) => {
  return (
    <div className="m-10 dashboard">
      <h2>My Profile</h2>
      <div className="flex space-x-10">
        <div className="bg-white w-52 h-28 shadow-md p-2 mt-2 rounded">
          <p className="text-gray-500">Balance</p>
          <h1 className="mt-3">$ 0</h1>
        </div>
        <div className="bg-white w-52 h-28 shadow-md p-2 mt-2 rounded">
          <p className="text-gray-500">Balance</p>
          <h1 className="mt-3">0</h1>
        </div>
        <div className="bg-white w-52 h-28 shadow-md p-2 mt-2 rounded">
          <p className="text-gray-500">Balance</p>
          <h1 className="mt-3">0</h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
