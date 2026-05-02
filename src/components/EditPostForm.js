import React, { useState } from "react";

export default function EditPostForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="post">
      <input
        id="postTitle"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        id="postContent"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button>Save</button>
    </div>
  );
}