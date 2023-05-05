"use client";
import styles from "./Header.module.css";
import useLanguageStore from "../../stores/languageStore";
import { useEffect, useState } from "react";

const Header = () => {
  const { language } = useLanguageStore();
  const [languageState, setLanguageState] = useState("");
  useEffect(() => {
    setLanguageState(language);
    // change layout direction according to language selected
    if (language === "en") {
      document.documentElement.style.setProperty("--layout-direction", "ltr");
      document.documentElement.style.setProperty(
        "--placeholder-direction",
        "start"
      );
    } else if (language === "ar") {
      document.documentElement.style.setProperty("--layout-direction", "rtl");
      document.documentElement.style.setProperty(
        "--placeholder-direction",
        "end"
      );
    } else {
      document.documentElement.style.setProperty("--layout-direction", "rtl");
      document.documentElement.style.setProperty(
        "--placeholder-direction",
        "end"
      );
    }
  }, [language]);
  return (
    <>
      <div className={styles.container}>
        {/* logo */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 78.82 112.74"
          className={styles.logo}
        >
          <g id="logo" transform="translate(-63.82 -361)">
            <path
              id="Path_378"
              data-name="Path 378"
              d="M360.119,361c3.44,1.252,5.136,6.808,3.286,11.037,2.608,1.382,2.821,6.513,1.341,9.383a14.776,14.776,0,0,1,6.756,5.956,20.94,20.94,0,0,1,3.285,9.49c.266,4.341-2.163,7.183-5.014,8.887-3.083,1.831-6.966,2.288-10.906,2.932a70.335,70.335,0,0,0-11.2,2.638c-3.347,1.138-7.51,2.992-9.357,5.575a25.937,25.937,0,0,0-3.088,6.343,27.689,27.689,0,0,0,2.508,22.672c-4.561-2.909-6.749-8.9-6.848-15.638-.108-7.026,1.709-13.047,5.506-16.9a24.126,24.126,0,0,1,7.433-4.783c2.894-1.268,6.108-1.78,9.635-2.446,6.31-1.18,15.207-1.614,17.268-6.937a8.528,8.528,0,0,0,.393-2.148,16.751,16.751,0,0,0-2.993-9.188,12.408,12.408,0,0,0-6.852-5.278c2.354-2.541,1.707-8.365-.582-10.461a7.919,7.919,0,0,0,1.159-4.883c-.1-1.006-.669-3.325-1.647-3.419-1.091-.1-2.089,2.241-2.213,3.326a8.509,8.509,0,0,0,1.062,4.788c-.464.684-1.078,1.064-1.535,1.855-1.487,2.549-.782,6.472.282,8.992-7.975,1.174-10.541,7.822-12.539,15.053.127-8.349,3.239-14.5,9.642-16.811a9.464,9.464,0,0,1,1.833-9.282c-2.058-4.246.254-9.322,3.381-10.748"
              transform="translate(-267.187)"
              fill="#bd202d"
              fillRule="evenodd"
            />
            <path
              id="Path_379"
              data-name="Path 379"
              d="M368.726,793.014c.021-.108.108-.053.108,0,5.9,5.426,3.728,18.776.955,26.094-1.4,3.654-3.387,6.473-4.923,9.774-1.489,3.221-2.825,8.182-1.355,11.922,2.728,6.883,11.777,9.324,21.523,8.887-6.813-2.708-11.239-7.834-14.576-14.076.273-.173.616.442.975.789,3.775,3.7,7.783,7.392,13.217,9.675a14.7,14.7,0,0,0,6.852,1.362c4.968-.368,7.775-3.542,8.763-7.917,1.118-4.847-.292-10.2-1.721-14.162-1.365-3.74-3.452-7.482-4.641-12.024-1.132-4.333-1.728-10.194-.094-14.458,2.88-7.537,11.467-12.344,21.8-9.186,8.4,2.568,14.13,8,19.108,14.076a40.776,40.776,0,0,0-13.7-8.609c-5.356-1.893-13.957-3.227-18.811,0-4.052,2.7-5.843,6.863-5.79,12.117.1,10.384,6.9,17.863,8.4,27.271.921,5.811-.769,10.229-4.156,13.087a13.53,13.53,0,0,1-5.687,2.941,19.842,19.842,0,0,1-9.453-.784c-6.321,2.612-15.35,1.135-19.775-1.951a15.877,15.877,0,0,1-6.469-11.341c-.356-4.72,1.348-7.9,3-10.848a61.311,61.311,0,0,0,7.326-20.329c.618-3.967.756-8.967-.872-12.31"
              transform="translate(-292.196 -377.391)"
              fill="#bd202d"
              fillRule="evenodd"
            />
            <path
              id="Path_380"
              data-name="Path 380"
              d="M466.4,975.224c-2.362-5.88,1.593-10.453,7.235-10.363a10.768,10.768,0,0,1,10.508,9.677,15.048,15.048,0,0,1,0,2.627c-.554,7.817-7.056,11.083-14.662,10.561-3.6-.24-6.2-1.482-9.082-3.032a18.866,18.866,0,0,0,8.7,1.565c5.39-.416,9.7-3.7,10.224-8.99a6.88,6.88,0,0,0-6.272-7.81c-4-.418-5.632,2.634-6.647,5.766"
              transform="translate(-381.469 -532.818)"
              fill="#bd202d"
              fillRule="evenodd"
            />
          </g>
        </svg>

        <div className={styles.search_box}>
          <input
            type="text"
            dir="auto"
            placeholder={`${
              languageState === "ar"
                ? "وش اللي في خاطرك"
                : languageState === "en"
                ? "What are you looking for?"
                : "وش اللي في خاطرك"
            }`}
          />
          {/* search icon  */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#939090"
            className={`w-6 h-6 ${styles.search_icon}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>

        {/* notification icon  */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.4"
          stroke="#646464"
          className={`w-6 h-6 ${styles.notification_icon}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
          />
        </svg>
      </div>
    </>
  );
};

export default Header;
