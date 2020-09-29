import React from 'react';

import styles from './index.module.css';
import PageLayout from '../../components/page-layout';
import saveImage from '../../utils/connections/backendless';
import saveImageInDatabase from '../../components/saveImageinDatabase';

const AddStory = () => {
  let publicId = '';

  const url = 'https://api.cloudinary.com/v1_1/dv4aswoyi/image/upload';

  const uploadImage = () => {
    let description = document.getElementById('descriptionInput').value;

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
        saveImage(publicId, description, ownerId, ownerName);
        document.getElementById('descriptionInput').value = '';
      });
  };

  return (
    <div>
      <PageLayout />
      <div className={styles.wrapper}>
        <img id="img" className={styles.uloadedImg} src="https://icon-library.com/images/no-profile-pic-icon/no-profile-pic-icon-11.jpg" />

        <form
          method="POST"
          encType="multipart/form-data"
          className={styles.form}
        >
          <input
            id="uploadInput"
            className={styles.input}
            type="file"
            name="files[]"
            multiple
          />
        </form>
        <div>
          <input
            placeholder="description..."
            id="descriptionInput"
            className={styles.description}
            type="text"
          ></input>
        </div>
        <button
          type="submit"
          className={styles.btn}
          id="upload_widget"
          onClick={uploadImage}
        >
          Add your story
        </button>
      </div>
    </div>
  );
};

export default AddStory;
