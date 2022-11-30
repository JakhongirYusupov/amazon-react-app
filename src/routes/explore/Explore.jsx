import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const Explore = () => {

  const [productData, setProductData] = useState([])

  useEffect(() => {
    fetch("http://localhost:8000/v2/allproducts")
      .then(response => response.json())
      .then(data => setProductData(data))
  }, [])


  return (
    <div>
      {
        productData.length ?
          productData.map(({ image, name, _id }) =>
            <article key={_id}>
              <h1>{name}</h1>
              <img src={image[0].url} alt="" />
              <Link to={`/explorenow/${_id}`}>Learn more</Link>
            </article>
          )
          : null
      }
    </div>
  )
}

export default Explore