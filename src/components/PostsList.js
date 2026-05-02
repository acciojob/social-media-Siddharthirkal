import React, { useState } from "react";

let id = 1;

export default function PostsList() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("1");
  const [content, setContent] = useState("");

  const addPost = () => {
    if (!title || !content) return;

    const newPost = {
      id: id++,
      title,
      author,
      content,
      reactions: [0, 0, 0, 0, 0],
    };

    setPosts([newPost, ...posts]);
    setTitle("");
    setContent("");
  };

  const addReaction = (postId, index) => {
    setPosts(
      posts.map((p) => {
        if (p.id === postId && index !== 4) {
          const newReactions = [...p.reactions];
          newReactions[index]++;
          return { ...p, reactions: newReactions };
        }
        return p;
      })
    );
  };

  return (
    <>
      <h2>Create Post</h2>

      <input
        id="postTitle"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <select
        id="postAuthor"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      >
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
      </select>

      <textarea
        id="postContent"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button onClick={addPost}>Add Post</button>

      <div className="posts-list">
        <div></div>

        {posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>

            <div>
              {post.reactions.map((count, i) => (
                <button key={i} onClick={() => addReaction(post.id, i)}>
                  {count}
                </button>
              ))}
            </div>

            <a href={`/posts/${post.id}`}>
              <button className="button">View</button>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}