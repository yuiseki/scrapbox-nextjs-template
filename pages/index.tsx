import type { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <p>Hi.</p>
      <p>
        Visit: <Link href="/test">/test</Link>
      </p>
    </div>
  );
};

export default Home;
