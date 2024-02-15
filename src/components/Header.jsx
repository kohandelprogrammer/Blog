import '../../public/style/header.css'

function Header() {
    return (
        <div className='header'>
            <div className='headerTitle'>

                <span className='headerTitleSm'>React</span>
                <span className='headerTitleLg'>Blog</span>

            </div>
            <img className='headerImg' src="https://wallpaperaccess.com/full/1412378.jpg" />
        </div>
    )
}

export default Header