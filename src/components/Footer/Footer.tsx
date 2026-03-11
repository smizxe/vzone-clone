'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Compass, 
  Facebook, 
  Instagram, 
  Youtube, 
  MapPin, 
  Mail, 
  Phone 
} from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            <Compass className={styles.dot} size={40} />
            Vzone<span className={styles.dot}>.</span>
          </Link>
          <p className={styles.brandDescription}>
            Nền tảng review và tổng hợp địa điểm, dịch vụ uy tín hàng đầu tại 
            Buôn Ma Thuột, Đắk Lắk. Mang phong cách sống hiện đại đến với cộng đồng.
          </p>
          <div className={styles.socials}>
            <Link href="#" className={styles.socialLink}><Facebook size={20} /></Link>
            <Link href="#" className={styles.socialLink}><Instagram size={20} /></Link>
            <Link href="#" className={styles.socialLink}><Youtube size={20} /></Link>
          </div>
        </div>

        <div>
          <h4 className={styles.columnTitle}>Khám Phá</h4>
          <ul className={styles.links}>
            <li><Link href="#" className={styles.linkItem}>Ăn Uống</Link></li>
            <li><Link href="#" className={styles.linkItem}>Làm Đẹp</Link></li>
            <li><Link href="#" className={styles.linkItem}>Du Lịch & Lưu Trú</Link></li>
            <li><Link href="#" className={styles.linkItem}>Y Tế & Sức Khỏe</Link></li>
          </ul>
        </div>

        <div>
          <h4 className={styles.columnTitle}>Về Vzone</h4>
          <ul className={styles.links}>
            <li><Link href="#" className={styles.linkItem}>Giới Thiệu</Link></li>
            <li><Link href="#" className={styles.linkItem}>Liên Hệ Quảng Cáo</Link></li>
            <li><Link href="#" className={styles.linkItem}>Điều Khoản Dịch Vụ</Link></li>
            <li><Link href="#" className={styles.linkItem}>Chính Sách Bảo Mật</Link></li>
          </ul>
        </div>

        <div>
          <h4 className={styles.columnTitle}>Liên Hệ</h4>
          <ul className={styles.contactList}>
            <li className={styles.contactItem}>
              <MapPin size={18} className={styles.icon} />
              <span>TP. Buôn Ma Thuột, Đắk Lắk, Việt Nam</span>
            </li>
            <li className={styles.contactItem}>
              <Mail size={18} className={styles.icon} />
              <span>hello@vzone.vn</span>
            </li>
            <li className={styles.contactItem}>
              <Phone size={18} className={styles.icon} />
              <span>0123 456 789</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© 2024 Vzone Directory. All rights reserved.</p>
        <p>Designed in BMT</p>
      </div>
    </footer>
  );
};

export default Footer;
