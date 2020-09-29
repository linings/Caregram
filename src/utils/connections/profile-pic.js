import RESTAPI from '../../REST API';

const saveProfileImage = async (imageId, ownerId) => {
  const url = RESTAPI.name + `users/${ownerId}`;

  await fetch(url, {
    method: 'PUT',
    body: JSON.stringify({
      profilePicture: imageId,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
export default saveProfileImage;
