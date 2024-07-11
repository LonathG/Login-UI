import './Login.css';
import { FaUser } from "react-icons/fa";
import { FaUnlockAlt } from "react-icons/fa";



function Form() {
    return (
        <>
        <div className="Login-Container">
            <form action="" method="post">

                <h1>Student Login</h1>

                <div className="Input-Box">
                <input type="text" placeholder='username' required></input>
                <FaUser className='Icon'/>
                </div>

                <div className="Input-Box">
                <input type="password" placeholder='password' required></input>
                <FaUnlockAlt className='Icon'/>
                </div>

                <div className="forget-remember">
                    <label><input type="checkbox"></input>Remember Me</label>
                    <a href="#">Forget Password</a>
                </div>

                <button type="submit">Login</button>

                <div className="register-link">
                    <p>Don't have an account? <a href="#">Register</a></p>
                </div>

            </form>
        </div>
        </>
    );
}

export default Form;