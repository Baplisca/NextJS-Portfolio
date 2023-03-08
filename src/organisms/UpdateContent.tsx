import { ReactElement } from "react";
import { useLanguageStore } from "../stores/language-store";
import styles from "./UpdateContent.module.scss";

interface IUpdateItem {
  value: ReactElement | string;
  date: string;
  value_en?: ReactElement | string;
  date_en?: string;
}

const updateItems: IUpdateItem[] = [
  {
    value: (
      <a
        href="https://baplisca.hatenablog.com/entry/2023/03/08/202113"
        rel="noreferrer noopener"
        target="_blank"
      >
        Web Speed Hackathon 2023 21位 でした
      </a>
    ),
    date: "2023.3.8",
    value_en: (
      <a
        href="https://baplisca.hatenablog.com/entry/2022/12/30/150812"
        rel="noreferrer noopener"
        target="_blank"
      >
        Web Speed Hackathon 2023 21th / 58
      </a>
    ),
    date_en: "2023-3-8",
  },
  {
    value: (
      <a
        href="https://baplisca.hatenablog.com/entry/2022/12/30/150812"
        rel="noreferrer noopener"
        target="_blank"
      >
        2022年振り返り
      </a>
    ),
    date: "2022.12.30",
    value_en: (
      <a
        href="https://baplisca.hatenablog.com/entry/2022/12/30/150812"
        rel="noreferrer noopener"
        target="_blank"
      >
        Year-end review 2022
      </a>
    ),
    date_en: "2022-12-30",
  },
  {
    value: (
      <a href="https://baplisca.onrender.com/">Heroku有料化に伴うサイト移動</a>
    ),
    date: "2022.10.29",
    value_en: (
      <a href="https://baplisca.onrender.com/">
        Site migration due to Heroku pricing changes
      </a>
    ),
    date_en: "2022-10-29",
  },
  {
    value: "縦長画像のリサイズ・資格更新",
    date: "2022.10.29",
    value_en: "Resize long images and update qualifications",
    date_en: "2022-10-29",
  },
  {
    value: "所属変更",
    date: "2022.4.6",
    value_en: "Affiliation change",
    date_en: "2022-04-06",
  },
  {
    value: "作品追加 (チャットボット)",
    date: "2021.12.12",
    value_en: "Added work (chatbot)",
    date_en: "2021-12-12",
  },
  {
    value: "アルバイト更新",
    date: "2021.8.5",
    value_en: "Part-time job update",
    date_en: "2021-08-05",
  },
  {
    value: "一部英語対応",
    date: "2021.7.15",
    value_en: "Partially supported English",
    date_en: "2021-07-15",
  },
  {
    value: "TOEICスコア更新",
    date: "2021.6.8",
    value_en: "Updated TOEIC score",
    date_en: "2021-06-08",
  },
  {
    value: "インターン更新",
    date: "2021.4.10",
    value_en: "Updated internship",
    date_en: "2021-04-10",
  },
  {
    value: "Aboutページ更新",
    date: "2020.11.18",
    value_en: "Updated about page",
    date_en: "2020-11-18",
  },
  {
    value: (
      <a href="https://baplisca.herokuapp.com/">React適用に伴うサイト移動</a>
    ),
    date: "2020.11.1",
    value_en: (
      <a href="https://baplisca.herokuapp.com/">
        Site moved due to React implementation
      </a>
    ),
    date_en: "2020-11-01",
  },
  {
    value: (
      <a
        href="https://www.youtube.com/channel/UCUEUc2teEFnYEXG-MtEncrA/playlists"
        rel="noreferrer noopener"
        target="_blank"
      >
        TadanoAction3DXGameのYoutube追加
      </a>
    ),
    date: "2020.10.16",
    value_en: (
      <a
        href="https://www.youtube.com/channel/UCUEUc2teEFnYEXG-MtEncrA/playlists"
        rel="noreferrer noopener"
        target="_blank"
      >
        Added TadanoAction3DXGame Youtube channel
      </a>
    ),
    date_en: "2020-10-16",
  },
  {
    value: (
      <a
        href="https://baplisca.hatenablog.com/entry/intern/nssol"
        rel="noreferrer noopener"
        target="_blank"
      >
        NSSOLインターンのブログリンク追加
      </a>
    ),
    date: "2020.10.12",
    value_en: (
      <a
        href="https://baplisca.hatenablog.com/entry/intern/nssol"
        rel="noreferrer noopener"
        target="_blank"
      >
        Added link to NSSOL internship blog
      </a>
    ),
    date_en: "2020-10-12",
  },
  {
    value: (
      <a
        href="https://baplisca.hatenablog.com/entry/supporterz-1on1"
        rel="noreferrer noopener"
        target="_blank"
      >
        エンジニア1on1に参加しました
      </a>
    ),
    date: "2020.10.5",
    value_en: (
      <a
        href="https://baplisca.hatenablog.com/entry/supporterz-1on1"
        rel="noreferrer noopener"
        target="_blank"
      >
        Participated in Engineer 1on1
      </a>
    ),
    date_en: "2020-10-05",
  },
  {
    value: (
      <a
        href="https://baplisca.hatenablog.com/entry/supporterz-geekten"
        rel="noreferrer noopener"
        target="_blank"
      >
        技育展に登壇しました
      </a>
    ),
    date: "2020.9.26",
    value_en: (
      <a
        href="https://baplisca.hatenablog.com/entry/supporterz-geekten"
        rel="noreferrer noopener"
        target="_blank"
      >
        Spoke at Supporterz Geekten
      </a>
    ),
    date_en: "2020-09-26",
  },
  {
    value: "Youtube埋め込み・デザイン変更",
    date: "2020.9.13",
    value_en: "Embedded YouTube videos and design changes",
    date_en: "2020-09-13",
  },
  {
    value: "フッターに各種リンク追加・ナビゲーションバー変更",
    date: "2020.9.4",
    value_en:
      "Added various links to the footer and changed the navigation bar",
    date_en: "2020-09-04",
  },
  {
    value: "インターンのブログリンク追加・フッター作成",
    date: "2020.9.3",
    value_en: "Added links to intern blogs and created footer",
    date_en: "2020-09-03",
  },
  {
    value: "インターン項目・受賞追加",
    date: "2020.8.23",
    value_en: "Added internship and award sections",
    date_en: "2020-08-23",
  },
  {
    value: "競プロライブラリ更新",
    date: "2020.7.22",
    value_en: "Updated competitive programming library",
    date_en: "2020-07-22",
  },
  {
    value: "フォント変更 Google Map埋め込み",
    date: "2020.6.11",
    value_en: "Changed font and embedded Google Maps",
    date_en: "2020-06-11",
  },
  {
    value: "スマホ対応, 画像圧縮 (PNG→JPEG)",
    date: "2020.5.29",
    value_en: "Made website responsive and compressed images (PNG → JPEG)",
    date_en: "2020-05-29",
  },
  {
    value: "競プロライブラリ追加",
    date: "2020.5.28",
    value_en: "Added competitive programming library",
    date_en: "2020-05-28",
  },
  {
    value: "HP作成",
    date: "2020.5.24",
    value_en: "Created website",
    date_en: "2020-05-24",
  },
];

const UpdateItem = () => {
  const languageStore = useLanguageStore();
  return updateItems.map((_item: IUpdateItem) => {
    const date =
      languageStore.isEnglish && _item.date_en ? _item.date_en : _item.date;
    const value =
      languageStore.isEnglish && _item.value_en ? _item.value_en : _item.value;
    return (
      <>
        <div style={{ marginRight: "50px" }}>
          <li className="DisableListDot">{date}</li>
          <li className="DisableListDot">{value}</li>
          <div className={styles.UpdateHrWrapper}>
            <hr className={styles.HrWrapper} />
          </div>
        </div>
        <br />
      </>
    );
  });
};

const UpdateContent = () => {
  return (
    <>
      <h2 className="AboutH2Wrapper">Updates</h2>
      <br />
      <div className={styles.ScrollOuterWrapper}>
        <div className={styles.ScrollWrapper}>
          <ul>{UpdateItem()}</ul>
        </div>
      </div>
      <br />
      <br />
      <br />
    </>
  );
};

export default UpdateContent;
