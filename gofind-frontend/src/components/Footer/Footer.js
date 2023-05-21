import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Footer.module.css';
import logoWhiteGreen from '../../assests/Elements/LogoWhiteGreen.svg';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function Footer() {
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/item')
      .then((response) => {
        setItemCount(response.data.message.length);
        console.log(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <footer className={styles.Footer}>
      <div className={styles.LogoAndSocial}>
        <div>
          <img
            src={logoWhiteGreen}
            alt="logo white"
            style={{ marginRight: '20px' }}
            className={styles.logo}
            width={200}
          />
        </div>
        <div className={styles.TextsocialMediaWrapper}>
          <h3>Reach Out to Our Social Media:</h3>
          <nav className={styles.IconsWrapper}>
            <a href="https://www.facebook.com/azzam.mahmoud.35" target="_blank" rel="noopener noreferrer">
              <FacebookIcon fontSize="large" className={styles.socialIcon} />
            </a>
            <a href="https://www.instagram.com/azzam.mahmoud.95" target="_blank" rel="noopener noreferrer">
              <InstagramIcon fontSize="large" className={styles.socialIcon} />
            </a>
            <a href="https://www.pinterest.com/azzammahmoud" target="_blank" rel="noopener noreferrer">
              <PinterestIcon fontSize="large" className={styles.socialIcon} />
            </a>
            <a href="https://www.linkedin.com/in/azzam-mahmoud" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon fontSize="large" className={styles.socialIcon} />
            </a>
          
            <a href="https://wa.me/+96171937852" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon fontSize="large" className={styles.socialIcon} />
            </a>
          </nav>
        </div>
      </div>
      <div className={styles.copyRightWrapper}>
        <p>&copy; 2023 gofind. All rights reserved.</p>
        <p>
          <span style={{ fontWeight: '600' }}>{itemCount}</span> gofinded items are posted
        </p>
      </div>
    </footer>
  );
}

