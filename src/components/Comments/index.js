import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import {formatDistanceToNow} from 'date-fns'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

const commentsList = []

class Comments extends Component {
  state = {
    initialCommentsList: commentsList,
    inputText: '',
    comment: '',
    count: 0,
  }

  onChangeInputName = event => {
    this.setState({inputText: event.target.value})
  }

  onChangeTextArea = event => {
    this.setState({comment: event.target.value})
  }

  addComment = event => {
    event.preventDefault()
    const {inputText, comment} = this.state
    const dateTime = formatDistanceToNow(new Date())
    const eachColor = Math.floor(
      Math.random() * initialContainerBackgroundClassNames.length,
    )
    const newComment = {
      id: uuidv4(),
      logoColor: initialContainerBackgroundClassNames[eachColor],
      name: inputText,
      comment,
      isLike: false,
      dateTime,
    }

    this.setState(prevStat => ({
      initialCommentsList: [...prevStat.initialCommentsList, newComment],
      inputText: '',
      comment: '',
      count: prevStat.count + 1,
    }))
  }

  toggleLike = id => {
    this.setState(prevStat => ({
      initialCommentsList: prevStat.initialCommentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLike: !eachComment.isLike}
        }
        return eachComment
      }),
    }))
  }

  commentDelete = id => {
    const {initialCommentsList} = this.state
    this.setState(prevStat => ({
      initialCommentsList: prevStat.initialCommentsList.filter(
        eachComment => id !== eachComment.id,
      ),
      count: initialCommentsList.length - 1,
    }))
  }

  render() {
    const {initialCommentsList, inputText, comment, count} = this.state
    const eachColor = Math.floor(
      Math.random() * initialContainerBackgroundClassNames.length,
    )
    return (
      <div className="comments-bg">
        <div className="comments-top-section">
          <form onSubmit={this.addComment}>
            <div className="comments-container">
              <h1 className="comments-title">Comments</h1>
              <p className="comments-para">
                Say something about 4.0 Technologies
              </p>

              <input
                type="text"
                placeholder="Your Name"
                className="text-input"
                value={inputText}
                onChange={this.onChangeInputName}
              />
              <textarea
                rows="6"
                cols="30"
                placeholder="Your Comment"
                value={comment}
                className="text-area"
                onChange={this.onChangeTextArea}
              />
              <button type="submit" className="add-comment-button">
                Add Comment
              </button>
            </div>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png "
            alt="comments"
            className="comments-image"
          />
        </div>

        <hr className="hr-line" />
        <div className="comments-count">
          <div className="count-box">
            <p className="count">{count}</p>
          </div>
          <p className="comments-para">{Comments}</p>
        </div>

        <ul className="comments-list">
          {initialCommentsList.map(eachComment => (
            <CommentItem
              commentDetails={eachComment}
              key={eachComment.id}
              logoColors={initialContainerBackgroundClassNames[eachColor]}
              toggleLike={this.toggleLike}
              commentDelete={this.commentDelete}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
