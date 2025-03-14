import { useState } from 'react';
import LikeButton from './likebutton'; 
import './PostCard.css'; 

function PostCard({ post }) {
  const [isLiked, setIsLiked] = useState(post.isLiked); // set initial state from post

  const toggleLike = () => {
    setIsLiked(!isLiked); 
  };

  return (
    <div className="post-card">
      <div className="post-header">
        <img src={post.profileImage} alt={post.username} className="profile-image" />
        <h3 className="username">{post.username}</h3>
      </div>
      <p className="post-content">{post.content}</p> {/* Match this class name to CSS */}
      <LikeButton isLiked={isLiked} onToggleLike={toggleLike} />
    </div>
  );
}

export default PostCard;
