'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Facebook } from 'lucide-react';
import styles from './PostCard.module.css';

interface PostCardProps {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  promoText: string;
  shopUrl: string;
}

const PostCard = ({
  slug,
  category,
  title,
  excerpt,
  date,
  image,
  promoText,
  shopUrl,
}: PostCardProps) => {
  const articleUrl = `https://vzone.vn/bai-viet/${slug}`;
  const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    articleUrl,
  )}&quote=${encodeURIComponent(title)}`;

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image src={image} alt={title} fill className={styles.image} />
        <div className={styles.date}>{date}</div>
      </div>

      <div className={styles.ticker} aria-hidden="true">
        <div className={styles.tickerTrack}>
          <span>{promoText}</span>
          <span>{promoText}</span>
        </div>
      </div>

      <div className={styles.content}>
        <span className={styles.category}>{category}</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.excerpt}>{excerpt}</p>

        <div className={styles.adBox}>
          <span className={styles.adLabel}>Quang cao thuoc nhuom</span>
          <p className={styles.adCopy}>
            Thuoc nhuom toc dang duoc day vao bai viet de chot don mem hon, van giu cam
            giac review.
          </p>
          <Link href={shopUrl} className={styles.shopBtn} target="_blank" rel="noreferrer">
            Xem tren Shopee <ArrowRight size={16} />
          </Link>
        </div>

        <a href={shareUrl} target="_blank" rel="noreferrer" className={styles.shareBtn}>
          <Facebook size={16} />
          Chia se len Facebook
        </a>
      </div>
    </article>
  );
};

export default PostCard;
