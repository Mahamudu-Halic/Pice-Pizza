import person from "./assets/person.png";
import cutlery from "./assets/Cutlery.png";
import customerSupport from "./assets/Customer Support.png";
import shoppingCart from "./assets/Shopping Cart.png";

import quote from "./assets/quote.png";
import customer from "./assets/Customer.png";

import { HiHome } from "react-icons/hi";
import { MdNoFood } from "react-icons/md";
import { TbReport } from "react-icons/tb";
import { LuChefHat } from "react-icons/lu";
import { toast } from "react-toast";
import { FaUsers } from "react-icons/fa";

export const copyToClipboard = (orderId) => {
  navigator.clipboard.writeText(orderId);
  toast.success("copied to clipboard");
};

export const NavLinks = [
  // {
  //   title: "Home",
  //   route: "/home",
  // },
  {
    title: "Menu",
    route: "/menu",
  },
  // {
  //   title: "Service",
  //   route: "/service",
  // },
  {
    title: "About",
    route: "/about",
  },
  {
    title: "Customization",
    route: "/customization",
  },
  {
    title: "History",
    route: "/history",
  },
];

export const AdminSidebarLinks = [
  { icon: HiHome, route: "/admin/dashboard", title: "Dashboard" },
  { icon: MdNoFood, route: "/admin/food-menu", title: "Food Menu" },
  { icon: LuChefHat, route: "/admin/orders", title: "Orders" },
  { icon: TbReport, route: "/admin/reports", title: "Reports" },
  { icon: FaUsers, route: "/admin/admins", title: "Admins" },
];

export const CardListItems = [
  {
    icon: person,
    title: "Profile",
    desc: "Lorem ipsum dolor sit amet, consectetur..",
  },
  {
    icon: cutlery,
    title: "QUALITY FOOD",
    desc: "Lorem ipsum dolor sit amet, consectetur..",
  },
  {
    icon: shoppingCart,
    title: "ONLINE ORDER",
    desc: "Lorem ipsum dolor sit amet, consectetur..",
  },
  {
    icon: customerSupport,
    title: "24/7 service",
    desc: "Lorem ipsum dolor sit amet, consectetur..",
  },
];

export const TestimonialListItem = [
  {
    icon: quote,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
    profile: customer,
  },
  {
    icon: quote,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
    profile: customer,
  },
  {
    icon: quote,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
    profile: customer,
  },
  {
    icon: quote,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
    profile: customer,
  },
];
