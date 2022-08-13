import React from 'react';
import styles from './ImageModal.css';
import ProfilePic from '../../assets/images/user.jpg';

const ImageModal = ({ image, setHidden }) => {
    return (
        <div className={styles.image_modal}>
            <button className={styles.close_button} onClick={() => setHidden()}>x</button>
            <div className={styles.container}>
                <img src={image} className={styles.image} />
                <div className={styles.details}>
                    <div className={styles.profile}>
                        <img src={ProfilePic} className={styles.profile_pic} />
                        <div>
                            <h5>scarlett_r</h5>
                            <p className={styles.location}>Jungfrau, Switzerland</p>
                        </div>
                    </div>
                    <hr />
                    <div className={styles.profile}>
                        <img src={ProfilePic} className={styles.profile_pic} />
                        <div>
                            <h5>scarlett_r</h5>
                            <p className={styles.caption}>Caption goes here.....</p>
                        </div>
                    </div>
                    <div className={styles.likes_info}>
                        Liked by <span className={styles.bold}>unnati_vora</span> and <span className={styles.bold}>{Math.round(Math.random() * 1000)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ImageModal;