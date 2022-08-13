import React from 'react';
import styles from './Info.css';

const Info = ({ number, name }) => {
    return (
        <div className={styles.info}>
            <span className={styles.info__number}>40</span>
            <span className={styles.info__text}>posts</span>
        </div>
    );
}

export default Info;