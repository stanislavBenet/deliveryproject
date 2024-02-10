import React from "react";

interface FeatureItem {
  name: string;
  text: string;
  img: string;
}

const featureItems: FeatureItem[] = [
  {
    name: "Quality Food",
    text: "It can be a very secure path to earn good money and make you very successful creative entrepreneur.",
    img: "feature1.png",
  },
  {
    name: "Food Delivery",
    text: "It can be a very secure path to earn good money and make you very successful creative entrepreneur.",
    img: "feature2.png",
  },
  {
    name: "Super Taste",
    text: "It can be a very secure path to earn good money and make you very successful creative entrepreneur.",
    img: "feature3.png",
  },
];

export default function Features() {
  return (
    <section className="row">
      <div className="flex flex-col items-center col-12 my-10">
        <p className="subtitle">Features</p>
        <h2>Food with a New Passion</h2>
      </div>
      <div className="flex col-12">
        {featureItems.map((item, i) => {
          return (
            <article key={i} className="col-4 flex flex-col items-center m-8">
              <img className="mb-8" src={item.img} alt={item.name} />
              <h3 className="mb-4">{item.name}</h3>
              <p>{item.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
