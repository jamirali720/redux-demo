import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../Features/postsSlice';

const PostsView = () => {
    const {isLoading, error, posts} = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])
    return (
        <div>
            {isLoading && <h1> Loading...</h1>}
            {error && <h1>  {error} </h1>}

            <section>
                {
                    posts && posts.map(post => {
                        return <article key={post.id}>
                            <h2>{post.id}</h2>
                            <h2>{post.title}</h2>
                        </article>
                    })
                }
            </section>
        </div>
    );
};

export default PostsView;