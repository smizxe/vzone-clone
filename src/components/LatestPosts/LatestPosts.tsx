'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PostCard from './PostCard/PostCard';
import styles from './LatestPosts.module.css';

const posts = [
  {
    id: 1,
    category: 'Làm Đẹp',
    title: 'Top 3 cửa hàng bán thuốc uốn tóc tốt nhất BMT',
    excerpt: 'Khám phá những địa chỉ cung cấp mỹ phẩm ngành tóc uy tín, chất lượng hàng đầu tại khu vực trung tâm.',
    date: '12 Th10',
    image: '/images/post-salon.png',
  },
  {
    id: 2,
    category: 'Y Tế & Sức Khỏe',
    title: 'Top 3 địa chỉ truyền nước tại Buôn Ma Thuột',
    excerpt: 'Danh sách các phòng khám và cơ sở y tế cung cấp dịch vụ truyền dịch an toàn, được cấp phép chuẩn bộ y tế.',
    date: '10 Th10',
    image: '/images/post-clinic.png',
  },
  {
    id: 3,
    category: 'Tài Chính',
    title: 'Có nên mua vàng tại tiệm vàng Kim Môn BMT không?',
    excerpt: 'Đánh giá chi tiết về chất lượng, giá cả và dịch vụ chăm sóc khách hàng tại một trong những tiệm vàng lâu đời.',
    date: '08 Th10',
    image: '/images/post-gold.png',
  },
  {
    id: 4,
    category: 'Ăn Uống',
    title: 'Review 5 quán cà phê "chill" nhất Buôn Ma Thuột',
    excerpt: 'Lấy lại năng lượng với không gian xanh mát và hương vị cà phê đậm đà của vùng đất cao nguyên.',
    date: '05 Th10',
    image: '/images/post-cafe.png',
  },
];

const LatestPosts = () => {
  return (
    <section className={styles.section} id="latest">
      <div className={styles.header}>
        <h2 className={styles.title}>Bài Viết Mới Nhất</h2>
        <Link href="/bai-viet" className={styles.viewAll}>
          Xem tất cả <ArrowRight size={18} />
        </Link>
      </div>

      <div className={styles.grid}>
        {posts.map((post) => (
          <PostCard 
            key={post.id}
            category={post.category}
            title={post.title}
            excerpt={post.excerpt}
            date={post.date}
            image={post.image}
          />
        ))}
      </div>
    </section>
  );
};

export default LatestPosts;
