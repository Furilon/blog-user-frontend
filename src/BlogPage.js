import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function BlogPage(props) {
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    const { postId } = useParams();

    const BASE_URL = 'https://serene-headland-84051.herokuapp.com/posts/';

    useEffect(() => {
        async function getPost() {
            const url = BASE_URL + postId;
            const postData = await fetch(url);
            const postJson = await postData.json();
            setPost(postJson.blogpost);
            setComments(postJson.comments);
        }
        getPost();
    }, [postId]);

    const handleChange = (e) => {
        if (e.target.id === 'name') {
            setName(e.target.value);
        } else if (e.target.id === 'content') {
            setContent(e.target.value);
        }
    };

    const postComment = (e) => {
        axios
            .post(`${BASE_URL}/${postId}/comment`, {
                name,
                content,
            })
            .then((response) => console.log(response))
            .then((response) => window.location.reload(false));
    };

    return (
        <div className="blogpage" id={post._id}>
            <div id="post">
                <h1>{post.title}</h1>
                <p>{post.content}</p>
                <p>{post.timestamp}</p>
            </div>
            <div id="comments">
                {comments.map((comment) => (
                    <div className="comment" key={comment._id} id={comment._id}>
                        <h4>{comment.name}</h4>
                        <p>{comment.content}</p>
                        <p>{comment.timestamp}</p>
                    </div>
                ))}
            </div>
            <div id="comment-form">
                <form action={`${BASE_URL}/${postId}/comment`} method="POST">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="content">Comment:</label>
                    <input
                        type="textarea"
                        name="content"
                        id="content"
                        onChange={handleChange}
                        required
                    />
                    <button type="button" onClick={postComment}>
                        Post
                    </button>
                </form>
            </div>
        </div>
    );
}
