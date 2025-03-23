import React, { useState } from 'react'
import './single-blog.css';

import userSingleBlog from '../../assets/images/testimonials__images/avatar2.jpg'
import postSingle from '../../assets/images/blog__images/blog1.jpg'
import { useParams } from 'react-router-dom';

const SingleBlog = () => {
  const { id } = useParams();
  const article = { id, title: `Article ${id}`, content: "Contenu détaillé de l'article..." };
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const addComment = () => {
    setComments([...comments, newComment]);
    setNewComment("");
  };
  return (
    <main className="single-post__page">
    <section className="singlepost">
      <div className="container singlepost__container">
        <h2>Fitness & Bien-être</h2>
        <div className="post__author">
          <div className="post__author-avatar">
            <img src={userSingleBlog} alt="user1" />
          </div>
          <div className="post-author__info">
            <h5>By : Joe Doe</h5>
            <small>June 13, 2022 - 10:34</small>
          </div>
        </div>
        <div className="singlepost__thumbnail">
          <img src={postSingle} alt="singlepost__figure" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Enim debitis hic laudantium provident suscipit quia officiis atque, 
          explicabo est, accusantium illo obcaecati 
          eum quam quos ea ab nihil dicta? Molestias!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Enim debitis hic laudantium provident suscipit quia officiis atque, 
          explicabo est, accusantium illo obcaecati 
          eum quam quos ea ab nihil dicta? Molestias!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Enim debitis hic laudantium provident suscipit quia officiis atque, 
          explicabo est, accusantium illo obcaecati 
          eum quam quos ea ab nihil dicta? Molestias!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Enim debitis hic laudantium provident suscipit quia officiis atque, 
          explicabo est, accusantium illo obcaecati 
          eum quam quos ea ab nihil dicta? Molestias!
        </p>
      </div>


      <div className="single-blog__comments">
        <h3>Commentaires</h3>
        {comments.map((c, i) => (
          <p key={i}>{c}</p>
        ))}
      </div>


        <div className="single-blog__add-comment">
        <input type="text" value={newComment} onChange={(e) => setNewComment(e.target.value)} />
        <button onClick={addComment}>Ajouter un commentaire</button>
        </div>
      <div className="single-blog__actions">
        <button>❤️ J'aime</button>
        <button>📤 Partager</button>
      </div>
    </section>
  </main>
  )
}

export default SingleBlog