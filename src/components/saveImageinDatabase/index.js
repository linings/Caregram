import getCookie from '../../utils/cookie';

const saveImageInDatabase = () => {
  const file = document.getElementById('uploadInput').files[0];
  const ownerId = getCookie('x-auth-token');
  const ownerName = localStorage.getItem('username');

  const formData = new FormData();

  formData.append('file', file);
  formData.append('upload_preset', 'ml_default');

  return {
      ownerName,
      ownerId,
      formData
  }
};

export default saveImageInDatabase;
