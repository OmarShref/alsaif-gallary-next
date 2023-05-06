import styles from "./page.module.css";

export const metadata = {
  title: "Alsaif Gallary home",
  description: "Shop that has what you ever wanted",
};

const getCategoriesData = async () => {
  const res = await fetch("https://v2-api.alsaifgallery.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
    query {
    agMegaMenuTree {
      items {
        id
        name
        icon
        url
        label
        label_text_color
        label_background_color
        page_builder {
          json_encoded
        }
        children {
          id
          name
          icon
          url
          label
          label_text_color
          label_background_color
        }
      }
    }
  }
  `,
    }),
  });
  return res.json();
};

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <p>foooooooooooo</p>
      <p>dskjflksjfljs</p>
      <p>dskjflksjfljs</p>
      <p>dskjflksjfljs</p>
      <p>dskjflksjfljs</p>
      <p>dskjflksjfljs</p>
      <p>dskjflksjfljs</p>
      <p>dskjflksjfljs</p>
      <p>dskjflksjfljs</p>
      <p>dskjflksjfljs</p>
      <p>dskjflksjfljs</p>
      <p>dskjflksjfljs</p>
      <p>dskjflksjfljs</p>
      <p>dskjflksjfljs</p>
      <p>dskjflksjfljs</p>
      <p>dskjflksjfljs</p>
      <p>dskjflksjfljs</p>
      <p>dskjflksjfljs</p>
      <p>dskjflksjfljs</p>
      <p>dskjflksjfljs</p>
      <p>dskjflksjfljs</p>
      <p>dskjflksjfljs</p>
      <p>dskjflksjfljs</p>
      <p>dskjflksjfljs</p>
      <p>dskjflksjfljs</p>
      <p>dskjflksjfljs</p>
      <p>dskjflksjfljs</p>
      <p>dskjflksjfljs</p>
      <p>dskjflksjfljs</p>
      <p>dskjflksjfljs</p>
      <p>dskjflksjfljs</p>
      <p>fooooooooooo</p>
      {children}
    </div>
  );
};

export default Layout;
