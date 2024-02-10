import React from "react";

export default function Top() {
  return (
    <section className="row">
      <nav className="col-6 text-center flex">
        <a href="/">
          <img src="logo.png" alt="logo" />
        </a>
        <ul className="flex p-4 ml-8">
          <li>Home</li>
          <li className="ml-10">About us</li>
          <li className="ml-10">Menu</li>
          <li className="ml-10">Features</li>
          <li className="ml-10">Contact us</li>
        </ul>
      </nav>
      <div className="col-6 flex justify-end ">
        <button className="bg-orange-500 text-white rounded h-12 w-40">Booking Now</button>
      </div>
    </section>
  );
}
