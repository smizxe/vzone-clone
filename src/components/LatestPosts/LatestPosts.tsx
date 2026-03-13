'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PostCard from './PostCard/PostCard';
import styles from './LatestPosts.module.css';

const shopeeUrl =
  'https://shopee.vn/search?keyword=thu%E1%BB%91c%20nhu%E1%BB%99m%20t%C3%B3c';

const posts = [
  {
    id: 1,
    slug: 'top-cua-hang-thuoc-nhuom-toc-bmt',
    category: 'Làm đẹp',
    title: 'Top 3 cửa hàng bán thuốc nhuộm tóc được hỏi mua nhiều tại BMT',
    excerpt:
      'Tổng hợp địa chỉ phù hợp để chèn quảng cáo thuốc nhuộm, dẫn về Shopee và giữ chất review nhẹ giống bố cục Vzone.',
    date: '12 Th10',
    image: '/images/post-salon.png',
    promoText: 'Thuốc nhuộm tóc đang giảm 10% - hotline 0909 123 456',
  },
  {
    id: 2,
    slug: 'salon-toc-nhuom-phu-bac-buon-ma-thuot',
    category: 'Review salon',
    title: 'Salon nào nhuộm phủ bạc đẹp và hợp để đặt banner bán thuốc nhuộm',
    excerpt:
      'Bài viết được thêm dòng chữ chạy, CTA mua thuốc nhuộm và nút chia sẻ Facebook ở cuối card để dễ lan truyền.',
    date: '10 Th10',
    image: '/images/post-clinic.png',
    promoText: 'Sale 10% thuốc nhuộm phủ bạc - đặt online giao nhanh',
  },
  {
    id: 3,
    slug: 'mau-nau-lanh-thuoc-nhuom-hot',
    category: 'Màu hot',
    title: 'Màu nâu lạnh đang hot để chạy quảng cáo thuốc nhuộm trong bài review',
    excerpt:
      'Nội dung card được đổi theo hướng vừa review vừa chèn khuyến mãi nhẹ, phù hợp yêu cầu bán hàng kèm chia sẻ linh tinh.',
    date: '08 Th10',
    image: '/images/post-gold.png',
    promoText: 'Tặng tư vấn chọn màu miễn phí khi đặt thuốc nhuộm hôm nay',
  },
  {
    id: 4,
    slug: 'meo-giu-mau-toc-lau-phan-2',
    category: 'Chăm sóc tóc',
    title: 'Mẹo giữ màu tóc lâu hơn sau khi nhuộm để tăng tỉ lệ chốt đơn',
    excerpt:
      'Cuối bài đã có nút share Facebook và khu quảng cáo Shopee để dùng cho demo bán sản phẩm như yêu cầu.',
    date: '05 Th10',
    image: '/images/post-cafe.png',
    promoText: 'Mua combo giữ màu tóc được freeship nội thành',
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

      <a
        href={shopeeUrl}
        target="_blank"
        rel="noreferrer"
        className={styles.shopBanner}
      >
        <div className={styles.shopBannerImage}>
          <Image
            src="/images/post-salon.png"
            alt="Banner shop Shopee thuốc nhuộm tóc"
            fill
            className={styles.bannerImage}
          />
        </div>
        <div className={styles.shopBannerContent}>
          <span className={styles.shopBadge}>Shopee shop</span>
          <h3 className={styles.shopTitle}>
            Chèn thêm 1 hình ảnh trỏ thẳng tới khu bán thuốc nhuộm trên Shopee
          </h3>
          <p className={styles.shopDescription}>
            Banner này nằm ngay ở khu bài viết gần đây để người xem có thêm 1 điểm bấm mua hàng.
          </p>
          <span className={styles.shopCta}>
            Mở shop ngay <ArrowRight size={18} />
          </span>
        </div>
      </a>

      <div className={styles.grid}>
        {posts.map((post) => (
          <PostCard
            key={post.id}
            slug={post.slug}
            category={post.category}
            title={post.title}
            excerpt={post.excerpt}
            date={post.date}
            image={post.image}
            promoText={post.promoText}
            shopUrl={shopeeUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default LatestPosts;
