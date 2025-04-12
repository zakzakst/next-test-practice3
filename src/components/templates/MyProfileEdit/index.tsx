import { Button } from "@/components/atoms/Button";
import { WatchCounter } from "@/components/atoms/WatchCounter";
import { ContentFooter } from "@/components/molecules/ContentFooter";
import { ContentHeader } from "@/components/molecules/ContentHeader";
import { TextareaWithInfo } from "@/components/molecules/TextareaWithInfo";
import { TextboxWithInfo } from "@/components/molecules/TextboxWithInfo";
// import { ProfileResponse } from "@/api/profile";
import { Avatar } from "./Avatar";
import styles from "./styles.module.css";

// type Props = {
//   profile: ProfileResponse;
// };

export const MyProfileEdit = () => {
  return (
    <form className={styles.module}>
      <ContentHeader
        title="プロフィール編集"
        description="登録されたプロフィールは一般公開され、誰でも閲覧できます"
        className={styles.contentHeader}
      />
      <div className={styles.content}>
        <div className={styles.avatar}>
          <Avatar />
        </div>
        <div className={styles.profile}>
          <TextboxWithInfo
            title="ユーザー名"
            className={styles.name}
            maxLength={32}
            info={<WatchCounter max={32} name="name" control={null} />}
          />
          <TextareaWithInfo
            title="自己紹介文"
            className={styles.bio}
            maxLength={128}
            rows={3}
            info={<WatchCounter max={128} name="bio" control={null} />}
          />
          <div className={styles.accounts}>
            <TextboxWithInfo
              title="Twitter"
              className={styles.twitter}
              maxLength={64}
            />
            <TextboxWithInfo
              title="GitHub"
              className={styles.github}
              maxLength={64}
            />
          </div>
        </div>
      </div>
      <ContentFooter className={styles.contentFooter}>
        <Button variant="large">プロフィールを変更する</Button>
      </ContentFooter>
    </form>
  );
};
