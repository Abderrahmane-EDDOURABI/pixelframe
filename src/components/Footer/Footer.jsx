import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlinePinterest } from "react-icons/ai";
import { AiOutlineTikTok } from "react-icons/ai";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer__socials">
        <Link to={"#"} target="_blank">
          <AiOutlineYoutube />
        </Link>
        <Link to={"#"} target="_blank">
          <AiOutlineInstagram />
        </Link>
        <Link to={"#"} target="_blank">
          <AiOutlinePinterest />
        </Link>
        <Link to={"#"} target="_blank">
          <AiOutlineTikTok />
        </Link>
      </div>
      <div className="container footer__container">
        <article>
          <h4>Categories</h4>
          <ul>
            <li>
              <Link to={"#"}>Mariages</Link>
            </li>
            <li>
              <Link to={"#"}>Portrait</Link>
            </li>
            <li>
              <Link to={"#"}>Corporate</Link>
            </li>
            <li>
              <Link to={"#"}>E-commerce</Link>
            </li>
            <li>
              <Link to={"#"}>Evenmentiel</Link>
            </li>
            <li>
              <Link to={"#"}>Immobilier</Link>
            </li>
          </ul>
        </article>
        <article>
          <h4>Support</h4>
          <ul>
            <li>
              <Link to={"#"}>Online Support</Link>
            </li>
            <li>
              <Link to={"#"}>Call Numbers</Link>
            </li>
            <li>
              <Link to={"#"}>Emails</Link>
            </li>
            <li>
              <Link to={"#"}>Social Support</Link>
            </li>
            <li>
              <Link to={"#"}>Location</Link>
            </li>
          </ul>
        </article>
        <article>
          <h4>Blog</h4>
          <ul>
            <li>
              <Link to={"#"}>Recent</Link>
            </li>
            <li>
              <Link to={"#"}>Popular</Link>
            </li>
            <li>
              <Link to={"#"}>Repair</Link>
            </li>
            <li>
              <Link to={"#"}>Categories</Link>
            </li>
            <li>
              <Link to={"#"}>Safety</Link>
            </li>
          </ul>
        </article>
        <article>
          <h4>Permalinks</h4>
          <ul>
            <li>
              <Link to={"#"}>Home</Link>
            </li>
            <li>
              <Link to={"#"}>Blog</Link>
            </li>
            <li>
              <Link to={"#"}>Store</Link>
            </li>
            <li>
              <Link to={"#"}>About</Link>
            </li>
            <li>
              <Link to={"#"}>Services</Link>
            </li>
            <li>
              <Link to={"#"}>Contact</Link>
            </li>
          </ul>
        </article>
      </div>
      <div className="footer__copyright">
        <small>Copyright 2025 EDDOURABI Abderrahmane ❤️</small>
      </div>
    </footer>
  );
};

export default Footer;
