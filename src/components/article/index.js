import React, { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';

import Image from 'react-bootstrap/Image';
import styles from './index.module.css';
import Button from 'react-bootstrap/Button';
import RESTAPI from '../../REST API';
import setLikes from './setLikes';
import getAllComments from './getAllComments';
import UserContext from '../../Context';
import commentsField from './commentsField';

const Article = ({ imageURL, description, ownerName, likes, objectId }) => {
  const [clickedLikes, setCountLikes] = useState(0);
  let [comment, setAddComment] = useState('');
  let [commentsToDisplay, setDisplayComments] = useState([]);

  const locator = useLocation();
  const context = useContext(UserContext);
  const currentUser = context.user.username;

  const deleteStory = async (e) => {
    const id = e.target.parentNode.id;

    await fetch(RESTAPI.name + `data/data/${id}`, {
      method: 'DELETE',
    });
  };

  const submitComment = async (e) => {
    if (e.target.parentNode.children[6].value.length === 0) {
      return;
    }
    e.target.parentNode.children[6].value = '';
    objectId = e.target.parentNode.id;
    let comments = await getAllComments(objectId, comment);
    commentsToDisplay = comments.split(',');
    setDisplayComments(commentsToDisplay);
  };

  return (
    <div id={objectId} className={styles.singlePublication}>
      <Image className={styles.image} src={imageURL} fluid />
      <p className={styles.user}>{ownerName}</p>
      <p className={styles.text}>{description}</p>
      <div className={styles.likesWrapper}>
        <button
          className={styles.likesBtn}
          onClick={(e) =>
            setLikes(e, clickedLikes, setCountLikes, objectId, likes)
          }
          id="btn"
        >
          ♡
        </button>
        Likes: {likes + clickedLikes}
      </div>
      <div className={styles.comment}>
        {commentsToDisplay.length !== 0 ? currentUser + ': ' : null}
        {commentsToDisplay[commentsToDisplay.length - 2]}
      </div>
      <div>
        <button
          onClick={(e) => commentsField(e)}
          className={styles.viewCommentsBtn}
        >
          View All Comments
        </button>
      </div>

      {locator.pathname === '/myStories' ? (
        <Button
          variant="outline-danger"
          className={styles.delete}
          onClick={deleteStory}
        >
          Delete
        </Button>
      ) : (
        <div>
          <input
            id="commentInput"
            className={styles.commentInput}
            type="text"
            placeholder="comment..."
            onChange={(e) => setAddComment(e.target.value)}
          />
          <Button variant="outline-info" onClick={submitComment}>
            add comment:
          </Button>
        </div>
      )}
    </div>
  );
};

export default Article;
