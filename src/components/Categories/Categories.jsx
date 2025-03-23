import React from 'react'
import './categories.css';
import { Link } from 'react-router-dom';

const Categories = () => {

  return (
    <section className='category__buttons'>
        <div className="container category__buttons-container">
            <Link to={"#"} className="category__btn">Mariage & Engagement</Link>
            <Link to={"#"} className="category__btn">Portrait</Link>
            <Link to={"#"} className="category__btn">Corporate & Branding</Link>
            <Link to={"#"} className="category__btn">Evenementiel</Link>
            <Link to={"#"} className="category__btn">Immobilier et artchitecture</Link>
            <Link to={"#"} className="category__btn">Produits e-commerce</Link>
        </div>
    </section>
  )
}

export default Categories