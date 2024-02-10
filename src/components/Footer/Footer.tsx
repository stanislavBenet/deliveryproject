import React from "react";


export default function Footer() {
  return (
    <section className="row flex bg-gray-700 py-32 text-gray-300">
      <article className="col-3 flex flex-col items-center p-4">
        <img width="40px" src="logo.png" alt="logo" />
        <a href="www.company.com">www.company.com</a>
        <a href="mailto:email@gmail.com">ypuremail@gmail.com</a>
        <a href="tel:399023423423">Phone: +380950911653</a>
      </article>
      <article className="col-3 flex flex-col">
        <h2 className="mb-4">Home</h2>
        <ul className="pad">
          <li>
            <a href="">Landingpage</a>
          </li>
          <li>
            <a href="">Documentation</a>
          </li>
          <li>
            <a href="">Referal program</a>
          </li>
          <li>
            <a href="">UI&UX Design</a>
          </li>
          <li>
            <a href="">Web design</a>
          </li>
        </ul>
      </article>
      <article className="col-3 flex flex-col">
        <h2 className="mb-4">Menu</h2>
        <ul className="pad">
          <li>
            <a href="">Landingpage</a>
          </li>
          <li>
            <a href="">Documentation</a>
          </li>
          <li>
            <a href="">Referal program</a>
          </li>
          <li>
            <a href="">UI&UX Design</a>
          </li>
          <li>
            <a href="">Web design</a>
          </li>
        </ul>
      </article>
      <article className="col-3 flex flex-col">
        <h2 className="mb-4">Company</h2>
        <ul className="pad">
          <li>
            <a href="">Landingpage</a>
          </li>
          <li>
            <a href="">Documentation</a>
          </li>
          <li>
            <a href="">Referal program</a>
          </li>
        </ul>
        <div className="flex pad">
          <a href="">
            <img src="instafooter.png" alt="Instagramm" />
          </a>
          <a href="">
            <img src="fbfooter.png" alt="Facebook" />
          </a>
          <a href="">
            <img src="twitterfooter.png" alt="Twitter" />
          </a>
          <a href="">
            <img src="youtubefooter.png" alt="Youtube" />
          </a>
        </div>
      </article>
    </section>
  );
}
