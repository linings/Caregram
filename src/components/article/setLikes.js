import RESTAPI from '../../REST API';

const setLikes = async (e, clickedLikes, countLikes,objectId,likes) => {
  let button = e.target;
  const whiteHeart = '\u2661';
  const blackHeart = '\u2665';
  const like = button.textContent;

  if (like == whiteHeart) {
    button.textContent = blackHeart;
  } else {
    button.textContent = whiteHeart;
  }
  const respone = await fetch(RESTAPI.name + `data/data/${objectId}`, {
    method: 'PUT',
    body: JSON.stringify({
      likes: likes + clickedLikes,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  await respone.json();
  countLikes(clickedLikes + 1);
};

export default setLikes;
