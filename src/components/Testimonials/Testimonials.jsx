import React from 'react'
import './testimonials.css';

import {Swiper} from 'swiper/react';
import { SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper/modules";
import { RiStarSFill } from "react-icons/ri";

import "swiper/css";
import "swiper/css/pagination";
import Avatar1 from '../../assets/images/testimonials__images/avatar1.jpg';
import Avatar2 from '../../assets/images/testimonials__images/avatar2.jpg';
import Avatar3 from '../../assets/images/testimonials__images/avatar3.jpg';
import Avatar4 from '../../assets/images/testimonials__images/avatar4.jpg';
import Avatar5 from '../../assets/images/testimonials__images/avatar5.jpg';
import Avatar6 from '../../assets/images/testimonials__images/avatar6.jpg';
import Avatar7 from '../../assets/images/testimonials__images/avatar7.jpg';
import Avatar8 from '../../assets/images/testimonials__images/avatar8.jpg';

export const data = [
    {
        id : 1,
        name : "Diana Ayi",
        avatar : Avatar1,
        profession : "Web Developer", 
        quote : "Vias opponunt quisquam posteritatis promiscue cernens velut vehiculi quaqua primigenios naturae mutilorum pueros frontem agmina omne otiosis spadonum de prima."
    },
    {
        id : 2,
        name : "Ernest Achiever",
        avatar : Avatar2,
        profession : "Singer", 
        quote : "Vias opponunt quisquam posteritatis promiscue cernens velut vehiculi quaqua primigenios naturae mutilorum pueros frontem agmina omne otiosis spadonum de prima."
    },
    {
        id : 3,
        name : "Daniel Vinyo",
        avatar : Avatar3,
        profession : "Lecturer", 
        quote : "Vias opponunt quisquam posteritatis promiscue cernens velut vehiculi quaqua primigenios naturae mutilorum pueros frontem agmina omne otiosis spadonum de prima."
    },
    {
        id : 4,
        name : "Vivian Mensah",
        avatar : Avatar4,
        profession : "Web Developer", 
        quote : "Vias opponunt quisquam posteritatis promiscue cernens velut vehiculi quaqua primigenios naturae mutilorum pueros frontem agmina omne otiosis spadonum de prima."
    },
    {
        id : 5,
        name : "Diana Ayi",
        avatar : Avatar5,
        profession : "Actor", 
        quote : "Vias opponunt quisquam posteritatis promiscue cernens velut vehiculi quaqua primigenios naturae mutilorum pueros frontem agmina omne otiosis spadonum de prima."
    },
    {
        id : 6,
        name : "Diana Ayi",
        avatar : Avatar6,
        profession : "Web Developer", 
        quote : "Vias opponunt quisquam posteritatis promiscue cernens velut vehiculi quaqua primigenios naturae mutilorum pueros frontem agmina omne otiosis spadonum de prima."
    },
    {
        id : 7,
        name : "Diana Ayi",
        avatar : Avatar7,
        profession : "Web Developer", 
        quote : "Vias opponunt quisquam posteritatis promiscue cernens velut vehiculi quaqua primigenios naturae mutilorum pueros frontem agmina omne otiosis spadonum de prima."
    },
    {
        id : 8,
        name : "Diana Ayi",
        avatar : Avatar8,
        profession : "Web Developer", 
        quote : "Vias opponunt quisquam posteritatis promiscue cernens velut vehiculi quaqua primigenios naturae mutilorum pueros frontem agmina omne otiosis spadonum de prima."
    },
]

const Testimonials = () => {
  return (
    <section className="testimonials">
        <div className="container testimonials__container">
            <h2>Ce que nos clients disent de nous</h2>
            <div className="customers__title">
            <h3>Avis Clients</h3>
            <h4>
                <span>4.85</span> Sur <span>5</span>
            </h4>
            </div>
            <div className="customers__swiper">
                <Swiper
                className="swiper-wrapper swiper-wrapper__testimonials"
                modules={[Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ clickable: true }}
                breakpoints={{
                    599: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                    },
                    1023: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                    },
                    1366: {
                        slidesPerView: 5,
                        spaceBetween: 10,
                    },
                }}
                >
                {data.map((data) => {
                    return (
                    <SwiperSlide
                        className="swiper-slide swiper-slide__testimonials"
                        key={data.id}
                    >
                        <div className="testi__stars">⭐⭐⭐⭐⭐</div>
                        <blockquote className="testi__desc">
                        <p>{data.quote}</p>
                        </blockquote>
                        <div className="testi__by">
                        <img src={data.avatar} alt="testimonials__by" />
                        <span>{data.name}</span>
                        <span>{data.job}</span>
                        </div>
                    </SwiperSlide>
                    );
                })}
                </Swiper>
            </div>
        </div>
  </section>
  )
}

export default Testimonials