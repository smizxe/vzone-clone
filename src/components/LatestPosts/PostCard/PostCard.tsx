'use client';

import React from 'react';
import Image from 'next/image';
import styles from './PostCard.module.css';

interface PostCardProps {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
}

const PostCard = ({ category, title, excerpt, date, image }: PostCardProps) => {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image 
          src={image} 
          alt={title} 
          fill 
          className={styles.image}
        />
        <div className={styles.date}>{date}</div>
      </div>
      <div className={styles.content}>
        <span className={styles.category}>{category}</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.excerpt}>{excerpt}</p>
      </div>
    </article>
  );
};

export default PostCard;
