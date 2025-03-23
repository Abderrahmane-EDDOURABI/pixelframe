import React, { useState } from "react";
import "./faqs.css";

import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";

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

const FaqItems = ({ id, title, description }) => {
  const [open, setOpen] = useState(false);
  return (
    <article className={`faq__item ${open ? "open" : ""}`} key={id}>
      <div>
        <span onClick={() => setOpen(!open)}>
          {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </span>
        <h6>{title}</h6>
      </div>
      {open && <p>{description}</p>}
    </article>
  );
};

export default FaqItems;
