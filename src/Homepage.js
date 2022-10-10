import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import React from 'react';

export default function Homepage(props) {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        async function getPosts() {
            const postsData = await fetch(
                'https://serene-headland-84051.herokuapp.com/'
            );
            const postsJson = await postsData.json();
            setPosts(postsJson);
        }
        getPosts();
    }, []);

    return (
        <div id="homepage">
            <h1>Mykyta Medvediev's blog</h1>
            <h3>Posts:</h3>
            <div id="posts">
                <Posts posts={posts} />
            </div>
        </div>
    );
}

function Post(props) {
    return (
        // <div className="post">
        <Link className="post" to={'/posts/' + props._id}>
            {props.title}
        </Link>
        // </div>
    );
}

function Posts(props) {
    return (
        <>
            {props.posts
                .filter((post) => post.published === true)
                .map((post) => (
                    <Post key={post._id} _id={post._id} title={post.title} />
                ))}
        </>
    );
}
