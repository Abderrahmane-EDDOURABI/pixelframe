import React from "react";
import "./faqs.css";
import FaqItems from "./FaqItems.jsx";

export const data = [
  {
    id: 1,
    title: "Diana Ayi",
    description:
      "Vias opponunt quisquam posteritatis promiscue cernens velut vehiculi quaqua primigenios naturae mutilorum pueros frontem agmina omne otiosis spadonum de prima.",
  },
  {
    id: 2,
    title: "Ernest Achiever",
    description:
      "Vias opponunt quisquam posteritatis promiscue cernens velut vehiculi quaqua primigenios naturae mutilorum pueros frontem agmina omne otiosis spadonum de prima.",
  },
  {
    id: 3,
    title: "Daniel Vinyo",
    description:
      "Vias opponunt quisquam posteritatis promiscue cernens velut vehiculi quaqua primigenios naturae mutilorum pueros frontem agmina omne otiosis spadonum de prima.",
  },
  {
    id: 4,
    title: "Vivian Mensah",
    description:
      "Vias opponunt quisquam posteritatis promiscue cernens velut vehiculi quaqua primigenios naturae mutilorum pueros frontem agmina omne otiosis spadonum de prima.",
  },
  {
    id: 5,
    title: "Diana Ayi",
    description:
      "Vias opponunt quisquam posteritatis promiscue cernens velut vehiculi quaqua primigenios naturae mutilorum pueros frontem agmina omne otiosis spadonum de prima.",
  },
  {
    id: 6,
    title: "Diana Ayi",
    description:
      "Vias opponunt quisquam posteritatis promiscue cernens velut vehiculi quaqua primigenios naturae mutilorum pueros frontem agmina omne otiosis spadonum de prima.",
  },
  {
    id: 7,
    title: "Diana Ayi",
    description:
      "Vias opponunt quisquam posteritatis promiscue cernens velut vehiculi quaqua primigenios naturae mutilorum pueros frontem agmina omne otiosis spadonum de prima.",
  },
  {
    id: 8,
    title: "Diana Ayi",
    description:
      "Vias opponunt quisquam posteritatis promiscue cernens velut vehiculi quaqua primigenios naturae mutilorum pueros frontem agmina omne otiosis spadonum de prima.",
  },
];

const Faqs = () => {
  return (
    <section className="faqs">
      <div className="container faqs__container">
        <div className="faqs__header">
            <h2>Frequently Asked Questions</h2>
            <p>
            Find answer to some of the frequently asked questions below. Contact
            me if you have more questions.
            </p>
        </div>
        <div className="faqs__content">
          {data.map(({ id, title, description }) => (
            <FaqItems
              key={id}
              id={id}
              title={title}
              description={description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
