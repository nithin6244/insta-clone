import React from 'react';
import styles from './Header.css';
import Logo from '../../assets/images/logo.svg';
import ProfilePic from '../../assets/images/user.jpg';

const Header = () => {
    return (
        <header className={styles.header}>
            <img src={Logo} className={styles.logo} />
            <img src={ProfilePic} className={styles.profile} />
        </header>
    );
}

export default Header;