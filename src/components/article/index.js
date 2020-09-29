import React, { useState, useContext, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import Image from 'react-bootstrap/Image';
import styles from './index.module.css';
import Button from 'react-bootstrap/Button';
import RESTAPI from '../../REST API';
import setLikes from './setLikes';
import getAllComments from './getAllComments';
import UserContext from '../../Context';

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
    console.log(e.target.parentNode.children);
    e.target.parentNode.children[3].value = '';

    objectId = e.target.parentNode.id;
    let comments = await getAllComments(objectId, comment);
    commentsToDisplay = comments.split(',');
    setDisplayComments(commentsToDisplay);
  };

  return (
    <div id={objectId} className={styles.singlePublication}>
      <Image className={styles.image} src={imageURL} fluid />
      <p className={styles.text}>{description}</p>
      <button
        onClick={(e) =>
          setLikes(e, clickedLikes, setCountLikes, objectId, likes)
        }
        id="btn"
      >
        ♡
      </button>
      <div>
        Likes: {likes + clickedLikes}
        <p className={styles.user}>{ownerName}</p>
        <div className={styles.comment}>
          {commentsToDisplay.length !== 0 ? currentUser + ': ' : null}
          {commentsToDisplay[commentsToDisplay.length - 2]}
        </div>
        <button className={styles.viewCommentsBtn}>View All Comments</button>
      </div>
      <input
        id="commentInput"
        className={styles.commentInput}
        type="text"
        placeholder="comment..."
        onChange={(e) => setAddComment(e.target.value)}
      />
      {locator.pathname === '/myStories' ? (
        <Button
          variant="outline-danger"
          className={styles.delete}
          onClick={deleteStory}
        >
          Delete
        </Button>
      ) : (
        <Button variant="outline-info" onClick={submitComment}>
          add comment:
        </Button>
      )}
    </div>
  );
};

export default Article;
