import React from 'react';
import { useHistory } from 'react-router-dom';
import PageLayout from '../../components/page-layout';
import Carousel from 'react-bootstrap/Carousel';
import styles from './index.module.css';
import Button from 'react-bootstrap/Button';

const HomeGuest = () => {
  const history = useHistory();
  const redirect = () => {
    history.push('/register');
  };

  return (
    <div>
      <PageLayout />
      <h6 className={styles['guest-header']}>
        Register now and join the new world of Care!
      </h6>
      <Button
        variant="outline-secondary"
        className={styles.btn}
        onClick={redirect}
      >
        Register now!
      </Button>

      <Carousel className={styles['wrapper-guestHome']}>
        <Carousel.Item>
          <img
            className={styles.image}
            src="https://wallup.net/wp-content/uploads/2016/01/180390-friendship-nature-animals-dog-cat-closed_eyes-sleeping-animal_ears-baby_animals-bloodhounds-hounds-kittens.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Care for the animals</h3>
            <p>To all animals with love!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className={styles.image}
            src="https://islandvista.com/wp-content/uploads/2019/01/GettyImages-887456284-1024x683.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Outdoor activities</h3>
            <p>Find your next adventure in Caregram!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className={styles.image}
            src="https://about.hawaiilife.com/wp-content/uploads/2018/07/Kapalua_Bay_Kapalua_Resort.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>The Big Beach</h3>
            <p>Dreams come true on the beach!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeGuest;
