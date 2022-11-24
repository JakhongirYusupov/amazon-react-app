import React from 'react';
import collectionData from '../../data/dummy-data-collection.json';
import ProductCard from '../product-card/ProductCard';
import { v4 as uuidv4 } from 'uuid';
import c from "./Main.module.css";
import { Maincorusel } from '../main-corusel/Maincorusel';

const Main = () => {
  return (
    <div className={c.main}>
      <div className={c.mainProducts}>
        {
          collectionData.map(collectionItem =>
            <ProductCard key={uuidv4()} linkLabel={collectionItem.linkLabel} linkURL={collectionItem.linkURL} image={collectionItem.image} title={collectionItem.title} />
          )
        }
      </div>
      <Maincorusel />
      <div className={c.mainProducts}>
        {
          collectionData.map(collectionItem =>
            <ProductCard key={uuidv4()} linkLabel={collectionItem.linkLabel} linkURL={collectionItem.linkURL} image={collectionItem.image} title={collectionItem.title} />
          )
        }
      </div>
    </div>
  )
}

export default Main