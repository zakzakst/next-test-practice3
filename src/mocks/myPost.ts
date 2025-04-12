import type { MyPostsResponse } from "@/api/myPosts";

const myPostsMock: MyPostsResponse["posts"] = [
  {
    id: 1,
    title: "フロントエンドテストの例",
    description: "この投稿はフロントエンドテストの例です。",
    body: "フロントエンドテストの詳細な説明をここに記載します。",
    imageUrl: "https://picsum.photos/id/237/200/200",
    published: true,
    authorId: 1,
  },
  {
    id: 2,
    title: "テストの重要性について",
    description: "テストがなぜ重要なのかを解説します。",
    body: "テストの重要性やその利点について詳しく説明します。",
    imageUrl: "https://picsum.photos/id/238/200/200",
    published: true,
    authorId: 1,
  },
  {
    id: 3,
    title: "テストツールの選び方",
    description: "適切なテストツールを選ぶためのガイドです。",
    body: "テストツールの種類や選び方について詳しく解説します。",
    imageUrl: "https://picsum.photos/id/239/200/200",
    published: false,
    authorId: 1,
  },
  {
    id: 4,
    title: "ユニットテストの基本",
    description: "ユニットテストの基本的な概念を学びましょう。",
    body: "ユニットテストの目的や実施方法について説明します。",
    imageUrl: "https://picsum.photos/id/240/200/200",
    published: true,
    authorId: 1,
  },
  {
    id: 5,
    title: "エンドツーエンドテストの実践",
    description: "エンドツーエンドテストの実践方法を紹介します。",
    body: "エンドツーエンドテストの手順や注意点について解説します。",
    imageUrl: "https://picsum.photos/id/241/200/200",
    published: true,
    authorId: 1,
  },
  {
    id: 6,
    title: "テスト自動化のメリット",
    description: "テスト自動化の利点を詳しく説明します。",
    body: "テスト自動化を導入することで得られるメリットについて解説します。",
    imageUrl: "https://picsum.photos/id/242/200/200",
    published: true,
    authorId: 1,
  },
  {
    id: 7,
    title: "テスト戦略の立て方",
    description: "効果的なテスト戦略を立てる方法を学びます。",
    body: "テスト戦略の計画方法や実施例について詳しく説明します。",
    imageUrl: "https://picsum.photos/id/243/200/200",
    published: true,
    authorId: 1,
  },
];

export const myPostsResponseMock: MyPostsResponse = {
  posts: myPostsMock,
  pagination: {
    current: 2,
    prev: 1,
    next: 3,
    items: [1, 2, 3, 4, 5],
  },
  paginationInfo: {
    start: 11,
    end: 20,
    hitCount: 46,
  },
};
