import React from 'react';
import getAllComments from './getAllComments';

export default async (e) => {
  const currentComments = e.target.parentNode.parentNode;
  const id = e.target.parentNode.parentNode.id;
  let comments = await getAllComments(id);
  const commentsField = document.createElement('div');

  if (!comments) {
    comments = 'NO COMMENTS!';
    commentsField.style.lineHeight = '600px';
  }

  const body = document.getElementsByTagName('body')[0];
  comments = comments.split(',');
  commentsField.innerHTML = `<ul class="commentsField">${comments.join('--- \n')}</ul>`;
  commentsField.style.width = '600px';
  commentsField.style.height = '600px';
  commentsField.style.marginTop = '-650px';
  commentsField.style.marginLeft = '-60px';
  commentsField.style.border = '1px solid grey';
  commentsField.style.borderRadius = '5px';
  commentsField.style.zIndex = '2';
  commentsField.style.position = 'relative';
  commentsField.style.float = 'left';
  commentsField.style.backgroundColor = 'whitesmoke';
  body.style.overflow = 'hidden';
  currentComments.appendChild(commentsField);

  commentsField.onclick = () => {
    body.style.overflow = 'visible';
    commentsField.style.display = 'none';
  };
};
