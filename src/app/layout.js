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

// const getCategoriesData = async () => {
//   const res = await fetch("https://v2-api.alsaifgallery.com/graphql", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       query: `
//     query {
//     agMegaMenuTree {
//       items {
//         id
//         name
//         icon
//         url
//         label
//         label_text_color
//         label_background_color
//         page_builder {
//           json_encoded
//         }
//         children {
//           id
//           name
//           icon
//           url
//           label
//           label_text_color
//           label_background_color
//         }
//       }
//     }
//   }
//   `,
//     }),
//   });
//   return res.json();
// };

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
