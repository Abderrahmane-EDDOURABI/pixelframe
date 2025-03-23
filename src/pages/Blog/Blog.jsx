import React from 'react'
import './blog.css';
import SearchBar from '../../components/SearchBar/SearchBar';

import Posts from '../../components/Posts/Posts';
import HeaderBlog from '../HeaderBlog/HeaderBlog';
import Categories from '../../components/Categories/Categories';

const Blog = () => {
  return (
    // <section className='blog'>
    //     <div className="container blog__container">
    //     <h1>📖 Blog & Ressources</h1>
    //     <p>Explorez nos articles et guides pour améliorer vos shootings.</p>
    //     <SearchBar/>
    //     {
    //       articles.map ((post) => {
    //         return (
    //           <article className="post" key={post.id}>
    //             <div className="post__thumbnail">
    //               <img src={post.image} alt="post__img" className="post__img" />
    //             </div>
    //             <div className="post__info">
    //               <Link to={"#"} className="category__btn">{post.category}</Link>
    //               <h3>
    //                 <Link to={`/post/${post.id}`} className="post__title">{post.title}</Link>
    //               </h3>
    //               <p className="post__body">{post.description}</p>
    //               <div className="post__autor">
    //                 <div className="post__author-avatar">
    //                   <img src={post.authorAvatar} alt="author-avatar" />
    //                 </div>
    //                 <div className="post__author-info">
    //                   <h5>By : {post.authorUsername}</h5>
    //                   <small>{post.createdAt}</small>
    //                 </div>
    //               </div>
    //             </div>
    //           </article>
    //         )
    //       })
    //     }
    //     </div>
    // </section>
    <main className='blogs'>
      <SearchBar/>
      <Categories/>
      <HeaderBlog/>
      <Posts/>
    </main>
  )
}

export default Blog