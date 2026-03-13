'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Compass, Menu, Search, ShoppingCart } from 'lucide-react';
import { clsx } from 'clsx';
import styles from './Header.module.css';

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
          <Link href="/" className={styles.navLink}>
            Trang chu
          </Link>
          <Link href="/bai-viet" className={styles.navLink}>
            Bai viet
          </Link>
          <Link href="/gioi-thieu" className={styles.navLink}>
            Gioi thieu
          </Link>
          <Link href="/lien-he" className={styles.navLink}>
            Lien he
          </Link>
        </div>

        <div className={styles.actions}>
          <button className={styles.iconBtn} aria-label="Search">
            <Search size={20} />
          </button>
          <button className={clsx(styles.iconBtn, styles.cartBtn)} aria-label="Gio hang demo">
            <ShoppingCart size={18} />
            <span className={styles.cartText}>Gio hang</span>
            <span className={styles.cartBadge}>2</span>
          </button>
          <button className={styles.iconBtn} aria-label="Menu">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
