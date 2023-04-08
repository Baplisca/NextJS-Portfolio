import Image from "next/image";
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
            <Image
              src="/assets/linkedin.svg"
              alt="linkedin アイコン"
              width="60"
              height="60"
            />
          </a>
          <a
            href="https://twitter.com/sooooouls"
            rel="noreferrer noopener"
            target="_blank"
          >
            <Image
              src="/assets/twitter-icon.jpg"
              alt="Twitter アイコン"
              width="60"
              height="60"
            />
          </a>
          <a
            href="https://github.com/Baplisca"
            rel="noreferrer noopener"
            target="_blank"
          >
            <Image
              src="/assets/github-icon.jpg"
              alt="GitHub アイコン"
              width="60"
              height="60"
            />
          </a>
          <a
            href="https://baplisca.hatenablog.com/"
            rel="noreferrer noopener"
            target="_blank"
          >
            <Image
              src="/assets/hatena-icon.jpeg"
              alt="はてなブログ アイコン"
              width="60"
              height="60"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
