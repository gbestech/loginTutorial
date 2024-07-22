import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Product",
    path: "/product",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "Reports",
    path: "/reports",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Sales",
    path: "/sales",
    icon: <FaIcons.FaSalesforce />,
    cName: "nav-text",
  },
  {
    title: "Inventory",
    path: "/inventory",
    icon: <MdIcons.MdInventory />,
    cName: "nav-text",
  },
];
