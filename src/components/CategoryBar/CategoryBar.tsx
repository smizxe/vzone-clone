'use client';

import React, { useState } from 'react';
import { 
  Grid, 
  Dog, 
  Home, 
  Car, 
  HeartPulse, 
  Eye, 
  Utensils, 
  BookOpen, 
  Heart, 
  Sparkles 
} from 'lucide-react';
import styles from './CategoryBar.module.css';
import { clsx } from 'clsx';

const categories = [
  { id: 'all', name: 'Tất cả', icon: Grid },
  { id: 'pets', name: 'Thú Cưng', icon: Dog },
  { id: 'construction', name: 'Xây Dựng', icon: Home },
  { id: 'transport', name: 'Xe Cộ & Di Chuyển', icon: Car },
  { id: 'health', name: 'Y Tế & Sức Khỏe', icon: HeartPulse },
  { id: 'eyes', name: 'Mắt', icon: Eye },
  { id: 'f&b', name: 'Ăn Uống', icon: Utensils },
  { id: 'blog', name: 'Blog', icon: BookOpen },
  { id: 'wedding', name: 'Cưới Hỏi', icon: Heart },
  { id: 'beauty', name: 'Làm Đẹp', icon: Sparkles },
];

const CategoryBar = () => {
  const [active, setActive] = useState('all');

  return (
    <div className={styles.container}>
      <div className={styles.scroller}>
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <button
              key={cat.id}
              className={clsx(styles.categoryBtn, active === cat.id && styles.active)}
              onClick={() => setActive(cat.id)}
            >
              <Icon size={18} className={styles.icon} />
              {cat.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryBar;
