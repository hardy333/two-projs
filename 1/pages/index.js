import Head from "next/head";
import styles from "../styles/index.module.css";

export default function Home() {
  console.log(styles);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.heading}>Hello</h1>
      <button className={styles.btn}>Hello</button>
    </div>
  );
}
