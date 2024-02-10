import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import styles from "./contact.module.css";
import clientsFeedback from "../../store/clientsFeedback";

const Contact = observer(() => {
  const [message, setMessage] = useState("");
  return (
    <section className={styles.section}>
      <article className="col-8 mt-40">
        <p className="subtitle">CONTACT</p>
        <h2>
          Food Stalls with Persons but also specialized equipment, Skills to
          manage.
        </h2>
      </article>
      <div className="col-8 mt-20 mb-32">
        <input
          className={styles.input}
          type="text"
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message"
        />
        <button
          onClick={() => clientsFeedback.addNewMessage(message)}
          className="orangeBtn col-2 h-16 w-32"
        >
          Send
        </button>
      </div>
    </section>
  );
});

export default Contact;
