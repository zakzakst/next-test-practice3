import type { Post } from "@/types/Post";
import Link from "next/link";
import { useId } from "react";
import Like from "./assets/like.svg";
import styles from "./styles.module.css";

type Props = {
  post: Post;
};

export const PostItem = ({ post }: Props) => {
  const titleId = useId();
  return (
    <li key={post.id} className={styles.item}>
      <Link href={`/posts/${post.id}`} aria-labelledby={titleId}>
        <img src={post.imageUrl || ""} alt="" />
        <div className={styles.content}>
          <div className={styles.description}>
            <p className={styles.title} id={titleId}>
              {post.title}
            </p>
            <p className={styles.authorName}>{post.authorName}</p>
          </div>
          <p className={styles.like}>
            {post.likeCount}
            <Like />
          </p>
        </div>
      </Link>
    </li>
  );
};
