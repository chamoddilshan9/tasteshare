import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <Link href="/">Home</Link>
          <Link href="/community">Community</Link>
          <Link href="/meals">Meals</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <p className={styles.copy}>&copy; {new Date().getFullYear()} TasteShare. All rights reserved.</p>
      </div>
    </footer>
  );
}