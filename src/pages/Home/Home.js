import React from 'react';

import styles from './Home.css';

import ProfilePic from './../../assets/images/user.jpg';
import Header from '../../components/Header/Header';
import Info from '../../components/Info/Info';

import Photo1 from '../../assets/images/photo1.jpeg';
import Photo2 from '../../assets/images/photo2.jpeg';
import Photo3 from '../../assets/images/photo3.jpeg';
import Photo4 from '../../assets/images/photo4.jpeg';
import Photo5 from '../../assets/images/photo5.jpeg';
import Photo6 from '../../assets/images/photo6.jpeg';
import GalleryImage from '../../components/GalleryImage/GalleryImage';


const Home = () => {
    return (
        <div className={styles.container}>
            <Header />
            <section className={styles.profile}>
                <img src={ProfilePic} className={styles.profile__pic} />
                <div className={styles.profile__info}>
                    <h2>scarlett_r</h2>
                    <div className={styles.posts_and_followers}>
                        <Info name='posts' number={40} />
                        <Info name='followers' number={289} />
                        <Info name='following' number={203} />
                    </div>
                    <h3 className={styles.profile__name}>Scarlett Robinson</h3>
                    <p className={styles.profile__bio}>The world through my lens.</p>
                </div>
            </section>
            <section className={styles.gallery}>
                {[Photo1, Photo2, Photo3, Photo4, Photo5, Photo6].map(image => {
                    return <GalleryImage key={image} image={image} />
                })}
            </section>
        </div>
    );
}

export default Home;

