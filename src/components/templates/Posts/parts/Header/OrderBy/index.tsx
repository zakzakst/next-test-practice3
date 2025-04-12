"use client";

import { SelectFilterOption } from "@/components/molecules/SelectFilterOption";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "./styles.module.css";

const options = [
  { value: "updatedAt", label: "更新日時順" },
  { value: "starCount", label: "スター数順" },
];

export const OrderBy = () => {
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const orderByParam = searchParams.get("orderBy");
  const orderBy = typeof orderByParam === "string" ? orderByParam : "";
  return (
    <SelectFilterOption
      title="並び順"
      className={styles.module}
      selectProps={{
        defaultValue: orderBy,
        onChange: (event) => {
          // push('', { query: { orderBy: event.currentTarget.value } });
          // TODO: ソート変更の実装分からない。。setSearchParamsとか使う？
          console.log(event);
          push(`/?${searchParams}`);
        },
      }}
      options={options}
    />
  );
};
