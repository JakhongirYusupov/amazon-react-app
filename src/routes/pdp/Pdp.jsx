import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import c from './Pdp.module.css';
import { BsStarFill, BsStarHalf } from 'react-icons/bs'
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';


const Pdp = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isActiveTracker, setIsActiveTracker] = useState(false)
  const [mousePositionX, setMousePositionX] = useState(0)
  const [mousePositionY, setMousePositionY] = useState(0)
  const { id } = useParams();
  const [singleProductData, setSingleProductData] = useState(null);
  useEffect(() => {
    axios.get(`http://localhost:8000/v2/allproducts/${id}`)
      .then(malumot => setSingleProductData(malumot.data))
  }, [singleProductData])

  return (
    <div>
      <h1>Hello, THIS IS PDP</h1>
      <div>
        {
          singleProductData !== null && singleProductData ?
            <>
              <div className={c.productImage__wrapper}>
                {
                  singleProductData.image.map((productImage, index) =>
                    <div key={productImage.id}>
                      <img style={index === activeImageIndex ? { boxShadow: "0px 0px 5px 2px orange" } : null} onMouseOver={() => { setActiveImageIndex(index) }} src={productImage.url} />
                    </div>
                  )
                }
              </div>
              <div className={c.main__image}>
                <img src={singleProductData.image[activeImageIndex].url} alt="" onMouseLeave={() => { setIsActiveTracker(false) }} onMouseMove={(e) => {
                  setMousePositionX(e.clientX)
                  setMousePositionY(e.clientY)
                  setIsActiveTracker(true)
                }} />
                {isActiveTracker && <div style={{ top: `${mousePositionY - 470}px`, left: `${mousePositionX - 100}px` }} className={c.tracker}></div>}
              </div>
              <div>
                {
                  singleProductData.ratings % 1 === 0 ?
                    new Array(singleProductData.ratings).fill("#").map(star =>
                      <BsStarFill key={uuidv4()} />
                    )
                    :
                    <>
                      {
                        new Array(Math.floor(singleProductData.ratings)).fill("#").map(star =>
                          <BsStarFill key={uuidv4()} />
                        )
                      }
                      <BsStarHalf />
                    </>
                }
              </div>
              {isActiveTracker && <div className={c.preview}></div>}
            </>
            :
            <></>
        }
      </div>
    </div>
  )
}

export default Pdp