import React from "react";

export default function AboutUs() {
  return (
    <section className="row flex relative mt-32">
      <img className="bgimgabout" src="bg.png" alt="background" />
      <img className="col-6 z-10" src="aboutUs.png" alt="aboutus" />
      <article className="col-6 p-20">
        <p className="subtitle">ABOUT US</p>
        <h2>
          Food Stalls with Persons but to Product marketing plane catlogues etc
          to.{" "}
        </h2>
        <p className="mt-8">
          There are many things are needed to start the Fast Food Business. You
          need not only Just Food Stalls with Persons but also equipment make
          your marketing plane Effective.
        </p>
        <button className="orangeBtn mt-8 h-12 w-40 ">Read More</button>
      </article>
    </section>
  );
}
