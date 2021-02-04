import React from 'react';
import {useSelector} from 'react-redux';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Blogs from './components/Blogs';
import './App.css';
import { selectSignedIn } from './features/userSlice';

const App = () => {
    const isSignedIn = useSelector(selectSignedIn);
    return (
        <div className="app">
            <Navbar />
            <Home />
            {isSignedIn && 
                <Blogs />
            }
        </div>
    );
}

export default App;