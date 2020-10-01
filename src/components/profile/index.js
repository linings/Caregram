import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../Context';
import styles from './index.module.css';
import saveImageInDatabase from '../../components/saveImageinDatabase';
import saveProfileImage from '../../utils/connections/profile-pic';

const Profile = () => {
  let publicId =
    'https://icon-library.com/images/no-profile-pic-icon/no-profile-pic-icon-11.jpg';
  const history = useHistory();
  const context = useContext(UserContext);

  const url = 'https://api.cloudinary.com/v1_1/dv4aswoyi/image/upload';

  const addProfilePic = () => {
    const { ownerName, ownerId, formData } = saveImageInDatabase();

    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        publicId = data.url;
        document.getElementById('img').src = publicId;
        saveProfileImage(publicId, ownerId);
      });
  };

  const logOut = () => {
    context.logOut();
    history.push('/');
  };

  useEffect(() => {
    const profilePic = localStorage.getItem('profilePicture');
    if (profilePic) {
      document.getElementById('img').src = profilePic;
    }
  }, []);

  return (
    <div className={styles['wrapper-profile']}>
      <h4>Profile:</h4>
      <i>{context.user ? context.user.username : null} </i>
      <img
        id="img"
        className={styles.uploadedImg}
        src="https://icon-library.com/images/no-profile-pic-icon/no-profile-pic-icon-11.jpg"
      />

      <form method="POST" encType="multipart/form-data" className={styles.form}>
        <input
          id="uploadInput"
          className={styles.input}
          type="file"
          name="files[]"
          multiple
        />
      </form>
      <button onClick={addProfilePic} className={styles.profileBtn}>
        add profile pic
      </button>
      <div>
        <button onClick={logOut} className={styles['pull-button']}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
