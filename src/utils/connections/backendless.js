import RESTAPI from '../../REST API';

const saveImage = async (imageId,description,ownerId,ownerName) => {
  const url = RESTAPI.name + 'data/data';

  await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      description,
      ownerId,
      imageURL: imageId,
      ownerName
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
export default saveImage;
