'use client'
import React, { useState } from 'react';
import styles from './Header.module.css';
import Image from 'next/image';
import { IoMdMenu } from 'react-icons/io';
import { IoMdClose } from 'react-icons/io';

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <nav className={styles.wrapper}>
        <div className={styles.topPortion}>
          <div className={styles.left}>
            <IoMdMenu className={styles.menuIcon} onClick={toggleSidebar} /> 
            <Image src="/assets/Logo.png" alt="logo" className={styles.logopic} width={36} height={36} />
          </div>

          <h1 className={styles.logo}>LOGO</h1>

          <div className={styles.profile}>
            <Image src="/assets/search-normal.png" alt="search" className={styles.profilelogo} width={24} height={24} />
            <Image src="/assets/heart.png" alt="heart" className={styles.profilelogo} width={24} height={24} />
            <Image src="/assets/shopping-bag.png" alt="bag" className={styles.profilelogo} width={24} height={24} />
            <Image src="/assets/profile.png" alt="profile" className={styles.profilelogo} width={24} height={24} />
            <select name="language">
              <option value="eng">ENG</option>
            </select>
          </div>
        </div>

        <div className={styles.navlinks}>
          {['shop', 'skills', 'stories', 'about', 'contact us'].map((nav, i) => (
            <h3 key={i}>{nav}</h3>
          ))}
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ''}`}>
        <button className={styles.closeButton} onClick={toggleSidebar}>
          <IoMdClose size={24} />
        </button>
        <ul className={styles.sidebarMenu}>
          <li>Home</li>
          <li>Shop</li>
          <li>Skills</li>
          <li>Stories</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </div>

      {/* Overlay to close sidebar when clicked */}
      {sidebarOpen && <div className={styles.overlay} onClick={toggleSidebar}></div>}
    </>
  );
};

export default Header;
