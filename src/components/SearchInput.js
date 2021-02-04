import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { setInput } from '../features/userSlice';
import '../styles/SearchInput.css';


const SearchInput = () => {
    const [inputValue, setInputValue] = useState("tech");

    const dispatch = useDispatch();
    const handleClick = (e) => {
        e.preventDefault();
        dispatch(setInput(inputValue));
    }

    return (
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
}

export default SearchInput;
