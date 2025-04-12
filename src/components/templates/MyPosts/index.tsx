import type { MyPostsResponse } from "@/api/myPosts";
import { Posts } from "./Posts";
import { Profile } from "./Profile";
import styles from "./styles.module.css";
import { profileMock } from "@/mocks/profile";

type Props = {
  posts: MyPostsResponse;
};

export const MyPosts = ({ posts }: Props) => {
  const profile = profileMock;
  return (
    <div className={styles.module}>
      <div className={styles.profile}>
        {profile && <Profile {...profile} />}
      </div>
      <div className={styles.posts}>
        <Posts {...posts} />
      </div>
    </div>
  );
};
