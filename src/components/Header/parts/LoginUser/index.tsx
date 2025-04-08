import { Button } from "@/components/atoms/Button";
import styles from "./styles.module.css";
import { useUser } from "@/components/providers/User/UserProvider";

export const LoginUser = () => {
  const { user, logout } = useUser();

  return (
    <section
      role="region"
      aria-label="ログインユーザー"
      className={styles.user}
    >
      <p className={styles.userName}>{user?.name}</p>
      <p
        className={styles.thumbnail}
        style={{ backgroundImage: `url(${user?.imageUrl})` }}
      />
      <div className={styles.logout}>
        <div className={styles.logoutInner}>
          <div className={styles.logoutBox}>
            <Button
              theme="transparent"
              variant="small"
              onClick={() => logout()}
            >
              ログアウト
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
