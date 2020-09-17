import React, { useContext, useState } from 'react';
import './Login.css'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { Link } from '@material-ui/core';



const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const [ loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: ''
    });

    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/"}};

    const googleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider)
        .then(res => {
            const {displayName, email} = res.user;

            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
                success: true
            }
            setUser(signedInUser);
            setLoggedInUser(signedInUser);
            history.replace(from);
          })
          .catch(error => {
            console.log(error);
            console.log(error.message);
          });

    }
    const fbSignIn = () => {
        var fbProvider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(fbProvider)
        .then(res => {
            const signedInUser = {
                isSignedIn: true,
                email: res.email,
                success: true
            }
            setUser(signedInUser);
            setLoggedInUser(signedInUser);
            history.replace(from);
          })
          .catch(error => {
            console.log(error);
            console.log(error.message);
          });

    }

    return (
            <div className="container-fluid">
                <div className="container">
                    <div className="loginContainer bg">
                        <form className="w-md-50 bg-white rounded p-5 mt-5">
                            <h2 className="mb-3">Login</h2>
                            <input type="text" className="form-control font-weight-bold bg-light" id="formGroupExampleInput" placeholder="Username or Email" />

                            <input type="text" className="form-control font-weight-bold bg-light" id="formGroupExampleInput" placeholder="Password" />

                            <input type="submit" className="bookingButton w-100 p-2 mt-3" value="Login" />
                            <div className="d-flex">
                                <input type="checkbox" className="mt-1"/><label htmlFor="remember" className="mr-auto font-wight-bold">Remember Me</label>
                                <Link to="/" className="text-warning font-wight-bold">Forgot password</Link>
                            </div>
                        </form>
                        <h2 className="text-center text-white">Or</h2>
                        <hr className="w-md-50 bg-white"/>
                        <div className="w-md-50 rounded p-2">
                            <button onClick={fbSignIn} className="form-control font-weight-bold bg-light"><span><img src="https://iili.io/2xjyBt.png" alt=""className="icon m-1"/></span>Continue with Facebook</button>
                        </div>
                        <div className="w-md-50 rounded p-2">
                            <button onClick={googleSignIn} className="form-control font-weight-bold bg-light"><span><img src="https://iili.io/2xw5TQ.png" alt=""className="icon m-1"/></span>Continue with Google</button>
                        </div>

                    </div>
                </div>
            </div>
    );
};

export default Login;