import clsx from "clsx";
import { ComponentProps, useId } from "react";
import { Combobox } from "@/components/molecules/Combobox";
import styles from "./styles.module.css";

type Props = {
  title: string;
  selectProps: Omit<ComponentProps<typeof Combobox>, "id" | "className">;
  options: {
    value: string;
    label: string;
  }[];
  className?: string;
};

export const SelectFilterOption = ({
  title,
  selectProps,
  options,
  className,
}: Props) => {
  const selectId = useId();
  return (
    <div className={clsx(className, styles.module)}>
      <label htmlFor={selectId} className={styles.title}>
        {title}
      </label>
      <Combobox id={selectId} {...selectProps}>
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </Combobox>
    </div>
  );
};
