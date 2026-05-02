import React from "react";
import { useParams } from "react-router-dom";

export default function SinglePostPage() {
  const { postId } = useParams();

  return (
    <div className="post">
      <h2>Post {postId}</h2>

      <a href={`/editPost/${postId}`}>
        <button className="button">Edit</button>
      </a>
    </div>
  );
}