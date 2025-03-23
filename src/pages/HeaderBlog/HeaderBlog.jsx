import React from 'react'
import { Link } from 'react-router-dom'
import './header-blog.css';

import postOne from '../../assets/images/blog__images/blog102.jpg';
import authorOne from "../../assets/images/testimonials__images/avatar17.jpg";

const HeaderBlog = () => {
  return (
    <section className='featured'>
        <div className="container featured__container">
            <div className="post__thumbnail">
                <img src={postOne} alt="post featured" />
            </div>
            <div className="post__info">
                <div className="post__content">
                    <Link to={"/category-posts"} className='category__btn'>Corporate & Branding</Link>
                    <h2 className='post__title'>
                        <Link to={"#"}>10 Conseils pour une Photo Parfaite</Link>
                    </h2>
                    <p className="post__body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
                        Cras ultricies ligula sed magna dictum porta.
                    </p>
                </div>
                <div className="post__author">
                    <div className="post__author-avatar">
                        <img src={authorOne} alt="user1" />
                    </div>
                    <div className="post-author__info">
                        <h5>By : Joe Doe</h5>
                        <small>June 10, 2022 - 07:23</small>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeaderBlog