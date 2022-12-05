import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Login.css';
import { auth } from "./firebase";


function Login() {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history('/')
            })
            .catch(e => alert(e.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if(auth){
                    history('/')
                }
            })
            .catch(e => alert(e.message))
    }

  return (
    <div className='login'>
        <NavLink to='/'>
            <img 
                className='login__logo'
                src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.logolynx.com%2Fimages%2Flogolynx%2F56%2F56afea50b83164e3e272d4ebeccd94fb.png&f=1&nofb=1' 
            />
        </NavLink>

        <div className='login__container'>
            <h1>Sign-in</h1>

            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange=
                {e => setEmail(e.target.value)} placeholder='example@email.com'/>

                <h5>Password</h5>
                <input type='password' value={password} 
                onChange={e => setPassword(e.target.value)}
                />
                
                <p><small>If already have an account, SignIn</small></p>

                <button type='submit' onClick={signIn}
                className='login__signInButton'>Login</button>
            </form>

            <p>
                By signing, in you agree to the Terms and conditions of Application. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>

            <div className='register__div'><p><small>New to e-commerce?</small></p></div>

            
            <button onClick={register} className='login__registerButton'>Create E-commerce Account </button>
        </div>

    </div>
  )
}

export default Login


