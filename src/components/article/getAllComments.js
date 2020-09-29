import RESTAPI from '../../REST API';

const getAllComments = async (id, comment) => {
  const response = await fetch(RESTAPI.name + `data/data/${id}`);
  const result = await response.json();
  let comments = result.comments;

  if (comment) {
    comment = comment.trim();

    const respone = await fetch(RESTAPI.name + `data/data/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        comments:
          comments === null
            ? (comments = comment + ',')
            : (comments += comment + ','),
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const result2 = await respone.json();
    return result2.comments;
  }
  return comments;
};

export default getAllComments;
