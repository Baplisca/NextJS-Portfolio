import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
      <hr />
      <br />
      <div className={styles.FooterWrapper}>
        <div className={styles.FooterInnerWrapper}>
          <a
            href="https://www.linkedin.com/in/koetsu-yokota-9675811b5/"
            rel="noreferrer noopener"
            target="_blank"
          >
            <img src="/assets/linkedin.svg" alt="linkedin アイコン" />
          </a>
          <a
            href="https://x.com/sooooouls"
            rel="noreferrer noopener"
            target="_blank"
          >
            <img src="/assets/x-icon.jpeg" alt="X アイコン" />
          </a>
          <a
            href="https://github.com/Baplisca"
            rel="noreferrer noopener"
            target="_blank"
          >
            <img src="/assets/github-icon.jpg" alt="GitHub アイコン" />
          </a>
          <a
            href="https://baplisca.hatenablog.com/"
            rel="noreferrer noopener"
            target="_blank"
          >
            <img src="/assets/hatena-icon.jpeg" alt="はてなブログ アイコン" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
