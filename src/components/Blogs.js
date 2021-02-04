import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import { selectUserInput, setBlogData } from '../features/userSlice';
import SearchInput from './SearchInput';
import '../styles/Blogs.css';

const Blogs = () => {
    const searchInput = useSelector(selectUserInput);
    
    const API_TOKEN = 'afc5c630b163a435d74d886c50ac97ba';
    const blog_url = `https://gnews.io/api/v4/search?q=${searchInput}&token=${API_TOKEN}`;
    
    const dispatch = useDispatch();
    const [blogs, setBlogs] = useState({});

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(blog_url)
            .then((response) => {
                dispatch(setBlogData(response.data))
                setBlogs(response.data)
                setLoading(false)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [searchInput]);

    return (
        <div className="blog__page">
            <SearchInput />
            <div className="blog__page__header">Blogs</div>
            {loading ? <h1 className="loading">Loading...</h1> : ""}
            <div className="blogs">
                {blogs?.articles?.map((blog) => (
                    <a className="blog" target="_blank" href={blog.url}>
                        <img src={blog.image}></img>
                        <div>
                            <h3 className="sourceName">
                                <span>{blog.source.name}</span>
                                <p>{blog.publishedAt}</p>
                            </h3>
                            <h1>{blog.title}</h1>
                            <p>{blog.description}</p>
                        </div>
                    </a>
                ))}
                {blogs?.totalArticles == 0 && (
                    <h1 className="no__blogs">
                        No blogs available. Please search again.
                    </h1>
                )}
            </div>
        </div>
    )
}

export default Blogs;
