import type { Post, PostDetail } from "@/types/Post";
import type { PostsResponse } from "@/api/posts";

export const postsMock: Post[] = [
  {
    id: 1,
    imageUrl: "https://picsum.photos/id/237/200/200",
    title: "初めての投稿",
    authorName: "山田 太郎",
    likeCount: 2,
  },
  {
    id: 2,
    imageUrl: "https://picsum.photos/id/238/200/200",
    title: "お気に入りの本",
    authorName: "佐藤 花子",
    likeCount: 11,
  },
  {
    id: 3,
    imageUrl: "https://picsum.photos/id/239/200/200",
    title: "旅行の思い出",
    authorName: "田中 一郎",
    likeCount: 3,
  },
  {
    id: 4,
    imageUrl: "https://picsum.photos/id/240/200/200",
    title: "新しい趣味",
    authorName: "鈴木 次郎",
    likeCount: 9,
  },
  {
    id: 5,
    imageUrl: "https://picsum.photos/id/241/200/200",
    title: "映画鑑賞",
    authorName: "高橋 美咲",
    likeCount: 20,
  },
  {
    id: 6,
    imageUrl: "https://picsum.photos/id/242/200/200",
    title: "ランニング日記",
    authorName: "中村 健",
    likeCount: 5,
  },
  {
    id: 7,
    imageUrl: "https://picsum.photos/id/243/200/200",
    title: "ペットとの時間",
    authorName: "小林 由美",
    likeCount: 16,
  },
  {
    id: 8,
    imageUrl: "https://picsum.photos/id/244/200/200",
    title: "仕事の合間に",
    authorName: "松本 大輔",
    likeCount: 4,
  },
  {
    id: 9,
    imageUrl: "https://picsum.photos/id/250/200/200",
    title: "週末の予定",
    authorName: "伊藤 彩",
    likeCount: 24,
  },
  {
    id: 10,
    imageUrl: "https://picsum.photos/id/251/200/200",
    title: "新しいガジェット",
    authorName: "渡辺 翔",
    likeCount: 7,
  },
];

export const postsResponseMock: PostsResponse = {
  posts: postsMock,
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

const postDetailMockBody = `
### 見出し

テキストが入ります。テキストが入ります。
`;

export const postDetailMock: PostDetail = {
  title: "記事タイトル",
  description: "記事概要",
  imageUrl: "https://picsum.photos/id/250/200/200",
  body: postDetailMockBody,
  authorId: 1,
  likeCount: 10,
  liked: false,
};
