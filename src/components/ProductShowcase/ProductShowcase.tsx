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
    name: "Thuoc nhuom phu bac salon",
    category: "Ban chay",
    description:
      "Dong san pham duoc chon de len mau deu, phu bac nhanh va de tu van cho khach lam dep tai nha.",
    image: "/images/post-salon.png",
    featured: true,
  },
  {
    id: 2,
    name: "Combo oxy + thuoc nhuom tone nau",
    category: "Combo tiet kiem",
    description: "Goi san cho khach chot nhanh tren trang chu va fanpage.",
    image: "/images/hero-coffee.png",
  },
  {
    id: 3,
    name: "Bo cham soc toc sau nhuom",
    category: "Cham soc",
    description: "Them upsell goi xa giu mau va serum bong toc.",
    image: "/images/post-cafe.png",
  },
  {
    id: 4,
    name: "Thuoc tay toc muc nhe",
    category: "Nang tone",
    description: "De demo nhom san pham can tu van ky truoc khi mua.",
    image: "/images/hero-waterfall.png",
  },
  {
    id: 5,
    name: "Phu kien salon va gang tay",
    category: "Phu kien",
    description: "Day ra ngoai trang chu theo bo cuc 5 bai giong Vzone.",
    image: "/images/post-gold.png",
  },
];

const ProductShowcase = () => {
  return (
    <section className={styles.section} id="shop">
      <div className={styles.header}>
        <div>
          <p className={styles.eyebrow}>Chuyen muc ban san pham</p>
          <h2 className={styles.title}>Khu thuoc nhuom duoc day ra ngoai trang chu</h2>
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
