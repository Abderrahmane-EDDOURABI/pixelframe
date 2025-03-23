import React, { useState } from "react";
import './store.css';
import { CiHeart } from "react-icons/ci";
import { CiShare1 } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

import image01 from '../../assets/images/store__images/gallery1.jpg';
import image02 from '../../assets/images/store__images/gallery2.jpg';
import image03 from '../../assets/images/store__images/gallery3.jpg';
import SearchBar from "../../components/SearchBar/SearchBar";


const products = [
  {
    id: 1,
    name: "Coucher de soleil urbain",
    category : "",
    price: 49,
    size: ["S", "M", "L"],
    format: ["JPEG", "PNG", "TIFF"],
    image: image01,
  },
  {
    id: 2,
    name: "Paysage de montagne",
    category : "",
    price: 69,
    size: ["S", "M", "L"],
    format: ["JPEG", "PNG", "TIFF"],
    image: image02,
  },
  {
    id: 3,
    name: "Portrait en noir et blanc",
    category : "",
    price: 39,
    size: ["S", "M", "L"],
    format: ["JPEG", "PNG", "TIFF"],
    image: image03,
  },
];
const Store = () => {
  // const [filters, setFilters] = useState({ size: "All", format: "All" });
  // const filteredProducts = products.filter(
  //   (product) =>
  //     (filters.size === "All" || product.size === filters.size) &&
  //     (filters.format === "All" || product.format === filters.format)
  // );
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredProducts = products
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    .filter((p) => (categoryFilter ? p.category === categoryFilter : true))
    .sort((a, b) => (sortBy === "price" ? a.price - b.price : b.price - a.price));

  const paginatedProducts = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  return (
    // <section className="store">
    //     <div className="container store-page">
    //     <h1>🛍️ Boutique</h1>
    //     <div className="filters">
    //         <select onChange={(e) => setFilters({ ...filters, size: e.target.value })}>
    //         <option value="All">Toutes les tailles</option>
    //         <option value="S">S</option>
    //         <option value="M">M</option>
    //         <option value="L">L</option>
    //         </select>
    //         <select onChange={(e) => setFilters({ ...filters, format: e.target.value })}>
    //         <option value="All">Tous formats</option>
    //         <option value="JPEG">JPEG</option>
    //         <option value="PNG">PNG</option>
    //         <option value="TIFF">TIFF</option>
    //         </select>
    //     </div>
    //     <div className="product-list">
    //         {filteredProducts.map((product) => (
    //         <div key={product.id} className="product-card">
    //             <img src={product.image} alt={product.name} />
    //             <h2>{product.name}</h2>
    //             <p>{product.price}€</p>
    //             <button onClick={() => addToCart(product)}>
    //             Ajouter au panier
    //             </button>
    //         </div>
    //         ))}
    //     </div>
    //     </div>
    // </section>
    <section className="store">
      <h2>🛍️ Boutique</h2>

    <div className="container store__container">
      {/* <input type="text" placeholder="Rechercher..." value={search} onChange={(e) => setSearch(e.target.value)} /> */}

      <SearchBar/>
      <div className="filters">
        <select onChange={(e) => setCategoryFilter(e.target.value)}>
          <option value="">Toutes catégories</option>
          <option value="Numérique">Numérique</option>
          <option value="Physique">Physique</option>
        </select>

        <select onChange={(e) => setSortBy(e.target.value)}>
          <option value="">Trier par</option>
          <option value="price">Prix croissant</option>
          <option value="priceDesc">Prix décroissant</option>
        </select>

      </div>

      <div className="product-list">
          {paginatedProducts.map((product) => (
            <article className="product-card" key={product.id}>
              <div className="product-card__image">
              <img src={product.image} alt={product.name} />
              </div>
              <div className="product-card__content">
                <h3>{product.name}</h3>
                <p>Prix : {product.price}€</p>
              </div>
              <div className="product-card__buttons">
                <button className="btn__favorite"><CiHeart/></button>
                <button className="btn__share"><CiShare1/></button>
                <button className="btn__cart"><CiShoppingCart/></button>
              </div>
            </article>
          ))}
      </div>


      <div className="pagination">
        <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}>{"<<"}</button>
        <button>1</button>
        <button onClick={() => setCurrentPage((prev) => prev + 1)}>{">>"}</button>
      </div>
    </div>
    </section>
  );
};

export default Store;
