import React, { useEffect, useState } from "react";
import styles from "./testimonial.module.css";
import { fetchData } from "../../util/fetchHandler";
import Rate from "../../util/rate";

interface ApiResponse {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export default function Testimonial() {
  const [items, setItems] = useState<ApiResponse[]>([]);
  const [index, setIndex] = useState(1);
  const [comment, setComment] = useState<ApiResponse | undefined>();

  const next = () => {
    setIndex((prev) => (prev + 1) % items.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  useEffect(() => {
    fetchData("https://jsonplaceholder.typicode.com/comments")
      .then((data: any) => {
        setItems(data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const newComment = items.find((item) => item.id === index);
    setComment(newComment);
  }, [items, index]);

  return (
    <section className="row relative testimonial mb-52">
      <article className="col-12 flex flex-col items-center mt-40">
        <h3 className="subtitle">Testimonial</h3>
        <h2>Making Food great again and again</h2>
        <p className="col-8 mt-10 text-center h-10">
          You need not only Just Food Stalls with Persons but also specialized
          equipment, Skills to manage Customers, Effective Product catlogues etc
          to make your.
        </p>
      </article>
      <span onClick={prev} className={styles.prev}></span>
      <span onClick={next} className={styles.next}></span>
      <article className="col-12 flex flex-col items-center relative h-36 mt-20 select-none">
        {comment ? (
          <>
            <img className="rounded-full" src="photoc.png" alt="photo" />
            <span className={styles.bgPhoto} />
            <p className="col-6 mt-16 text-center">{comment.body}</p>
            <p className="m-4">
              <Rate count={comment.id} />
            </p>
            <p className="font-bold text-lg">{comment.email}</p>
            <p className="text-lg">occupation</p>
          </>
        ) : (
          <p className="mt-10">Loading comment...</p>
        )}
      </article>
    </section>
  );
}
