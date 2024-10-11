import Image from "next/image";
import styles from "./page.module.css";
import GreyStrip from "@/components/GreyStrip/greyStrip";
import Header from "@/components/Header/header";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <GreyStrip/>
        <Header/>
        <Hero/>
      </main>
      
    </div>
  );
}
