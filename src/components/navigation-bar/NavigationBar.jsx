import styles from "./NavigationBar.module.css";
// import useLanguageStore from "../../stores/languageStore";
// import { useEffect } from "react";
import Link from "next/link";

const NavigationBar = () => {
  // const language = useLanguageStore((state) => state.language);
  // useEffect(() => {
  //   // for refresh indicator movement correct
  //   [...document.getElementsByClassName(`${styles.nav_link}`)].forEach(
  //     (link, i) => {
  //       if (link.classList.contains(`${styles.active_link}`)) {
  //         document.getElementById(
  //           `${styles.active_indicator}`
  //         ).style.left = `calc(${language === "ar" ? -i : i}*100%)`;
  //         return;
  //       }
  //     }
  //   );
  // }, []);

  // useEffect(() => {
  //   // to change indicator movement with the language change
  //   // get the moving span
  //   const activeIndicator = document.getElementById(
  //     `${styles.active_indicator}`
  //   );
  //   // correct current place
  //   [...document.getElementsByClassName(`${styles.nav_link}`)].forEach(
  //     (link, i) => {
  //       if (link.classList.contains(`${styles.active_link}`)) {
  //         document.getElementById(
  //           `${styles.active_indicator}`
  //         ).style.left = `calc(${language === "ar" ? -i : i}*100%)`;
  //         return;
  //       }
  //     }
  //   );
  //   // remove previous listener
  //   [...document.getElementsByClassName(`${styles.nav_link}`)].forEach(
  //     (link, i) => {
  //       link.removeEventListener("click", () => defineIndicatorMovement(i));
  //     }
  //   );
  //   // define span movement
  //   const defineIndicatorMovement = (i) => {
  //     activeIndicator.style.left = `calc(${language === "ar" ? -i : i}*100%)`;
  //   };
  //   // set span moving according to every link
  //   [...document.getElementsByClassName(`${styles.nav_link}`)].forEach(
  //     (link, i) => {
  //       link.addEventListener("click", () => defineIndicatorMovement(i));
  //     }
  //   );
  // }, [language]);

  return (
    <div className={styles.container}>
      {/* helper divs for indicator ui & movement  */}
      <div className={styles.active_indicator_container}>
        <div className={styles.active_indicator_grid_col}>
          <span id={styles.active_indicator}></span>
        </div>
        <div className={styles.active_indicator_grid_col}></div>
        <div className={styles.active_indicator_grid_col}></div>
        <div className={styles.active_indicator_grid_col}></div>
        <div className={styles.active_indicator_grid_col}></div>
      </div>

      {/* home link  */}
      <div className={styles.grid_col}>
        <Link
          href="/home"
          // className={({ isActive }) =>
          //   isActive
          //     ? `${styles.nav_link} ${styles.active_link}`
          //     : `${styles.nav_link}`
          // }
          className={styles.nav_link}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#646464"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          {/* <span>{`${
            language === "ar"
              ? "الرئيسية"
              : language === "en"
              ? "Home"
              : "الرئيسية"
          }`}</span> */}
          الرئيسية
        </Link>
      </div>

      {/* categories link  */}
      <div className={styles.grid_col}>
        <Link
          href="/categories"
          // className={({ isActive }) =>
          //   isActive
          //     ? `${styles.nav_link} ${styles.active_link}`
          //     : `${styles.nav_link}`
          // }
          className={styles.nav_link}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#646464"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
          {/* <span>{`${
            language === "ar"
              ? "الفئات"
              : language === "en"
              ? "Categories"
              : "الفئات"
          }`}</span> */}
          الفئات
        </Link>
      </div>

      {/* shopping cart link  */}
      <div className={styles.grid_col}>
        <Link
          href="/cart"
          // className={({ isActive }) =>
          //   isActive
          //     ? `${styles.nav_link} ${styles.active_link}`
          //     : `${styles.nav_link}`
          // }
          className={styles.nav_link}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#646464"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          {/* <span>{`${
            language === "ar"
              ? "عربة التسوق"
              : language === "en"
              ? "Cart"
              : "عربة التسوق"
          }`}</span> */}
          عربة التسوق
        </Link>
      </div>

      {/* offes link  */}
      <div className={styles.grid_col}>
        <Link
          href="/offers"
          // className={({ isActive }) =>
          //   isActive
          //     ? `${styles.nav_link} ${styles.active_link}`
          //     : `${styles.nav_link}`
          // }
          className={styles.nav_link}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#646464"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 6h.008v.008H6V6z"
            />
          </svg>
          {/* <span>{`${
            language === "ar"
              ? "العروض"
              : language === "en"
              ? "Offers"
              : "العروض"
          }`}</span> */}
          العروض
        </Link>
      </div>

      {/* account link  */}
      <div className={styles.grid_col}>
        <Link
          href="/account"
          // className={({ isActive }) =>
          //   isActive
          //     ? `${styles.nav_link} ${styles.active_link}`
          //     : `${styles.nav_link}`
          // }
          className={styles.nav_link}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#646464"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          {/* <span>{`${
            language === "ar"
              ? "حسابي"
              : language === "en"
              ? "Account"
              : "حسابي"
          }`}</span> */}
          حسابي
        </Link>
      </div>
    </div>
  );
};

export default NavigationBar;
