import Footer from "@/components/Footer/Footer";
import styles from "./page.module.css";
import GreyStrip from "@/components/GreyStrip/greyStrip";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Products from '@/components/Products/Products';

export default function Home() {
  
  return (
    <div>
      <main className={styles.main}>
        <GreyStrip/>
        <Header/>
        <Hero/>
        <Products/>
      </main>
      <Footer/>
    </div>
  );
}
