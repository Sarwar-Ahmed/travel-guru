import React, { useContext, useState } from 'react';
import './Login.css'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';



const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const [ loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: ''
    });

    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/"}};

    const googleSignin = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider)
        .then(res => {
            const {displayName, photoURL, email} = res.user;

            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
                photo: photoURL,
                success: true
            }
            setUser(signedInUser);
            setLoggedInUser(signedInUser);
            history.replace(from);
          })
          .catch(error => {
            console.log(error);
            console.log(error.message);
          })

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
                        </form>
                        <h2 className="text-center text-white">Or</h2>
                        <hr className="w-md-50 bg-white"/>
                        <div className="w-md-50 rounded p-2">
                            <button className="form-control font-weight-bold bg-light"><span><img src="https://iili.io/2xjyBt.png" alt=""className="icon m-1"/></span>Continue with Facebook</button>
                        </div>
                        <div className="w-md-50 rounded p-2">
                            <button onClick={googleSignin} className="form-control font-weight-bold bg-light"><span><img src="https://iili.io/2xw5TQ.png" alt=""className="icon m-1"/></span>Continue with Google</button>
                        </div>

                    </div>
                </div>
            </div>
    );
};

export default Login;