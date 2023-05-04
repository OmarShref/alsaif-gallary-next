"use client";
import styles from "./page.module.css";
import useLanguageStore from "../../stores/languageStore";

const Page = () => {
  const language = useLanguageStore((state) => state.language);
  const changeToEnglish = useLanguageStore(
    (state) => state.setLanguageToEnglish
  );
  const changeToArabic = useLanguageStore((state) => state.setLanguageToArabic);
  return (
    <div className={styles.container}>
      <p>{language}</p>
      <button onClick={() => changeToEnglish()}>change to english</button>
      <button onClick={() => changeToArabic()}>change to arabic</button>
    </div>
  );
};

export default Page;
