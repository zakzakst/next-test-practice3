// TODO: 下記らへん作る
// https://github.com/frontend-testing-book/nextjs/tree/main/src/components/layouts/BasicLayout/Header
import { LinkButton } from "@/components/atoms/LinkButton";
import { useUser } from "@/components/providers/User/UserProvider";
import clsx from "clsx";
import { useRouter } from "next/router";
import { Heading } from "./parts/Heading";
import { LoginUser } from "./parts/LoginUser";
import { Nav } from "./parts/Nav";
import styles from "./styles.module.css";
import { useDrawerMenu } from "./parts/useDrawerMenu";

export const Header = () => {
  const { user } = useUser();
  const { menuRef, isOpen, handleCloseMenu, handleOpenMenu } = useDrawerMenu();
  const router = useRouter();

  return (
    <header className={styles.header}>
      <Heading />
      {user ? (
        <>
          <button
            aria-label="メニューを開く"
            aria-controls="drawer"
            aria-expanded={isOpen}
            className={styles.openMenu}
            onClick={handleOpenMenu}
          >
            <span />
          </button>
          <div
            id="drawer"
            ref={menuRef}
            className={clsx(styles.menu, isOpen && styles.isOpen)}
          >
            <Nav onCloseMenu={handleCloseMenu} />
            <LoginUser />
          </div>
        </>
      ) : (
        router.asPath !== "/login" && (
          <LinkButton href="/login">ログイン</LinkButton>
        )
      )}
    </header>
  );
};
