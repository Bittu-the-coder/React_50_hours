import React from "react";

interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
}

interface CommentsListProps {
  comments: Comment[] | null;
}

const CommentsList = ({ comments }: CommentsListProps) => {
  return (
    <>
      {comments ? (
        comments.map((c) => {
          return (
            <div key={c.id}>
              <h3>{c.name}</h3>
              <p>{c.email}</p>
              <p>{c.body}</p>
            </div>
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default CommentsList;
