import person from "./assets/person.png";
import cutlery from "./assets/Cutlery.png";
import customerSupport from "./assets/Customer Support.png";
import shoppingCart from "./assets/Shopping Cart.png";

import quote from "./assets/quote.png";
import customer from "./assets/Customer.png";

import cafe from "./assets/Cafe.png";
import hamburger from "./assets/Hamburger.png";
import meal from "./assets/Meal.png";

import Rectangle18 from "./assets/Rectangle 18.png";
import Rectangle19 from "./assets/Rectangle 19.png";
import Rectangle20 from "./assets/Rectangle 20.png";
import Rectangle21 from "./assets/Rectangle 21.png";
import Rectangle22 from "./assets/Rectangle 22.png";
import Rectangle23 from "./assets/Rectangle 23.png";
import Rectangle24 from "./assets/Rectangle 24.png";
import Rectangle25 from "./assets/Rectangle 25.png";
import { nanoid } from "nanoid";

export const NavLinks = [
  {
    title: "Home",
    route: "/",
  },
  {
    title: "About",
    route: "/about",
  },
  {
    title: "Service",
    route: "/service",
  },
  {
    title: "Menu",
    route: "/menu",
  },
];

export const CardListItems = [
  {
    icon: person,
    title: "profile",
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

export const MealListItems = [
  {
    category: "Popular",
    title: "Breakfast",
    icon: cafe,
  },
  {
    category: "Special",
    title: "Lunch",
    icon: hamburger,
  },
  {
    category: "Lovely",
    title: "Dinner",
    icon: meal,
  },
];

export const MenuListItems = [
  {
    image: Rectangle18,
    title: "Chicken Burger",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
    price: 150,
    id: nanoid()
  },

  {
    image: Rectangle19,
    title: "Chicken Burger",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
    price: 150,
    id: nanoid()
  },

  {
    image: Rectangle20,
    title: "Chicken Burger",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
    price: 150,
    id: nanoid()
  },

  {
    image: Rectangle21,
    title: "Chicken Burger",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
    price: 150,
    id: nanoid()
  },

  {
    image: Rectangle22,
    title: "Chicken Burger",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
    price: 150,
    id: nanoid()
  },

  {
    image: Rectangle23,
    title: "Chicken Burger",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
    price: 150,
    id: nanoid()
  },

  {
    image: Rectangle24,
    title: "Chicken Burger",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
    price: 150,
    id: nanoid()
  },

  {
    image: Rectangle25,
    title: "Chicken Burger",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
    price: 150,
    id: nanoid()
  },

];
