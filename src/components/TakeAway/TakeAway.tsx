import React from "react";
import styles from "./takeAway.module.css"

export default function TakeAway() {
  return (
    <section className="row relative mt-20">
      <img className={styles.bgImgTakeAway}  src="bgTakeAway.png" alt="" />
      <article className="col-8 flex flex-col items-start justify-center z-10">
        <p className="subtitle">TAKE AWAY</p>
        <h2>Food Stalls with Persons but to Product marketing plane. </h2>
        <p className="mt-10 mr-20">
          There are many things are needed to start the Fast Food Business. You
          need not only Just Food Stalls with Persons but also specialized
          equipmentwith Persons but also Just Food Stalls with Persons.
        </p>
        <ul className="flex mt-10">
          <li>
            <button className={styles.apple}>App Store</button>
          </li>
          <li>
            <button className={styles.playMarket}>Google Play</button>
          </li>
        </ul>
      </article>
      <img className="col-4 z-10" src="takeAway.png" alt="phonefortakeaway" />
    </section>
  );
}
