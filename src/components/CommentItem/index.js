// Write your code here
import './index.css'

const CommentItem = props => {
  const {commentDetails, toggleLike, commentDelete} = props
  const {id, name, comment, isLike, dateTime, logoColor} = commentDetails

  const initialLetter = name[0]

  const clickLike = () => {
    toggleLike(id)
  }

  const deleteComment = () => {
    commentDelete(id)
  }

  const likeImage = isLike
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const likeColor = isLike ? 'blue-like' : 'grey-like'

  return (
    <li className="comment-container">
      <div className="comment-section">
        <div className={`intial-logo ${logoColor}`}>
          <p className="intial-letter">{initialLetter}</p>
        </div>
        <div>
          <div className="comments-details">
            <h1 className="user-name">{name}</h1>
            <p className="date-time"> {dateTime}</p>
          </div>
          <p className="comment-text">{comment} </p>
        </div>
      </div>
      <div className="like-delete-section">
        <div className="like-container">
          <img src={likeImage} alt="like" onClick={clickLike} />
          <button
            type="button"
            className={`like-text ${likeColor}`}
            onClick={clickLike}
          >
            Like
          </button>
        </div>
        <button
          type="button"
          className="delete-button"
          data-testid="delete"
          onClick={deleteComment}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
