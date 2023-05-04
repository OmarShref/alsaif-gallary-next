import styles from "./page.module.css";
import { redirect } from "next/navigation";

export default async function Home() {
  redirect("/home");
  return (
    <>
      <div></div>
    </>
  );
}
