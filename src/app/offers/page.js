import styles from "./page.module.css";
export const metadata = {
  title: "Alsaif Gallary Categories",
  description: "Shop that has what you ever wanted",
};
const Page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contents}>
        <p>offers</p>
      </div>
    </div>
  );
};

export default Page;
