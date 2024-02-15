import SideBar from '../components/SideBar'
import User from '../../public/icons/User'

import '../../public/style/setting.css'

function Setting() {

    return (

        <div className='setting'>

            <div className="settingWrapper">

                <div className="settingTitle">
                    <span className="settingUpdateTitle">Update Your Account</span>
                    <span className="settingDeleteTitle">Delete Account</span>
                </div>

                <div className="settingForm">

                    <label>Profile Picture</label>
                    <div className="settingPP">

                        <img src="https://wallpapers.com/images/featured/beautiful-moon-pictures-2d0yictkqlz5mxsd.jpg" alt="" />
                        <label htmlFor="fileInput">
                            <User />
                        </label>
                        <input type="file" id='fileInput' style={{ display: 'none' }} />

                        <label htmlFor='username'>Username</label>
                        <input type="text" id='username' />

                        <label htmlFor='email'>Email</label>
                        <input type="email" placeholder='@gmail.com' id='email' />

                        <label htmlFor='password'>Password</label>
                        <input type="password" id='password' />

                        <button className="settingSubmit">Update</button>
                    </div>

                </div>

            </div>

            <SideBar />

        </div>
    )
}

export default Setting