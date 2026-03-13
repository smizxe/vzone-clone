'use client';

import Link from 'next/link';
import {
  Compass,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
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
            Nền tảng review và tổng hợp điểm hay tại Buôn Ma Thuột, nay được demo thêm
            hướng bán linh tinh kèm sản phẩm thuốc nhuộm theo bố cục gần Vzone.
          </p>
          <div className={styles.socials}>
            <Link href="#" className={styles.socialLink}>
              <Facebook size={20} />
            </Link>
            <Link href="#" className={styles.socialLink}>
              <Instagram size={20} />
            </Link>
            <Link href="#" className={styles.socialLink}>
              <Youtube size={20} />
            </Link>
          </div>
        </div>

        <div>
          <h4 className={styles.columnTitle}>Khám phá</h4>
          <ul className={styles.links}>
            <li>
              <Link href="#" className={styles.linkItem}>
                Ăn uống
              </Link>
            </li>
            <li>
              <Link href="#" className={styles.linkItem}>
                Làm đẹp
              </Link>
            </li>
            <li>
              <Link href="#" className={styles.linkItem}>
                Sản phẩm tóc
              </Link>
            </li>
            <li>
              <Link href="#" className={styles.linkItem}>
                Y tế và sức khỏe
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className={styles.columnTitle}>Về Vzone</h4>
          <ul className={styles.links}>
            <li>
              <Link href="#" className={styles.linkItem}>
                Giới thiệu
              </Link>
            </li>
            <li>
              <Link href="#" className={styles.linkItem}>
                Liên hệ quảng cáo
              </Link>
            </li>
            <li>
              <Link href="#" className={styles.linkItem}>
                Điều khoản dịch vụ
              </Link>
            </li>
            <li>
              <Link href="#" className={styles.linkItem}>
                Chính sách bảo mật
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className={styles.columnTitle}>Liên hệ</h4>
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
              <span>0909 123 456</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© 2026 Vzone Directory. All rights reserved.</p>
        <p>Designed in BMT</p>
      </div>
    </footer>
  );
};

export default Footer;
