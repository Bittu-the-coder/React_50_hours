import React from "react";

interface CardProps {
  type: string;
  [key: string]: any;
}

const CardFactory = ({ type, ...props }: CardProps) => {
  switch (type) {
    case "profile":
      return (
        <ProfileCard
          username={undefined}
          bio={undefined}
          profilePic={undefined}
          {...props}
        />
      );
    case "post":
      return (
        <PostCard
          title={undefined}
          content={undefined}
          author={undefined}
          {...props}
        />
      );
    case "comment":
      return <CommentCard author={undefined} content={undefined} {...props} />;
    case "todo":
      return <TodoCard task={undefined} completed={undefined} {...props} />;
    case "image":
      return <ImageCard src={undefined} alt={undefined} {...props} />;
    case "video":
      return <VideoCard src={undefined} title={undefined} {...props} />;
    case "audio":
      return <AudioCard src={undefined} title={undefined} {...props} />;
    case "link":
      return <LinkCard url={undefined} title={undefined} {...props} />;
    case "file":
      return <FileCard fileName={undefined} fileType={undefined} {...props} />;
    default:
      return null;
  }
};

export default CardFactory;

// ProfileCard, PostCard, commentCard, TodoCard, ImageCard, VideoCard, AudioCard, LinkCard, FileCard

const ProfileCard = ({ username, bio, profilePic }) => {
  return (
    <div className="border p-4 rounded">
      <img
        src={profilePic}
        alt={`${username}'s profile`}
        className="w-16 h-16 rounded-full"
      />
      <h2 className="font-bold">{username}</h2>
      <p>{bio}</p>
    </div>
  );
};

const PostCard = ({ title, content, author }) => {
  return (
    <div className="border p-4 rounded">
      <h2 className="font-bold">{title}</h2>
      <p>{content}</p>
      <p className="text-sm text-gray-500">By {author}</p>
    </div>
  );
};

const CommentCard = ({ author, content }) => {
  return (
    <div className="border p-4 rounded">
      <p className="font-bold">{author}</p>
      <p>{content}</p>
    </div>
  );
};

const TodoCard = ({ task, completed }) => {
  return (
    <div className="border p-4 rounded">
      <h2 className="font-bold">{task}</h2>
      <p>Status: {completed ? "Completed" : "Pending"}</p>
    </div>
  );
};

const ImageCard = ({ src, alt }) => {
  return (
    <div className="border p-4 rounded">
      <img src={src} alt={alt} className="w-full h-auto" />
    </div>
  );
};

const VideoCard = ({ src, title }) => {
  return (
    <div className="border p-4 rounded">
      <video controls className="w-full h-auto">
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h2 className="font-bold">{title}</h2>
    </div>
  );
};

const AudioCard = ({ src, title }) => {
  return (
    <div className="border p-4 rounded">
      <audio controls className="w-full">
        <source src={src} type="audio/mp3" />
        Your browser does not support the audio tag.
      </audio>
      <h2 className="font-bold">{title}</h2>
    </div>
  );
};
const LinkCard = ({ url, title }) => {
  return (
    <div className="border p-4 rounded">
      <a href={url} className="font-bold">
        {title}
      </a>
    </div>
  );
};

const FileCard = ({ fileName, fileType }) => {
  return (
    <div className="border p-4 rounded">
      <p className="font-bold">{fileName}</p>
      <p>Type: {fileType}</p>
    </div>
  );
};
