import '../../public/style/login.css'

function Login() {
    return (
        <div className='login'>

            <form className="loginForm">

                <span className="loginTitle">Login</span>
                <label>Email</label>
                <input className='loginInput' type="text" placeholder='Enter your Email...' />
                <label htmlFor='pass'>Password</label>
                <input className='loginInput' type="password" id='pass' placeholder='Enter your Password...' />
                <button className="loginButton">Login</button>
            </form>

            <button className="loginRegisterButton">Register</button>

        </div>
    )
}

export default Login