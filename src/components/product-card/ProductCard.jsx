import React from 'react';
import c from "./ProductCard.module.css";
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const ProductCard = ({ image, title, linkLabel, linkURL }) => {
  return (
    <div className={c["product-card"]}>
      <h2>{title}</h2>
      {
        typeof image === "string" ?
          <img className={c.productCardImage} src={image} alt="" />
          :
          <div className={c.productCardGrid}>
            {
              image.map(productImage =>
                <Link to={productImage.imageRedirect} className={c.productCardGridItem} key={uuidv4()}>
                  <img src={productImage?.imageURL} alt="" />
                  <small>{productImage.subtitle}</small>
                </Link>
              )
            }
          </div>
      }
      <a className={c.productCardLink} href={linkURL}>{linkLabel}</a>
    </div>
  )
}

export default ProductCard