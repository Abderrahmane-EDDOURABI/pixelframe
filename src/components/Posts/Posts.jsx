import React from "react";
import { Link } from "react-router-dom";
import './posts.css';

import post01 from "../../assets/images/blog__images/blog1.jpg";
import post02 from "../../assets/images/blog__images/blog2.jpg";
import post03 from "../../assets/images/blog__images/blog3.jpg";
import post04 from "../../assets/images/blog__images/blog4.jpg";
import post05 from "../../assets/images/blog__images/blog5.jpg";
import post06 from "../../assets/images/blog__images/blog6.jpg";
import post07 from "../../assets/images/blog__images/blog7.jpg";
import post08 from "../../assets/images/blog__images/blog8.jpg";
import post09 from "../../assets/images/blog__images/blog9.jpg";

import author01 from "../../assets/images/testimonials__images/avatar1.jpg";
import author02 from "../../assets/images/testimonials__images/avatar2.jpg";
import author03 from "../../assets/images/testimonials__images/avatar3.jpg";
import author04 from "../../assets/images/testimonials__images/avatar4.jpg";
import author05 from "../../assets/images/testimonials__images/avatar5.jpg";
import author06 from "../../assets/images/testimonials__images/avatar6.jpg";
import author07 from "../../assets/images/testimonials__images/avatar7.jpg";
import author08 from "../../assets/images/testimonials__images/avatar8.jpg";
import author09 from "../../assets/images/testimonials__images/avatar9.jpg";

const articles = [
  {
    id: 1,
    image: post01,
    category: "Branding",
    title: "Programme Full Body : Comment bien structurer son entraînement ?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sitamet nulla auctor, vestibulum magna sed, convallis ex. Crasultricies ligula sed magna dictum porta.",
    authorAvatar: author01,
    authorUsername: "Joe Doe",
    createdAt: "June 13, 2022 - 10:34",
  },
  {
    id: 2,
    image: post02,
    category: "Mariage",
    title: "Programme Full Body : Comment bien structurer son entraînement ?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sitamet nulla auctor, vestibulum magna sed, convallis ex. Crasultricies ligula sed magna dictum porta.",
    authorAvatar: author02,
    authorUsername: "Joe Doe",
    createdAt: "June 13, 2022 - 10:34",
  },
  {
    id: 3,
    image: post03,
    category: "E-commerce",
    title: "Programme Full Body : Comment bien structurer son entraînement ?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sitamet nulla auctor, vestibulum magna sed, convallis ex. Crasultricies ligula sed magna dictum porta.",
    authorAvatar: author03,
    authorUsername: "Joe Doe",
    createdAt: "June 13, 2022 - 10:34",
  },
  {
    id: 4,
    image: post04,
    category: "Portrait et mode",
    title: "Programme Full Body : Comment bien structurer son entraînement ?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sitamet nulla auctor, vestibulum magna sed, convallis ex. Crasultricies ligula sed magna dictum porta.",
    authorAvatar: author04,
    authorUsername: "Joe Doe",
    createdAt: "June 13, 2022 - 10:34",
  },
  {
    id: 5,
    image: post05,
    category: "Immobilier",
    title: "Programme Full Body : Comment bien structurer son entraînement ?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sitamet nulla auctor, vestibulum magna sed, convallis ex. Crasultricies ligula sed magna dictum porta.",
    authorAvatar: author05,
    authorUsername: "Joe Doe",
    createdAt: "June 13, 2022 - 10:34",
  },
  {
    id: 6,
    image: post06,
    category: "Produit e-commerce",
    title: "Programme Full Body : Comment bien structurer son entraînement ?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sitamet nulla auctor, vestibulum magna sed, convallis ex. Crasultricies ligula sed magna dictum porta.",
    authorAvatar: author06,
    authorUsername: "Joe Doe",
    createdAt: "June 13, 2022 - 10:34",
  },
  {
    id: 7,
    image: post07,
    category: "Corporate & branding",
    title: "Programme Full Body : Comment bien structurer son entraînement ?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sitamet nulla auctor, vestibulum magna sed, convallis ex. Crasultricies ligula sed magna dictum porta.",
    authorAvatar: author07,
    authorUsername: "Joe Doe",
    createdAt: "June 13, 2022 - 10:34",
  },
  {
    id: 8,
    image: post08,
    category: "Evenmentiel",
    title: "Programme Full Body : Comment bien structurer son entraînement ?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sitamet nulla auctor, vestibulum magna sed, convallis ex. Crasultricies ligula sed magna dictum porta.",
    authorAvatar: author08,
    authorUsername: "Joe Doe",
    createdAt: "June 13, 2022 - 10:34",
  },
  {
    id: 9,
    image: post09,
    category: "Evenmentiel",
    title: "Programme Full Body : Comment bien structurer son entraînement ?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sitamet nulla auctor, vestibulum magna sed, convallis ex. Crasultricies ligula sed magna dictum porta.",
    authorAvatar: author09,
    authorUsername: "Joe Doe",
    createdAt: "June 13, 2022 - 10:34",
  },
];

const Posts = () => {
  return (
    <section className="posts">
      <div className="container posts__container">
        {articles.map((post) => {
          return (
            <article className="post" key={post.id}>
              <div className="post__thumbnail">
                <img src={post.image} alt="post__img" className="post__img" />
              </div>
              <div className="post__info">
                <Link to={"#"} className="category__btn">
                  {post.category}
                </Link>
                <h3>
                  <Link to={`/post/${post.id}`} className="post__title">
                    {post.title}
                  </Link>
                </h3>
                <p className="post__body">{post.description}</p>
                <div className="post__autor">
                  <div className="post__author-avatar">
                    <img src={post.authorAvatar} alt="author-avatar" />
                  </div>
                  <div className="post__author-info">
                    <h5>By : {post.authorUsername}</h5>
                    <small>{post.createdAt}</small>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Posts;
