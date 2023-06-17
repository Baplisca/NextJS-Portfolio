import ContentsDisplay from "./ContentsDisplay";
import { IContent } from "../interfaces/about-content.interface";

const competitiveProgrammingItems: IContent[] = [
  {
    value: (
      <h2 className="H2Wrapper">
        <a
          href="https://github.com/Baplisca/Competitive-Programming-Library"
          rel="noreferrer noopener"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          競技プログラミング用のライブラリ
        </a>
      </h2>
    ),
    value_en: (
      <h2 className="H2Wrapper">
        <a
          href="https://github.com/Baplisca/Competitive-Programming-Library"
          rel="noreferrer noopener"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          Libraries for competitive programming
        </a>
      </h2>
    ),
    isDisableBr: true,
    isDisableDot: true,
  },
  {
    value:
      "競プロで頻繁に用いる処理をライブラリにしたものです。言語はC++です。",
    value_en:
      "This is a library of processing that is frequently used in competitive programming. Programming Language is C++",
    isDisableBr: true,
    isDisableDot: true,
  },
];
const libraryContents: IContent[][] = [
  [
    {
      value: "グラフ・木構造",
      value_en: "graph/tree structure",
      isDisableBr: true,
      isDisableDot: true,
    },
    {
      value: "幅優先探索 (BFS)",
      value_en: "breadth-first search (BFS)",
      isDisableBr: true,
    },
    {
      value: "辺彩色",
      value_en: "edge coloring",
      isDisableBr: true,
    },
    {
      value: "深さ優先探索 (DFS)",
      value_en: "depth-first search (DFS)",
      isDisableBr: true,
    },
    {
      value: "メモ化DFS",
      value_en: "DFS + Memoization",
      isDisableBr: true,
    },
    {
      value: "最小全域木",
      value_en: "Minimum Spanning Tree",
      isDisableBr: true,
    },
    {
      value: "2部グラフ判定",
      value_en: "Bipartite graph judgment",
      isDisableBr: true,
    },
    {
      value: "ワーシャルフロイド法",
      value_en: "Floyd–Warshall Algorithm",
      isDisableBr: true,
    },
    {
      value: "ダイクストラ法",
      value_en: "Dijkstra's algorithm",
      isDisableBr: true,
    },
    {
      value: "ベルマンフォード法",
      value_en: "Bellman–Ford algorithm",
      isDisableBr: true,
    },
  ],
  [
    {
      value: "動的計画法 (DP)",
      value_en: "dynamic programming (DP)",
      isDisableBr: true,
      isDisableDot: true,
    },
    {
      value: "1次元DP",
      value_en: "1D dynamic programming",
      isDisableBr: true,
    },
    {
      value: "LIS (最長増加部分列)",
      value_en: "Longest increasing subsequence",
      isDisableBr: true,
    },
    {
      value: "2次元DP",
      value_en: "2D dynamic programming",
      isDisableBr: true,
    },
    {
      value: "bitDP",
      value_en: "bit dynamic programming",
      isDisableBr: true,
    },
    {
      value: "区間DP",
      value_en: "section dynamic programming",
      isDisableBr: true,
    },
  ],
  [
    {
      value: "数学 (整数論)",
      value_en: "mathematics (number theory)",
      isDisableBr: true,
      isDisableDot: true,
    },
    {
      value: "エラトステネスのふるい",
      value_en: "Sieve of Eratosthenes",
      isDisableBr: true,
    },
    {
      value: "二項係数 (simple version)",
      value_en: "binomial coefficients (simple version)",
      isDisableBr: true,
    },
    {
      value: "二項係数 (mod version)",
      value_en: "binomial coefficients (mod version)",
      isDisableBr: true,
    },
    {
      value: "二項係数 (mod + memoization version)",
      value_en: "binomial coefficients (mod + memoization version)",
      isDisableBr: true,
    },
    {
      value: "重複順列",
      value_en: "duplicate permutation",
      isDisableBr: true,
    },
    {
      value: "約数列挙",
      value_en: "divisor enumeration",
      isDisableBr: true,
    },
    {
      value: "包除原理",
      value_en: "Principle of inclusion-exclusion (PIE)",
      isDisableBr: true,
    },
    {
      value: "逆元",
      value_en: "inverse element",
      isDisableBr: true,
    },
  ],
  [
    {
      value: "その他データ構造",
      value_en: "Other data structures",
      isDisableBr: true,
      isDisableDot: true,
    },
    {
      value: "累積和",
      value_en: "cumulative sum",
      isDisableBr: true,
    },
    {
      value: "2次元累積和",
      value_en: "2D cumulative sum",
      isDisableBr: true,
    },
    {
      value: "Binary Indexed Tree (BIT)",
      value_en: "Binary Indexed Tree (BIT)",
      isDisableBr: true,
    },
    {
      value: "区間加算BIT",
      value_en: "Section addition BIT",
      isDisableBr: true,
    },
    {
      value: "Range Sum Queries (RSQ)",
      value_en: "",
      isDisableBr: true,
    },
    {
      value: "セグメント木",
      value_en: "Segment Tree",
      isDisableBr: true,
    },
    {
      value: "1点更新セグメント木",
      value_en: "1-point update segment tree",
      isDisableBr: true,
    },
    {
      value: "Range Maximum Queries (RMQ)",
      value_en: "Range Maximum Queries (RMQ)",
      isDisableBr: true,
    },
    {
      value: "Range Sum Queries (RSQ)",
      value_en: "Range Sum Queries (RSQ)",
      isDisableBr: true,
    },
    {
      value: "遅延評価セグメント木",
      value_en: "lazy segment tree",
      isDisableBr: true,
    },
    {
      value: "Union-Find",
      value_en: "Union-Find",
      isDisableBr: true,
    },
    {
      value: "重み付きUnion-Find",
      value_en: "Weighted Union-Find",
      isDisableBr: true,
    },
    {
      value: "ダブリング",
      value_en: "dabbling",
      isDisableBr: true,
    },
    {
      value: "双対問題",
      value_en: "dual problem",
      isDisableBr: true,
    },
  ],
  [
    {
      value: "その他",
      value_en: "Others",
      isDisableBr: true,
      isDisableDot: true,
    },
    {
      value: "順列全探索",
      value_en: "Permutation exhaustive search",
      isDisableBr: true,
    },
    {
      value: "bit全探索",
      value_en: "bit exhaustive search",
      isDisableBr: true,
    },
    {
      value: "しゃくとり法",
      value_en: "Two-Pointer Techinique",
      isDisableBr: true,
    },
    {
      value: "二分探索",
      value_en: "binary search",
      isDisableBr: true,
    },
    {
      value: "いもす法",
      value_en: "imos method",
      isDisableBr: true,
    },
    {
      value: "座標圧縮",
      value_en: "coordinate compression",
      isDisableBr: true,
    },
  ],
];

const CompetitiveProgrammingContent = () => {
  return (
    <>
      {ContentsDisplay(competitiveProgrammingItems)}
      <br />
      <details>
        <summary>Library list</summary>
        <>
          {libraryContents.map((content, idx) => {
            return <ul key={idx}>{ContentsDisplay(content)}</ul>;
          })}
        </>
      </details>
    </>
  );
};

export default CompetitiveProgrammingContent;
