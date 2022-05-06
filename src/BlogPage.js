import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function BlogPage(props) {
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const { postId } = useParams();

    useEffect(() => {
        async function getPost() {
            const url =
                'https://serene-headland-84051.herokuapp.com/posts/' + postId;
            const postData = await fetch(url);
            const postJson = await postData.json();
            setPost(postJson.blogpost);
            setComments(postJson.comments);
            console.log(post, comments);
        }
        getPost();
    }, [postId]);

    return (
        <div className="blogpage" id={post._id}>
            <div id="post">
                <h1>{post.title}</h1>
                <p>{post.content}</p>
                <p>{post.timestamp}</p>
            </div>
            <div id="comments">
                {comments.map((comment) => (
                    <div className="comment" id={comment._id}>
                        <h4>{comment.name}</h4>
                        <p>{comment.content}</p>
                        <p>{comment.timestamp}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
