import { NextPage } from "next";
import styled from "styled-components";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import styles from "./Navbar.module.scss";
import { useRouter } from "next/router";

// FontAweSome Bug :  https://stackoverflow.com/questions/56334381/why-my-font-awesome-icons-are-being-displayed-big-at-first-and-then-updated-to-t
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core";
import { useLanguageStore } from "../stores/language-store";
import { usePageStore } from "../stores/page-store";
config.autoAddCss = false; /* eslint-disable import/first */

const Navbar: NextPage = () => {
  const router = useRouter();
  const languageStore = useLanguageStore();
  const pageStore = usePageStore();
  return (
    <>
      <div className={styles.HeaderWrapper}>
        <div></div>
        <ul className={styles.HeaderMenu}>
          <li>
            <Link
              className={styles.MyNavLink}
              onClick={() => {
                pageStore.setPage("about");
              }}
              href={languageStore.isEnglish ? "/about_en" : "/"}
            >
              <FontAwesomeIcon
                icon={faAddressCard}
                style={{ marginRight: "10px" }}
              />
              About
            </Link>
          </li>
          <li>
            <Link
              className={styles.MyNavLink}
              onClick={() => {
                pageStore.setPage("work");
              }}
              href={languageStore.isEnglish ? "/work_en" : "/work"}
            >
              <FontAwesomeIcon
                icon={faLaptopCode}
                style={{ marginRight: "10px" }}
              />
              Work
            </Link>
          </li>
          <li className={styles.GapWrapper}>|</li>
          <li
            className={styles.LngWrapper}
            onClick={() => {
              languageStore.setLanguage("Ja"),
                pageStore.page == "about"
                  ? router.push("/")
                  : router.push("work");
            }}
          >
            あ
          </li>
          <li
            className={styles.LngWrapper}
            onClick={() => {
              languageStore.setLanguage("En"),
                pageStore.page == "about"
                  ? router.push("/about_en")
                  : router.push("/work_en");
            }}
          >
            A
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
