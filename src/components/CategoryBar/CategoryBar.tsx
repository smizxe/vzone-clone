'use client';

import { useState } from 'react';
import {
  BookOpen,
  Car,
  Dog,
  Eye,
  Grid,
  Heart,
  HeartPulse,
  Home,
  Sparkles,
  Utensils,
} from 'lucide-react';
import { clsx } from 'clsx';
import styles from './CategoryBar.module.css';

const categories = [
  { id: 'all', name: 'Tất cả', icon: Grid },
  { id: 'pets', name: 'Thú cưng', icon: Dog },
  { id: 'construction', name: 'Xây dựng', icon: Home },
  { id: 'transport', name: 'Xe cộ', icon: Car },
  { id: 'health', name: 'Y tế', icon: HeartPulse },
  { id: 'eyes', name: 'Mắt', icon: Eye },
  { id: 'fnb', name: 'Ăn uống', icon: Utensils },
  { id: 'blog', name: 'Blog', icon: BookOpen },
  { id: 'wedding', name: 'Cưới hỏi', icon: Heart },
  { id: 'beauty', name: 'Làm đẹp', icon: Sparkles },
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
