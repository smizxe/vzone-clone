'use client';

import { Mail } from 'lucide-react';
import styles from './Newsletter.module.css';

const Newsletter = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Mail size={48} className={styles.icon} />
        <h2 className={styles.title}>Đừng bỏ lỡ deal thuốc nhuộm mới</h2>
        <p className={styles.description}>
          Đăng ký nhận bản tin để theo dõi bài review mới, chương trình giảm giá và các
          cập nhật sản phẩm làm đẹp đang được đẩy trên trang chủ.
        </p>
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Địa chỉ email của bạn"
            className={styles.input}
            required
          />
          <button type="submit" className={styles.button}>
            Đăng ký
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
