import Image from "next/image";
import styles from "./page.module.css";
import GreyStrip from "@/components/GreyStrip/greyStrip";
import Header from "@/components/Header/header";

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <GreyStrip/>
        <Header/>
      </main>
      <footer className={styles.footer}>
        
      </footer>
    </div>
  );
}
