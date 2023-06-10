import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Balance,
  BarChart,
  CommentSharp,
  Dashboard,
  Help,
  People,
  PlayCircle,
  Search,
  Settings,
  Subscriptions,
  Wallet,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import TextField from "@mui/material/TextField";

interface Props {}

const Sidebar = (props: Props) => {
  const location = useLocation();

  return (
    <div className="bg-white h-auto w-80 mt-10 ml-3 rounded">
      <NavLink
        to="/dashboard"
        className={`h-20 flex items-center pl-4 rounded-t ${
          location.pathname === "/dashboard" ? "bg-primary-500" : ""
        }`}
        activeStyle={{ color: "white" }}
      >
        <Dashboard
          style={{
            color: location.pathname === "/dashboard" ? "white" : "red",
          }}
        />
        <span
          className={`ml-2 font-bold ${
            location.pathname === "/dashboard" ? "text-white" : ""
          }`}
        >
          Dashboard
        </span>
      </NavLink>
      <hr className="border-gray-300" />
      <NavLink
        to="/uservideos"
        className={`h-20 flex items-center pl-4 ${
          location.pathname === "/uservideos" ? "bg-primary-500" : ""
        }`}
        activeStyle={{ color: "white" }}
      >
        <PlayCircle
          style={{
            color: location.pathname === "/uservideos" ? "white" : "red",
          }}
        />
        <span
          className={`ml-2 font-bold ${
            location.pathname === "/uservideos" ? "text-white" : ""
          }`}
        >
          User Videos
        </span>
      </NavLink>
      <hr className="border-gray-300" />
      <NavLink
        to="/statistics"
        className={`h-20 flex items-center pl-4 ${
          location.pathname === "/statistics" ? "bg-primary-500" : ""
        }`}
        activeStyle={{ color: "white" }}
      >
        <BarChart
          style={{
            color: location.pathname === "/statistics" ? "white" : "red",
          }}
        />
        <span
          className={`ml-2 font-bold ${
            location.pathname === "/statistics" ? "text-white" : ""
          }`}
        >
          Statistics
        </span>
      </NavLink>
      <hr className="border-gray-300" />
      <NavLink
        to="/balance"
        className={`h-20 flex items-center pl-4 ${
          location.pathname === "/balance" ? "bg-primary-500" : ""
        }`}
        activeStyle={{ color: "white" }}
      >
        <Wallet
          style={{
            color: location.pathname === "/balance" ? "white" : "red",
          }}
        />
        <span
          className={`ml-2 font-bold ${
            location.pathname === "/balance" ? "text-white" : ""
          }`}
        >
          Balance
        </span>
      </NavLink>
      <hr className="border-gray-300" />
      <NavLink
        to="/subscriptions"
        className={`h-20 flex items-center pl-4 ${
          location.pathname === "/subscriptions" ? "bg-primary-500" : ""
        }`}
        activeStyle={{ color: "white" }}
      >
        <Subscriptions
          style={{
            color: location.pathname === "/subscriptions" ? "white" : "red",
          }}
        />
        <span
          className={`ml-2 font-bold ${
            location.pathname === "/subscriptions" ? "text-white" : ""
          }`}
        >
          Subscriptions
        </span>
      </NavLink>
      <hr className="border-gray-300" />
      <NavLink
        to="/comments"
        className={`h-20 flex items-center pl-4 ${
          location.pathname === "/comments" ? "bg-primary-500" : ""
        }`}
        activeStyle={{ color: "white" }}
      >
        <CommentSharp
          style={{
            color: location.pathname === "/comments" ? "white" : "red",
          }}
        />
        <span
          className={`ml-2 font-bold ${
            location.pathname === "/comments" ? "text-white" : ""
          }`}
        >
          Comments
        </span>
      </NavLink>
      <hr className="border-gray-300" />
      <NavLink
        to="/referrals"
        className={`h-20 flex items-center pl-4 ${
          location.pathname === "/referrals" ? "bg-primary-500" : ""
        }`}
        activeStyle={{ color: "white" }}
      >
        <People
          style={{
            color: location.pathname === "/referrals" ? "white" : "red",
          }}
        />
        <span
          className={`ml-2 font-bold ${
            location.pathname === "/referrals" ? "text-white" : ""
          }`}
        >
          Referrals
        </span>
      </NavLink>
      <hr className="border-gray-300" />
      <NavLink
        to="/settings"
        className={`h-20 flex items-center pl-4 ${
          location.pathname === "/settings" ? "bg-primary-500" : ""
        }`}
        activeStyle={{ color: "white" }}
      >
        <Settings
          style={{
            color: location.pathname === "/settings" ? "white" : "red",
          }}
        />
        <span
          className={`ml-2 font-bold ${
            location.pathname === "/settings" ? "text-white" : ""
          }`}
        >
          Settings
        </span>
      </NavLink>
      <hr className="border-gray-300" />
      <NavLink
        to="/help"
        className={`h-20 flex items-center pl-4 rounded-b ${
          location.pathname === "/help" ? "bg-primary-500" : ""
        }`}
        activeStyle={{ color: "white" }}
      >
        <Help
          style={{
            color: location.pathname === "/help" ? "white" : "red",
          }}
        />
        <span
          className={`ml-2 font-bold ${
            location.pathname === "/help" ? "text-white" : ""
          }`}
        >
          Help
        </span>
      </NavLink>
      <hr className="border-gray-300" />
    </div>
  );
};

export default Sidebar;
