import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/tables";
import RTLDefault from "views/rtl/default";
import Package from './components/Package/index'
import { GoPackageDependents } from "react-icons/go";
import { VscOrganization } from "react-icons/vsc";


// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
} from "react-icons/md";
import Organization from "./components/Organization/index"
const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },

  {
    name: "Package",
    layout: "/admin",
    path: "package",
    icon: <GoPackageDependents className="h-6 w-6" />,
    component: <Package />,
  },
  {
    name: "Organization",
    layout: "/admin",
    path: "Organization",
    icon: <VscOrganization className="h-6 w-6" />,
    component: <Organization />,
  },

  
];
export default routes;
