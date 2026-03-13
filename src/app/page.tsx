import Header from "@/components/Header/Header";
import HeroSlider from "@/components/HeroSlider/HeroSlider";
import CategoryBar from "@/components/CategoryBar/CategoryBar";
import PromoTicker from "@/components/PromoTicker/PromoTicker";
import ProductShowcase from "@/components/ProductShowcase/ProductShowcase";
import LatestPosts from "@/components/LatestPosts/LatestPosts";
import Newsletter from "@/components/Newsletter/Newsletter";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <HeroSlider />
        <PromoTicker
          items={[
            "Giảm giá 10% thuốc nhuộm tóc trong tuần này",
            "Mua combo nhuộm + oxy được tư vấn màu miễn phí",
            "Hotline đặt hàng nhanh: 0909 123 456",
          ]}
        />
        <CategoryBar />
        <ProductShowcase />
        <LatestPosts />
        <Newsletter />
        <PromoTicker
          tone="dark"
          compact
          items={[
            "Thuốc nhuộm tóc sale 10% cho đơn online",
            "Hotline tư vấn màu hợp tone da: 0909 123 456",
            "Nhận ship nhanh nội thành Buôn Ma Thuột",
          ]}
        />
      </main>
      <Footer />
    </div>
  );
}
