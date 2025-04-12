import { PaginationInfo } from "@/components/atoms/PaginationInfo";
import { Pagination } from "@/components/molecules/Pagination";
import type { MyPostsResponse } from "@/api/myPosts";
import { Header } from "./Header";
import { NoItems } from "./NoItems";
import { PostItem } from "./PostItem";
import styles from "./styles.module.css";

type PostsListProps = {
  posts: MyPostsResponse["posts"];
};

const PostsList = ({ posts }: PostsListProps) => {
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

type Props = MyPostsResponse;

export const Posts = ({ posts, pagination, paginationInfo }: Props) => {
  return (
    <section aria-label="投稿記事一覧">
      <Header />
      {!posts.length ? (
        <NoItems />
      ) : (
        <>
          <PostsList posts={posts} />
          <Pagination pagination={pagination} pathname="/my/posts" />
          <PaginationInfo {...paginationInfo} />
        </>
      )}
    </section>
  );
};
