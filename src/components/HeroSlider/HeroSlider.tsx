'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './HeroSlider.module.css';
import { clsx } from 'clsx';

const slides = [
  {
    id: 1,
    tagline: 'Khám Phá Thủ Phủ Cà Phê',
    title: 'Buôn Ma Thuột',
    subtitle: 'Xứ Sở Cà Phê',
    description: 'Khám phá vùng đất cao nguyên tuyệt đẹp với những đồi cà phê bát ngát và văn hóa Tây Nguyên độc đáo cùng Vzone.',
    image: '/images/hero-city.png',
    cta: 'Khám phá ngay',
  },
  {
    id: 2,
    tagline: 'Tinh Hoa Đất Trời',
    title: 'Hương Vị',
    subtitle: 'Đậm Chất Cao Nguyên',
    description: 'Trải nghiệm những tách cà phê đúng nghĩa từ những hạt cà phê được tuyển chọn kỹ lưỡng từ vùng đất đỏ Bazan.',
    image: '/images/hero-coffee.png',
    cta: 'Xem sản phẩm',
  },
  {
    id: 3,
    tagline: 'Thiên Nhiên Kỳ Thú',
    title: 'Thác Nước',
    subtitle: 'Hùng Vĩ Đại Ngàn',
    description: 'Chìm đắm trong vẻ đẹp hoang sơ của những dòng thác huyền thoại, biểu tượng cho sức mạnh của núi rừng Tây Nguyên.',
    image: '/images/hero-waterfall.png',
    cta: 'Xem toplist',
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
            <span className={styles.statLabel}>Bài Viết</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>20</span>
            <span className={styles.statLabel}>Danh Mục</span>
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
