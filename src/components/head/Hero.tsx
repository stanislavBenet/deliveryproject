import React from 'react'

export default function Hero() {
  return (
    <section className="row">
      <article className="col-6 flex flex-col justify-center">
        <h1>Making time a good time by making food the good food.</h1>
        <p className="pt-11">
          There are many things are needed to start the Fast Food Business. You
          need not only Just Food Stalls with Persons but also specialized
          equipment,
        </p>
        <ul className="pt-11 flex">
          <li className="pr-8">
            <button className="orangeBtn h-12 w-40">
              Order Now
            </button>
          </li>
          <li>
            <button className="transparentBtn">Food Details</button>
          </li>
        </ul>
      </article>
      <div className="col-6">
        <img src="pan.png" alt="pan" />
      </div>
    </section>
  );
}
