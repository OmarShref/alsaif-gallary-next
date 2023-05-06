import styles from "./page.module.css";

export const metadata = {
  title: "Alsaif Gallary home",
  description: "Shop that has what you ever wanted",
};

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.contents}>{children}</div>
    </div>
  );
};

export default Layout;
