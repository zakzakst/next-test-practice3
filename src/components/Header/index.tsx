"use client";
import { LinkButton } from "@/components/atoms/LinkButton";
import { useUser } from "@/components/providers/User/UserProvider";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { Heading } from "./parts/Heading";
import { LoginUser } from "./parts/LoginUser";
import { Nav } from "./parts/Nav";
import styles from "./styles.module.css";
import { useDrawerMenu } from "./parts/useDrawerMenu";

export const Header = () => {
  const { user } = useUser();
  const { menuRef, isOpen, handleCloseMenu, handleOpenMenu } = useDrawerMenu();
  const pathname = usePathname();

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
        pathname !== "/login" && <LinkButton href="/login">ログイン</LinkButton>
      )}
    </header>
  );
};
