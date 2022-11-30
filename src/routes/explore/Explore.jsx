import React from 'react'
import { useState, useEffect } from 'react'
import { BsStarFill, BsStarHalf } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import c from './Explore.module.css';

const Explore = () => {

  const [productData, setProductData] = useState([])

  useEffect(() => {
    fetch("http://localhost:8000/v2/allproducts")
      .then(response => response.json())
      .then(data => setProductData(data))
  }, [])

  console.log(productData);

  return (
    <div className={c.Explore}>
      <div className={c.products__wrapper}>
        {
          productData.length ?
            productData.map(({ image, description, _id, ratings, price }) =>
              <div key={_id} className={c.products__item__wrapper}>
                <Link className={c.products__item} to={`/explorenow/${_id}`}>
                  <img className={c["products__item-img"]} src={image[0].url} alt="" />
                  <div className={c.products__item__main}>
                    <p>{description}</p>
                    <div>
                      {
                        ratings % 1 === 0 ?
                          new Array(ratings).fill("#").map(star =>
                            <BsStarFill className={c["products__item__main-starIcon"]} key={uuidv4()} />
                          )
                          :
                          <>
                            {
                              new Array(Math.floor(ratings)).fill("#").map(star =>
                                <BsStarFill className={c["products__item__main-starIcon"]} key={uuidv4()} />
                              )
                            }
                            <BsStarHalf className={c["products__item__main-starIcon"]} />
                          </>
                      }
                    </div>
                  </div>
                  <strong className={c.products__item__main__cost}>${price}</strong>
                </Link>
              </div>
            )
            : null
        }
      </div>
    </div>
  )
}

export default Explore