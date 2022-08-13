import React, { useState } from 'react'
import ImageModal from '../ImageModal/ImageModal';
import styles from './GalleryImage.css';

const GalleryImage = ({ image }) => {
    const [modalHidden, setModalHidden] = useState(true);

    return (
        <div className="gallery__image">
            <img src={image} className={styles.gallery__image} onClick={() => setModalHidden(false)} />
            {!modalHidden && <ImageModal image={image} setHidden={() => setModalHidden(true)} />}
        </div>
    );
}

export default GalleryImage;