import person from "./assets/person.png";
import cutlery from "./assets/Cutlery.png";
import customerSupport from "./assets/Customer Support.png";
import shoppingCart from "./assets/Shopping Cart.png";

import quote from "./assets/quote.png";
import customer from "./assets/Customer.png";

import cafe from "./assets/Cafe.png";
import hamburger from "./assets/Hamburger.png";
import meal from "./assets/Meal.png";

// import Rectangle18 from "./assets/Rectangle 18.png";
// import Rectangle19 from "./assets/Rectangle 19.png";
// import Rectangle20 from "./assets/Rectangle 20.png";
import Rectangle21 from "./assets/Rectangle 21.png";
import Rectangle22 from "./assets/Rectangle 22.png";
import Rectangle23 from "./assets/Rectangle 23.png";
import Rectangle24 from "./assets/Rectangle 24.png";
// import Rectangle25 from "./assets/Rectangle 25.png";

import arancini from "./assets/menu/arancini.jpeg";
import arugula from "./assets/menu/arugula.jpeg";
import bruschetta from "./assets/menu/bruschetta.jpeg";
import caesar from "./assets/menu/caesar.jpeg";
import calamari from "./assets/menu/calamari.jpeg";
import caprese from "./assets/menu/caprese.jpeg";
import hawaiian from "./assets/menu/hawaiian.jpeg";
import italian from "./assets/menu/italian.jpeg";
import margherita from "./assets/menu/margherita.jpeg";
import marinara from "./assets/menu/marinara.jpeg";
import pepperoni from "./assets/menu/pepperoni.jpeg";
import pollo from "./assets/menu/pollo.jpeg";
import prosciutto from "./assets/menu/prosciutto.jpeg";
import quattro from "./assets/menu/quattro.jpeg";
import bruschettaMista from "./assets/menu/bruschetta mista.jpeg";
import BreakfastBruschetta from "./assets/menu/Breakfast Bruschetta.jpeg";
import Smoked from "./assets/menu/Smoked.jpeg";
import Sausage from "./assets/menu/Sausage.jpeg";
import MorningMargherita from "./assets/menu/Morning Margherita.jpeg";

import { customAlphabet, nanoid } from "nanoid";
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
  // {
  //   title: "Admin Dashboard",
  //   route: "/admin/dashboard",
  // },
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

export const MenuListItems = {
  breakfast: [
    {
      image: BreakfastBruschetta,
      title: "Breakfast Bruschetta",
      desc: "Toasted bread layered with creamy ricotta cheese, scrambled eggs, fresh chopped tomatoes, and a sprinkle of chives. (Vegetarian)",
      price: 8.99,
      id: nanoid(),
    },

    {
      image: MorningMargherita,
      title: "Morning Margherita",
      desc: "A twist on the classic, featuring a base of fluffy scrambled eggs, topped with fresh mozzarella cheese, cherry tomatoes, and a drizzle of balsamic glaze. (Vegetarian)",
      price: 9.99,
      id: nanoid(),
    },

    {
      image: Sausage,
      title: "Sausage & Pepper Scramble",
      desc: "Scrambled eggs with savory Italian sausage, roasted peppers, and onions, all nestled on a bed of crispy hash browns and topped with melted mozzarella cheese",
      price: 11.99,
      id: nanoid(),
    },

    {
      image: Rectangle21,
      title: "Sweet Calzone",
      desc: "Filled with ricotta cheese, fresh berries, and a drizzle of honey. (Vegetarian)",
      price: 7.99,
      id: nanoid(),
    },

    {
      image: Rectangle22,
      title: "Savory Calzone",
      desc: "Filled with scrambled eggs, crumbled bacon or sausage (vegetarian option available upon request), and melted cheddar cheese.",
      price: 8.99,
      id: nanoid(),
    },

    {
      image: Rectangle23,
      title: "Freshly brewed coffee",
      desc: "(Regular, Cappuccino, Latte, etc.)",
      price: 2.99,
      id: nanoid(),
    },

    {
      image: Rectangle24,
      title: "Freshly squeezed orange juice",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
      price: 4.99,
      id: nanoid(),
    },

    {
      image: Smoked,
      title: "Smoked Salmon & Arugula Flatbread",
      desc: "A lighter option for breakfast. A crispy flatbread base topped with creamy ricotta cheese, smoked salmon slices, fresh arugula, and a squeeze of lemon.pen_spark",
      price: 10.99,
      id: nanoid(),
    },
  ],
  lunch: [
    {
      image: bruschetta,
      title: "Bruschetta",
      desc: "Toasted bread with fresh chopped tomatoes, garlic, basil, and a drizzle of olive oil. (Vegetarian)",
      price: 8.99,
      id: nanoid(),
    },

    {
      image: calamari,
      title: "Calamari Fritti",
      desc: "Crispy fried squid rings served with a lemon aioli dipping sauce.",
      price: 9.99,
      id: nanoid(),
    },

    {
      image: bruschettaMista,
      title: "Bruschetta Mista",
      desc: "An assortment of bruschetta toppings like roasted peppers, mozzarella cheese, and pesto. (Vegetarian option available)",
      price: 7.99,
      id: nanoid(),
    },

    {
      image: arancini,
      title: "Arancini (Rice Balls)",
      desc: "Deep-fried risotto balls filled with mozzarella cheese, served with marinara sauce. (Vegetarian)",
      price: 17.99,
      id: nanoid(),
    },

    {
      image: italian,
      title: "Italian Antipasto Platter",
      desc: "A selection of cured meats, olives, marinated vegetables, and cheeses served with grilled bread.",
      price: 10.99,
      id: nanoid(),
    },

    {
      image: caprese,
      title: "Caprese Salad",
      desc: "Fresh mozzarella cheese, sliced tomatoes, and basil leaves drizzled with balsamic reduction and olive oil.",
      price: 8.99,
      id: nanoid(),
    },

    {
      image: caesar,
      title: "Caesar Salad",
      desc: "Romaine lettuce tossed with creamy Caesar dressing, croutons, and Parmesan cheese. (Add grilled chicken for an extra protein boost)",
      price: 16.99,
      id: nanoid(),
    },

    {
      image: arugula,
      title: "Arugula Salad",
      desc: "Arugula leaves with shaved Parmesan cheese, cherry tomatoes, and a light lemon vinaigrette. (Vegetarian)",
      price: 8.99,
      id: nanoid(),
    },
  ],
  dinner: [
    {
      image: margherita,
      title: "Margherita",
      desc: "Tomato sauce, mozzarella cheese, and fresh basil leaves.",
      price: 10.99,
      id: nanoid(),
    },

    {
      image: marinara,
      title: "Marinara",
      desc: "Tomato sauce, garlic, oregano, and a sprinkle of Parmesan",
      price: 17.99,
      id: nanoid(),
    },

    {
      image: pepperoni,
      title: "Pepperoni",
      desc: "Tomato sauce, mozzarella cheese, and pepperoni slices.",
      price: 9.99,
      id: nanoid(),
    },

    {
      image: bruschetta,
      title: "Vegetarian",
      desc: "Tomato sauce, mozzarella cheese, a variety of roasted vegetables like peppers, onions, zucchini, and eggplant. (Vegan option available upon request)",
      price: 9.99,
      id: nanoid(),
    },

    {
      image: hawaiian,
      title: "Hawaiian ",
      desc: "Tomato sauce, mozzarella cheese, smoked ham, and pineapple chunks.",
      price: 12.99,
      id: nanoid(),
    },

    {
      image: pollo,
      title: "Pollo e Peperoni",
      desc: "Tomato sauce, mozzarella cheese, grilled chicken, and roasted peppers.",
      price: 8.99,
      id: nanoid(),
    },

    {
      image: quattro,
      title: "Quattro Formaggi",
      desc: "Tomato sauce, mozzarella, gorgonzola, fontina, and Parmesan cheese.",
      price: 7.99,
      id: nanoid(),
    },

    {
      image: prosciutto,
      title: "Prosciutto e Funghi",
      desc: "Tomato sauce, mozzarella cheese, prosciutto ham, and sautéed mushrooms.",
      price: 8.99,
      id: nanoid(),
    },
  ],
};

const orderId = customAlphabet("1234567890", 4);
export const OrderListItems = [
  {
    orderId: orderId(),
    time: "10:30AM",
    total: "100.00",
    status: "pending",
    phoneNumber: "0552802788",
    orderList: ["Pepperoni", "Margherita", "Hawaiian"],
  },
  {
    orderId: orderId(),
    time: "12:30PM",
    total: "200.00",
    status: "completed",
    phoneNumber: "0507755962",
    orderList: ["Marinara", "Arugula Salad", "Bruschetta Mista"],
  },
  {
    orderId: orderId(),
    time: "6:30AM",
    total: "456.00",
    status: "pending",
    phoneNumber: "0552802788",
    orderList: ["Vegetarian", "Caprese Salad", "Calamari Fritti"],
  },
  {
    orderId: orderId(),
    time: "7:30AM",
    total: "345.00",
    status: "pending",
    phoneNumber: "0507755962",
    orderList: ["Savory Calzone", "Vegetarian", "Breakfast Bruschetta"],
  },
  {
    orderId: orderId(),
    time: "8:30AM",
    total: "34.00",
    status: "completed",
    phoneNumber: "0552802788",
    orderList: ["Pepperoni"],
  },
  {
    orderId: orderId(),
    time: "9:30AM",
    total: "453.00",
    status: "pending",
    phoneNumber: "0507755962",
    orderList: ["Marinara", "Calamari Fritti"],
  },
  {
    orderId: orderId(),
    time: "11:30AM",
    total: "99.00",
    status: "pending",
    phoneNumber: "0552802788",
    orderList: ["Pepperoni", "Hawaiian", "Vegetarian"],
  },
  {
    orderId: orderId(),
    time: "10:30AM",
    total: "100.00",
    status: "pending",
    phoneNumber: "0552802788",
    orderList: ["Pepperoni", "Margherita", "Hawaiian"],
  },
  {
    orderId: orderId(),
    time: "12:30PM",
    total: "200.00",
    status: "completed",
    phoneNumber: "0507755962",
    orderList: ["Marinara", "Arugula Salad", "Bruschetta Mista"],
  },
  {
    orderId: orderId(),
    time: "6:30AM",
    total: "456.00",
    status: "pending",
    phoneNumber: "0552802788",
    orderList: ["Vegetarian", "Caprese Salad", "Calamari Fritti"],
  },
  {
    orderId: orderId(),
    time: "7:30AM",
    total: "345.00",
    status: "pending",
    phoneNumber: "0507755962",
    orderList: ["Savory Calzone", "Vegetarian", "Breakfast Bruschetta"],
  },
  {
    orderId: orderId(),
    time: "8:30AM",
    total: "34.00",
    status: "completed",
    phoneNumber: "0552802788",
    orderList: ["Pepperoni"],
  },
  {
    orderId: orderId(),
    time: "9:30AM",
    total: "453.00",
    status: "pending",
    phoneNumber: "0507755962",
    orderList: ["Marinara", "Calamari Fritti"],
  },
  {
    orderId: orderId(),
    time: "11:30AM",
    total: "99.00",
    status: "pending",
    phoneNumber: "0552802788",
    orderList: ["Pepperoni", "Hawaiian", "Vegetarian"],
  },
];


// {
//   unitPrice,
//   title,
//   size,
//   image,
//   category: "breakfast, lunch or diner",
//   type: "pizza, beverage, etc",
// }


// {
//   meat: [
//     {name: "chicken", price: "3.00"}
//   ],
//   sause: [],
//   veggies: [],
//   cheese: []
// }

export const toppings = [

      {name: "chicken", price: 1},
      {name: "beef", price: 2},
      {name: "pork", price: 3},
      {name: "feta cheese", price: 3},
      {name: "shaved parmesan", price: 5},
      {name: "mozzarella", price: 6},
      {name: "ricotta", price: 4},
      {name: "cheddar cheese", price: 2},
      {name: "parmesan", price: 1},
      {name: "goat", price: 6},
      {name: "blue", price: 4},
      {name: "red", price: 5},
      {name: "snake", price: 7},
      {name: "butter", price: 5},
      {name: "rabbit", price: 7},

    ]