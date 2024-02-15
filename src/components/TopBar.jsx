import React from 'react'

import FaceBook from '../../public/icons/FaceBook'
import Twitter from '../../public/icons/Twitter'
import Pinterest from '../../public/icons/Pinterest'
import Instagram from '../../public/icons/Instagram'
import Search from '../../public/icons/Search'

import '../../public/style/topbar.css'

function TopBar() {
    return (
        <div className='top'>
            <div className='topLeft'>
                <FaceBook />
                <Twitter />
                <Pinterest />
                <Instagram />
            </div>

            <div className='topCenter'>
                <ul className="topList">
                    <li className='topListItem'>HOME</li>
                    <li className='topListItem'>ABOUT</li>
                    <li className='topListItem'>CONTACT</li>
                    <li className='topListItem'>WRITE</li>
                    <li className='topListItem'>LOGIN</li>
                </ul>
            </div>

            <div className='topRight'>
                <img className="topImage" src="https://www.violinschool.com/wp-content/uploads/2020/04/Morning-Has-Broken-600px-400px.jpg" alt="" />
                <Search />
            </div>
        </div>
    )
}

export default TopBar