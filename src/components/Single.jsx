import SinglePost from '../components/SinglePost'
import Sidebar from '../components/SideBar'

import '../../public/style/single.css'


function Single() {
    return (
        <div className='single'>
            <SinglePost />
            <Sidebar />
        </div>
    )
}

export default Single