import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';


export const Minisidebar = ({ categories, setIsClickCategory }) => {
  return (
    <div className='sidebarNav-link-wrapper' key={uuidv4()}>
      <div className='miniSideBar-title' onClick={() => setIsClickCategory(false)}>
        <HiArrowNarrowLeft className='miniSideBar-title-arrow-icon' />
        <p>MAIN MENU</p>
      </div>
      {
        categories.length ?
          categories.map(({ title, categories }) => {
            return (
              <div className='sidebarNav-link-wrapper-box' key={uuidv4()}>
                <h3 className='sidebarNavTitle'>{title}</h3>
                {
                  categories.map(({ title, link }) => {
                    return (
                      <div className='sidebarNav-link-box' key={uuidv4()}>
                        <Link to={link}>{title}</Link>
                      </div>
                    )
                  })
                }
              </ div>
            )
          })
          : null
      }
    </div>
  )
}
