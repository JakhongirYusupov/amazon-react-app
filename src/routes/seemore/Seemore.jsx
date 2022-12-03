import { useEffect, useState } from 'react';
import collectionData from '../../data/dummy-data-collection.json';
import c from './Seemore.module.css';

export default function Seemore() {
  const [data, setData] = useState(null);
  useEffect(() => {
    setData(collectionData.filter(e => e.linkLabel === "See more"))
  }, [])
  return (
    <div className={c.seeMore}>
      <div className={c.titleWrapper}>
        <h1>Featured Categories</h1>
      </div>
      <div className={c.grid}>
        {
          data ?
            data.map((data) => {
              return (
                <>
                  {
                    data.image.map(({ imageURL, subtitle }) => {
                      return (
                        <div className={c.gridItem}>
                          <img src={imageURL} alt="" />
                          <p>{subtitle}</p>
                        </div>
                      )
                    })
                  }
                </>
              )
            })
            :
            null
        }
      </div>
    </div>
  )
}
