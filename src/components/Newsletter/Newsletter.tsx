'use client';

import React from 'react';
import { Mail } from 'lucide-react';
import styles from './Newsletter.module.css';

const Newsletter = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Mail size={48} className={styles.icon} />
        <h2 className={styles.title}>Đừng Bỏ Lỡ Địa Điểm Mới</h2>
        <p className={styles.description}>
          Đăng ký nhận bản tin hàng tuần từ Vzone để cập nhật những nhà hàng, 
          quán cà phê và dịch vụ mới nhất tại Buôn Ma Thuột.
        </p>
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Địa chỉ email của bạn" 
            className={styles.input}
            required
          />
          <button type="submit" className={styles.button}>
            Đăng Ký
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
