import React from "react";
import Rate from "../../util/rate";

interface MenuItems {
  img: string;
  name: string;
  price: number;
  description: string;
  rate: number;
}

const menuItems: MenuItems[] = [
  {
    img: "menu1.png",
    name: "Vegie Muffen",
    price: 16,
    description:
      "There are many things are needed to start the Fast Food Business.",
    rate: 4,
  },
  {
    img: "menu2.png",
    name: "Salads",
    price: 12,
    description:
      "There are many things are needed to start the Fast Food Business.",
    rate: 5,
  },
  {
    img: "menu3.png",
    name: "Burger",
    price: 10,
    description:
      "There are many things are needed to start the Fast Food Business.",
    rate: 3,
  },
  {
    img: "menu4.png",
    name: "Delmonico Steak dish",
    price: 14,
    description:
      "There are many things are needed to start the Fast Food Business.",
    rate: 2,
  },
  {
    img: "menu5.png",
    name: "Egg Masala",
    price: 9,
    description:
      "There are many things are needed to start the Fast Food Business.",
    rate: 4,
  },
  {
    img: "menu6.png",
    name: "Peach Melba dish",
    price: 15,
    description:
      "There are many things are needed to start the Fast Food Business.",
    rate: 3,
  },
];

export default function Menu() {
  return (
    <section className="row flex flex-col items-center mt-28">
      <article className="row col-12 flex flex-col items-center">
        <p className="subtitle">MENU</p>
        <h2>Food Full of treaty Love</h2>
        <p className="col-8 mt-6 mb-12">
          There are many things are needed to start the Fast Food Business. You
          need not only Just Food Stalls with Persons but also specialized
          equipment, Skills to manage Customers,{" "}
        </p>
      </article>
      <div className="row col-12 flex justify-center">
        {menuItems.map((item, i) => {
          return (
            <article key={i} className="col-4 flex flex-col">
              <div className="m-3 border-b-2 border-r-2 rounded-md p-2 shadow-md">
                <img className="cardBorder" src={item.img} alt={item.name} />
                <div className="flex justify-between px-4 items-center pt-4">
                  <h3>{item.name}</h3>
                  <p className="text-xl font-bold">{item.price}$</p>
                </div>
                <p className="p-4">{item.description}</p>
                <div className="flex justify-between px-4 items-center">
                  <button className="orangeBtn w-8 h-8">+</button>{" "}
                  <p><Rate count ={item.rate}/></p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
      <button className="transparentBtn">Learn More</button>
    </section>
  );
}
