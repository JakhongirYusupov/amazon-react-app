import React, { useEffect, useState } from 'react';
import "./Sidebar.css";
import { FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { BsPersonCircle } from 'react-icons/bs';
import data from '../../data/sidebar-links.json';
import { IoIosArrowForward, IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { v4 as uuidv4 } from 'uuid';
import { Minisidebar } from './Minisidebar';

const Sidebar = ({ isSidebarActive, setIsSidebarActive, isClickCategory, setIsClickCategory }) => {
  const [categories, setcategories] = useState([]);
  const [isSeeAll, setisSeeAll] = useState(false);

  useEffect(() => {
    if (isSidebarActive === false) setisSeeAll(false)
  }, [isSidebarActive])

  return (
    <div className={isSidebarActive === true ? "sidebar sidebaractive" : "sidebar"}>
      <FiX className='sidebarXbutton' onClick={() => {
        setIsSidebarActive(false)
        setIsClickCategory(false)
      }} />
      <Link to='/login' onClick={() => setIsSidebarActive(false)}>
        <div className='sidebarSignIn'>
          <BsPersonCircle className='sidebarSignIn-icon' />
          <p>Hello, sign in</p>
        </div>
      </Link>
      <div className='sidebarNavWrapper'>
        <div className={isClickCategory ? 'sidebarNav sidebarleft' : 'sidebarNav'}>
          <div>
            {
              data.map(({ title, categories }) => {
                if (categories.length < 4) {
                  return (
                    <div className='sidebarNav-link-wrapper' key={uuidv4()}>
                      <h3 className='sidebarNavTitle'>{title}</h3>
                      {
                        categories.map(({ categoryTitle, categories }) => {
                          return (
                            <div className='sidebarNav-link-box' key={uuidv4()} onClick={() => {
                              setcategories(categories)
                              setIsClickCategory(true)
                            }}>
                              <small>{categoryTitle}</small>
                              <IoIosArrowForward className='sidebarNav-link-arrow-icon' />
                            </div>
                          )
                        })
                      }
                    </div>
                  )
                } else {
                  return (
                    <div key={uuidv4()}>
                      <>
                        <div className='sidebarNav-link-wrapper' key={uuidv4()}>
                          <h3 className='sidebarNavTitle'>{title}</h3>
                          {
                            categories.slice(0, 4).map(({ categoryTitle, categories }) => {
                              return (
                                <div className='sidebarNav-link-box' key={uuidv4()} onClick={() => {
                                  setcategories(categories)
                                  setIsClickCategory(true)
                                }}>
                                  <small>{categoryTitle}</small>
                                  <IoIosArrowForward className='sidebarNav-link-arrow-icon' />
                                </div>
                              )
                            })
                          }
                          <div className={isSeeAll ? 'sidebarNav-link-wrapper' : 'sidebarNav-link-wrapper sidebar-see-all-wrapper'}>
                            {
                              categories.slice(4).map(({ categoryTitle, categories }) => {
                                return (
                                  <div className='sidebarNav-link-box' key={uuidv4()} onClick={() => {
                                    setcategories(categories)
                                    setIsClickCategory(true)
                                  }}>
                                    <small>{categoryTitle}</small>
                                    <IoIosArrowForward className='sidebarNav-link-arrow-icon' />
                                  </div>
                                )
                              })
                            }
                          </div>
                          <div className='sidebar-see-all' onClick={() => isSeeAll ? setisSeeAll(false) : setisSeeAll(true)}>
                            <small>See All</small>
                            {
                              isSeeAll ? <IoIosArrowUp className='sidebar-see-all-arrow-icon' />
                                : <IoIosArrowDown className='sidebar-see-all-arrow-icon' />
                            }
                          </div>
                        </div>
                      </>
                    </div>
                  )
                }
              })
            }
          </div>
          <Minisidebar categories={categories} setIsClickCategory={setIsClickCategory} />
        </div>
      </div>
    </div >
  )
}

export default Sidebar