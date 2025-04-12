"use client";

import { Button } from "@/components/atoms/Button";
import { TextboxWithError } from "@/components/molecules/TextboxWithError";
import { LoginInput, LoginInputSchema } from "@/api/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useUser } from "@/components/providers/User/UserProvider";
import { userMock } from "@/mocks/user";
import { useRouter } from "next/navigation";
import styles from "./styles.module.css";

const defaultValues: LoginInput = {
  email: "",
  password: "",
};

export const Login = () => {
  const { login } = useUser();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: zodResolver(LoginInputSchema),
  });

  return (
    <form
      className={styles.module}
      onSubmit={handleSubmit(async (values) => {
        console.log(values);
        login(userMock);
        router.push("/");
      })}
    >
      <div className={styles.image}></div>
      <div className={styles.inputs}>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>ログイン</legend>
          <div className={styles.email}>
            <label htmlFor="email">メールアドレス</label>
            <TextboxWithError
              {...register("email")}
              id="email"
              type="text"
              placeholder="example@test.com"
              error={errors.email?.message}
            />
          </div>
          <div className={styles.password}>
            <label htmlFor="password">パスワード</label>
            <TextboxWithError
              {...register("password")}
              id="password"
              type="password"
              placeholder="8文字以上で入力"
              error={errors.password?.message}
            />
          </div>
        </fieldset>
        <Button variant="large" className={styles.button}>
          ログイン
        </Button>
      </div>
    </form>
  );
};
