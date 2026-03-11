import Header from "@/components/Header/Header";
import HeroSlider from "@/components/HeroSlider/HeroSlider";
import CategoryBar from "@/components/CategoryBar/CategoryBar";
import LatestPosts from "@/components/LatestPosts/LatestPosts";
import Newsletter from "@/components/Newsletter/Newsletter";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <HeroSlider />
        <CategoryBar />
        <LatestPosts />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
