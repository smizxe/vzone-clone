import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { clsx } from "clsx";
import styles from "./ProductShowcase.module.css";

const shopeeUrl =
  "https://shopee.vn/search?keyword=thu%E1%BB%91c%20nhu%E1%BB%99m%20t%C3%B3c";

const products = [
  {
    id: 1,
    name: "Thuốc nhuộm phủ bạc salon",
    category: "Bán chạy",
    description:
      "Dòng sản phẩm được chọn để lên màu đều, phủ bạc nhanh và dễ tư vấn cho khách làm đẹp tại nhà.",
    image: "/images/post-salon.png",
    featured: true,
  },
  {
    id: 2,
    name: "Combo oxy + thuốc nhuộm tone nâu",
    category: "Combo tiết kiệm",
    description: "Gói sẵn cho khách chốt nhanh trên trang chủ và fanpage.",
    image: "/images/hero-coffee.png",
  },
  {
    id: 3,
    name: "Bộ chăm sóc tóc sau nhuộm",
    category: "Chăm sóc",
    description: "Thêm upsell gội xả giữ màu và serum bóng tóc.",
    image: "/images/post-cafe.png",
  },
  {
    id: 4,
    name: "Thuốc tẩy tóc mức nhẹ",
    category: "Nâng tone",
    description: "Để demo nhóm sản phẩm cần tư vấn kỹ trước khi mua.",
    image: "/images/hero-waterfall.png",
  },
  {
    id: 5,
    name: "Phụ kiện salon và găng tay",
    category: "Phụ kiện",
    description: "Đẩy ra ngoài trang chủ theo bố cục 5 bài giống Vzone.",
    image: "/images/post-gold.png",
  },
];

const ProductShowcase = () => {
  return (
    <section className={styles.section} id="shop">
      <div className={styles.header}>
        <div>
          <p className={styles.eyebrow}>Chuyên mục bán sản phẩm</p>
          <h2 className={styles.title}>Khu thuốc nhuộm được đẩy ra ngoài trang chủ</h2>
        </div>
        <Link href={shopeeUrl} className={styles.viewAll} target="_blank" rel="noreferrer">
          Xem shop Shopee <ArrowRight size={18} />
        </Link>
      </div>

      <div className={styles.grid}>
        {products.map((product) => (
          <article
            key={product.id}
            className={clsx(styles.card, product.featured && styles.featured)}
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              className={styles.image}
            />
            <div className={styles.overlay} />
            <div className={styles.content}>
              <span className={styles.category}>{product.category}</span>
              <h3 className={styles.cardTitle}>{product.name}</h3>
              <p className={styles.description}>{product.description}</p>
              <Link
                href={shopeeUrl}
                className={styles.button}
                target="_blank"
                rel="noreferrer"
              >
                <ShoppingBag size={18} />
                Mua ngay
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProductShowcase;
