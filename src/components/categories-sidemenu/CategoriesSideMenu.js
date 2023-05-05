"use client";
import styles from "./CategoriesSideMenu.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CategoriesSideMenu({ data }) {
  const pathName = usePathname();
  return (
    <div className={styles.side_menu}>
      {data.agMegaMenuTree.items.map((item, i) => (
        <div key={item.id} className={styles.grid_row}>
          <Link
            href={`/categories${item.url}`.replace(".html", "")}
            className={
              pathName.includes(`${item.url}`.replace(".html", ""))
                ? `${styles.side_menu_link} ${styles.active_side_menu_link}`
                : `${styles.side_menu_link}`
            }
            // onClick={() => {
            //   setItemChildren(item.children);
            //   setBannerUrl(getUrl(item.page_builder.json_encoded));
            //   setCategoryName(item.name);
            //   setLastCategory(`.${item.url}`.replace(".html", ""));
            //   setIndex(i);
            // }}
          >
            <img src={`${item.icon}?width=128`} alt={item.name + " icon"} />
            <p>{item.name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
