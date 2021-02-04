import {Avatar} from '@material-ui/core';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { GoogleLogout } from 'react-google-login';
import { setSignedIn, selectSignedIn, selectUserData, setUserData, setInput } from '../features/userSlice';
import '../styles/Navbar.css';

const Navbar = () => {
    const isSignedIn = useSelector(selectSignedIn);
    // const [inputValue, setInputValue] = useState("tech");
    const userData = useSelector(selectUserData);
    
    const dispatch = useDispatch();
    const logout = (response) => {
        dispatch(setSignedIn(false));
        dispatch(setUserData(null));
    }

    // const handleClick = (e) => {
    //     e.preventDefault();
    //     dispatch(setInput(inputValue));
    // }

    return (
        <div className="navbar">
            <h1 className="navbar__header">
                Blogmania
            </h1>
            {/* {isSignedIn &&
                (
                    <div className="blog__search">
                        <input 
                            className="search"
                            placeholder="Search for a blog"
                            value={inputValue}
                            onChange={(e) => {setInputValue(e.target.value)}}
                        >
                        </input>
                        <button className="submit" onClick={handleClick}>
                            Search
                        </button>
                    </div>
                )
            } */}
            {isSignedIn ?
                (
                    <div className="navbar__user__data">
                        <Avatar 
                            className="user"
                            src={userData?.imageUrl} 
                            alt={userData?.name}
                        />
                        <h1 className="singedIn">{userData?.givenName}</h1>
                        <GoogleLogout 
                            clientId="980174412224-iv4d38r5rc6bg9vl6fb0lsuh9pjvdsr4.apps.googleusercontent.com"
                            render={(renderProps) => (
                                <button
                                    onClick={renderProps.onClick}
                                    disabled={renderProps.disabled}
                                    className="logout__button"
                                >
                                    Logout
                                </button>
                            )}
                            onLogoutSuccess={logout}
                        />
                    </div>
                ):
                (
                    <h1 className="notSignedIn"></h1>
                )
            }
        </div>
    )
}

export default Navbar
