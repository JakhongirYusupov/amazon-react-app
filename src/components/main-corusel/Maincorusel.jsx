import React, { useEffect, useRef, useState } from 'react';
import c from './Maincorusel.module.css';
import data from '../../data/main-corusel-images.json';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';


export const Maincorusel = () => {
    const [Scroll, setScroll] = useState(0);
    const scrollDiv = useRef();

    useEffect(() => {
        scrollDiv.current.scrollLeft = Scroll
    }, [Scroll])
    return (
        <div className={c.mainCoruselWrapper}>
            <article className={c.mainCoruselTitleBox}>
                <h1>Top Sellers in Books for you</h1>
            </article>
            <button type="left" className={c.scrollButton} onClick={() => setScroll((e) => e > 0 ? e - scrollDiv.current.offsetWidth - 100 : null)}><RiArrowLeftSLine className={c.buttonArrow} /></button>
            <div className={c["main-corusel"]} ref={scrollDiv}>
                <div className={c["main-corusel-images-wrapper"]}>
                    {
                        data.map(({ imageUrl, link }) => {
                            return (
                                <Link className={c["main-corusel-image-box"]} to={link} key={uuidv4()}>
                                    <img src={imageUrl} alt="error" />
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
            <button type='right' className={c.scrollButton} onClick={() => setScroll((e) => e < 4500 ? e + scrollDiv.current.offsetWidth - 100 : e)}><RiArrowRightSLine className={c.buttonArrow} /></button>
        </div>
    )
}
