import Header from '../components/Header'
import SideBar from '../components/SideBar'
import Posts from '../components/Posts'

import '../../public/style/home.css'

function Home() {
    return (
        <>
            <Header />
            <div className='home'>
                <Posts />
                <SideBar />

            </div>
        </>
    )
}

export default Home