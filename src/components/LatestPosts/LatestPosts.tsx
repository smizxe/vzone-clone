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
    category: 'Lam dep',
    title: 'Top 3 cua hang ban thuoc nhuom toc duoc hoi mua nhieu tai BMT',
    excerpt:
      'Tong hop dia chi phu hop de chen quang cao thuoc nhuom, dan ve Shopee va giu chat review nhe giong bo cuc Vzone.',
    date: '12 Th10',
    image: '/images/post-salon.png',
    promoText: 'Thuoc nhuom toc dang giam 10% - hotline 0909 123 456',
  },
  {
    id: 2,
    slug: 'salon-toc-nhuom-phu-bac-buon-ma-thuot',
    category: 'Review salon',
    title: 'Salon nao nhuom phu bac dep va hop de dat banner ban thuoc nhuom',
    excerpt:
      'Bai viet duoc them dong chu chay, CTA mua thuoc nhuom va nut chia se Facebook o cuoi card de de lan truyen.',
    date: '10 Th10',
    image: '/images/post-clinic.png',
    promoText: 'Sale 10% thuoc nhuom phu bac - dat online giao nhanh',
  },
  {
    id: 3,
    slug: 'mau-nau-lanh-thuoc-nhuom-hot',
    category: 'Mau hot',
    title: 'Mau nau lanh dang hot de chay quang cao thuoc nhuom trong bai review',
    excerpt:
      'Noi dung card duoc doi theo huong vua review vua chen khuyen mai nhe, phu hop yeu cau ban hang kem chia se linh tinh.',
    date: '08 Th10',
    image: '/images/post-gold.png',
    promoText: 'Tang tu van chon mau mien phi khi dat thuoc nhuom hom nay',
  },
  {
    id: 4,
    slug: 'meo-giu-mau-toc-lau-phan-2',
    category: 'Cham soc toc',
    title: 'Meo giu mau toc lau hon sau khi nhuom de tang ti le chot don',
    excerpt:
      'Cuoi bai da co nut share Facebook va khu quang cao Shopee de dung cho demo ban san pham nhu user yeu cau.',
    date: '05 Th10',
    image: '/images/post-cafe.png',
    promoText: 'Mua combo giu mau toc duoc freeship noi thanh',
  },
];

const LatestPosts = () => {
  return (
    <section className={styles.section} id="latest">
      <div className={styles.header}>
        <h2 className={styles.title}>Bai Viet Moi Nhat</h2>
        <Link href="/bai-viet" className={styles.viewAll}>
          Xem tat ca <ArrowRight size={18} />
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
            alt="Banner shop Shopee thuoc nhuom toc"
            fill
            className={styles.bannerImage}
          />
        </div>
        <div className={styles.shopBannerContent}>
          <span className={styles.shopBadge}>Shopee shop</span>
          <h3 className={styles.shopTitle}>
            Chen them 1 hinh anh tro thang toi khu ban thuoc nhuom tren Shopee
          </h3>
          <p className={styles.shopDescription}>
            Banner nay nam ngay o khu bai viet gan day de nguoi xem co them 1 diem bam mua
            hang.
          </p>
          <span className={styles.shopCta}>
            Mo shop ngay <ArrowRight size={18} />
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
