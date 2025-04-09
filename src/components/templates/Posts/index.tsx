import type { Post } from "@/types/Post";
import {
  PaginationInfo,
  Props as PaginationInfoProps,
} from "@/components/atoms/PaginationInfo";
import { Pagination } from "@/components/molecules/Pagination";
import { PaginationProps } from "@/lib/util/pagination";
import { Header } from "./parts/Header";
import { PostItem } from "./parts/PostItem";
import styles from "./styles.module.css";

type PostListProps = {
  posts: Post[];
};

const PostList = ({ posts }: PostListProps) => {
  return (
    <section aria-label="記事一覧">
      <ul className={styles.list}>
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
};

type Props = {
  posts: Post[];
  pagination: PaginationProps;
  paginationInfo: PaginationInfoProps;
};

export const Posts = ({ posts, pagination, paginationInfo }: Props) => {
  return (
    <section aria-label="最新投稿一覧" className={styles.module}>
      <Header />
      <PostList posts={posts} />
      <Pagination pagination={pagination} pathname="/" />
      <PaginationInfo {...paginationInfo} />
    </section>
  );
};
