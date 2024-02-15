import FaceBook from '../../public/icons/FaceBook'
import Twitter from '../../public/icons/Twitter'
import Pinterest from '../../public/icons/Pinterest'
import Instagram from '../../public/icons/Instagram'

import '../../public/style/sidebar.css'

function SideBar() {
    return (
        <div className='sidebar'>

            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk7qoE6Rijkru2x0nGx97UGUfhPRMxHLa7vtpilm7flmyCjhl4-lGIO1z8Y_oasW3vmac&usqp=CAU" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, corrupti ratione, obcaecati enim officia aliquam, alias itaque quisquam officiis consequatur deleniti a odit dolore sapiente? Necessitatibus maxime velit odio at!</p>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORISE</span>
            </div>

            <ul className="sidebarList">
                <li className="sidebarListItem">LIFE</li>
                <li className="sidebarListItem">MUSIC</li>
                <li className="sidebarListItem">STYLE</li>
                <li className="sidebarListItem">SPORT</li>
                <li className="sidebarListItem">TEC</li>
                <li className="sidebarListItem">CINEMA</li>
            </ul>

            <div className="sidebarItem">
                <span className='sidebarTitle'>FOLLOW US</span>
            </div>

            <div className="sidebarSocial">
                <FaceBook />
                <Twitter />
                <Pinterest />
                <Instagram />
            </div>

        </div>
    )
}

export default SideBar