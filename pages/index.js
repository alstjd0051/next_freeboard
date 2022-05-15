import Head from "next/head";
import "../styles/Home.module.css";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  function MoveTodoList() {
    router.push("/todolist");
  }
  function MoveUserList() {
    router.push("/userlist");
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <button onClick={MoveTodoList}>TodoListPage이동</button>
        <button onClick={MoveUserList}>UserlistPage이동</button>
      </main>
    </div>
  );
}
