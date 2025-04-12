import type { MyPostsResponse } from "@/api/myPosts";
import clsx from "clsx";
import Link from "next/link";
import { useId } from "react";
import styles from "./styles.module.css";

type Props = {
  post: MyPostsResponse["posts"][0];
};

export const PostItem = ({ post }: Props) => {
  const titleId = useId();
  return (
    <li className={clsx(styles.item, !post.published && styles.draft)}>
      <Link href={`/my/posts/${post.id}`} aria-labelledby={titleId}>
        {post.imageUrl && <img src={post.imageUrl} alt="" />}
        <div className={styles.content}>
          <p className={styles.title} id={titleId}>
            {post.title}
          </p>
          <p className={styles.description}>{post.description}</p>
        </div>
      </Link>
    </li>
  );
};
