import { useState, useEffect } from 'react'
import PostsContainer from './PostsContainer';
import PostForm from './PostForm';

export default function FakeApiApp() {
    const URL = "https://jsonplaceholder.typicode.com/posts";

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [newPost, setNewPost] = useState({
        title: "",
        body: ""
    });

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        setIsLoading(true);
        const response = await fetch(URL);
        const posts = await response.json();
        setData(posts);
        setIsLoading(false);
    };

    const handleChange = (e) => {
        setNewPost({
            ...newPost,
            [e.target.name]: e.target.value
        });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        setData([newPost, ...data]);
        setNewPost({ title: "", body: ""});
    }


    return (
        <div className='ApiApp'>
            <h1>Fake API Posts</h1>
            {isLoading && <h1>Loading...</h1>}
            <PostForm 
                title={newPost.title}
                body={newPost.body}
                handleChange={handleChange}
                handleSubmit={handleFormSubmit}
            />
            <PostsContainer posts={data} />
        </div>
    );


}