const LikeButton = ({ isLiked, onToggleLike }) => {
    return (
      <button
        className={`like-button ${isLiked ? 'liked' : ''}`}
        onClick={onToggleLike}
      >
        {isLiked ? 'Unlike' : 'Like'}
      </button>
    );
  };
  
  export default LikeButton;