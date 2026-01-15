import React, { useMemo } from "react";
import PostItem from "./PostItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const PostList = function ({ posts, title, remove }) {
    const nodeRefs = useMemo(() =>
        posts.map(() => React.createRef()),
        [posts]
    );

    if (!posts.length) {
        return (
            <h1 style={{ textAlign: 'center' }}>
                Посты не найдены!
            </h1>
        )
    }

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>
                {title}
            </h1>
            <TransitionGroup>
                {posts.map((post, index) => (
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                        nodeRef={nodeRefs[index]}
                    >
                        <PostItem
                            ref={nodeRefs[index]}
                            remove={remove}
                            number={index + 1}
                            post={post}
                        />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </div>
    )
}

export default PostList;