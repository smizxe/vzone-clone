'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import styles from './HeroSlider.module.css';

const slides = [
  {
    id: 1,
    tagline: 'Khám phá điểm hay mỗi ngày',
    title: 'Buôn Ma Thuột',
    subtitle: 'Review, chia sẻ và bán kèm',
    description:
      'Trang chủ được dựng theo tinh thần Vzone, vừa có bài viết khám phá vừa đẩy thêm các khối bán sản phẩm để dễ chốt đơn.',
    image: '/images/hero-city.png',
    cta: 'Khám phá ngay',
  },
  {
    id: 2,
    tagline: 'Góc làm đẹp đang lên',
    title: 'Thuốc Nhuộm',
    subtitle: 'Đẩy sale mềm trong bài viết',
    description:
      'Khu hero vẫn giữ nhịp kể chuyện nhưng đã phù hợp hơn để gắn sale 10 phần trăm, Shopee và hotline tư vấn màu tóc.',
    image: '/images/hero-coffee.png',
    cta: 'Xem sản phẩm',
  },
  {
    id: 3,
    tagline: 'Phong cách Vzone 50%',
    title: 'Bố Cục',
    subtitle: 'Gọn, sáng và có CTA rõ',
    description:
      'Các section mới được đưa ra ngoài trang chủ theo dạng 5 bài, có nút share Facebook và nhiều điểm bấm dẫn về shop.',
    image: '/images/hero-waterfall.png',
    cta: 'Xem demo',
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.hero}>
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={clsx(styles.slide, index === current && styles.active)}
        >
          <div className={styles.content}>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={index === current ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={styles.tagline}
            >
              {slide.tagline}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={index === current ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className={styles.title}
            >
              {slide.title} <br />
              <span className={styles.highlight}>{slide.subtitle}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={index === current ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className={styles.description}
            >
              {slide.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={index === current ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <button className={styles.cta}>
                {slide.cta} <ArrowRight size={18} />
              </button>
            </motion.div>
          </div>

          <div className={styles.imageWrapper}>
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className={styles.image}
              priority={index === 0}
            />
          </div>
        </div>
      ))}

      <div className={styles.controls}>
        <div className={styles.dots}>
          {slides.map((_, idx) => (
            <div
              key={idx}
              className={clsx(styles.dot, idx === current && styles.activeDot)}
              onClick={() => setCurrent(idx)}
            />
          ))}
        </div>

        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.statValue}>100+</span>
            <span className={styles.statLabel}>Bài viết</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>05</span>
            <span className={styles.statLabel}>Ô bán hàng</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>BMT</span>
            <span className={styles.statLabel}>Đắk Lắk</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
