'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Compass, Search, Menu } from 'lucide-react';
import styles from './Header.module.css';
import { clsx } from 'clsx';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={clsx(styles.header, isScrolled && styles.scrolled)}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Compass className={styles.dot} size={32} />
          Vzone<span className={styles.dot}>.</span>
        </Link>

        <div className={styles.nav}>
          <Link href="/" className={styles.navLink}>Trang Chủ</Link>
          <Link href="/bai-viet" className={styles.navLink}>Bài Viết</Link>
          <Link href="/gioi-thieu" className={styles.navLink}>Giới Thiệu</Link>
          <Link href="/lien-he" className={styles.navLink}>Liên Hệ</Link>
        </div>

        <div className={styles.actions}>
          <button className={styles.iconBtn} aria-label="Search">
            <Search size={24} />
          </button>
          <button className={styles.iconBtn} aria-label="Menu">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
