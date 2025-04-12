import { LinkButton } from "@/components/atoms/LinkButton";
import type { ProfileResponse } from "@/api/profile";
import { Accounts } from "./Accounts";
import Star from "./assets/star.svg";
import styles from "./styles.module.css";

type Props = ProfileResponse;

export const Profile = ({
  imageUrl,
  name,
  likeCount,
  bio,
  githubAccount,
  twitterAccount,
}: Props) => {
  return (
    <section role="region" aria-label="プロフィール" className={styles.module}>
      <div className={styles.profile}>
        <p className={styles.avatar}>
          <img src={imageUrl} alt="" />
        </p>
        <div className={styles.info}>
          <p className={styles.name}>{name}</p>
          <p className={styles.likes}>
            <Star /> {likeCount}
          </p>
          <p className={styles.bio}>{bio}</p>
          <LinkButton href="/my/profile/edit">変更する</LinkButton>
        </div>
      </div>
      <Accounts githubAccount={githubAccount} twitterAccount={twitterAccount} />
    </section>
  );
};
