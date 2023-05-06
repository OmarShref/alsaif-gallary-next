"use client";
import styles from "./page.module.css";
import useLanguageStore from "../../stores/languageStore";
import { useState, useEffect } from "react";

const Page = () => {
  const { language } = useLanguageStore();
  const [languageState, setLanguageState] = useState("");
  useEffect(() => {
    setLanguageState(language);
  }, [language]);
  return (
    <div className={styles.container}>
      <p>{languageState}</p>
      <button onClick={() => useLanguageStore.setState({ language: "en" })}>
        change to english
      </button>
      <button onClick={() => useLanguageStore.setState({ language: "ar" })}>
        change to arabic
      </button>
    </div>
  );
};

export default Page;
