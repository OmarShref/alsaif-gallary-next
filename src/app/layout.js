import "./globals.css";
import styles from "./page.module.css";
import { Inter } from "next/font/google";
import Header from "@/components/header/Header";
import NavigationBar from "@/components/navigation-bar/NavigationBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alsaif Gallary",
  description: "Shop that has what you ever wanted",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.container}>
          <Header />
          {children}
          <NavigationBar />
        </div>
      </body>
    </html>
  );
}
