import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import GoogleLogin from 'react-google-login';
import { selectSignedIn, setSignedIn, setUserData } from '../features/userSlice';
import '../styles/Home.css'

const Home = () => {
    const dispatch = useDispatch();

    const login = (response) => {
        dispatch(setSignedIn(true));
        dispatch(setUserData(response.profileObj));
    }

    const isSignedIn = useSelector(selectSignedIn);

    return (
        <div className="home__page" style={{display: isSignedIn ? "none" : ""}}>
            {!isSignedIn ?
                (<div className="login__message">
                    <h1>A reader's favorite place!</h1>
                    <p>
                        We provide high quality online resource for reading
                        blogs. Just sign up and start reading...
                    </p>
                    <GoogleLogin
                        clientId="980174412224-iv4d38r5rc6bg9vl6fb0lsuh9pjvdsr4.apps.googleusercontent.com"
                        render={(renderProps) => (
                            <button
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                className="login__button"
                            >
                                Login with Google
                            </button>
                        )}
                        onSuccess={login}
                        onFailure={login}
                        isSignedIn={true}
                        cookiePolicy={"single_host_origin"}
                    >
                    </GoogleLogin>
                </div>)
                :
                (
                    ""
                )
            }
        </div>
    )
}

export default Home;