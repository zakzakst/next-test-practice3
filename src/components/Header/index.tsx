// TODO: 下記らへん作る
// https://github.com/frontend-testing-book/nextjs/tree/main/src/components/layouts/BasicLayout/Header
import { LinkButton } from "@/components/atoms/LinkButton";
import { useUser } from "@/components/providers/User/UserProvider";

export const Header = () => {
  const { user } = useUser();
  return (
    <header>
      {user ? (
        <p>
          {user.id}: {user.name}
        </p>
      ) : (
        <p>ユーザー情報がありません</p>
      )}
    </header>
  );
};
