import clsx from "clsx";
import styles from "./styles.module.css";

type Props = {
  theme?: "dark" | "light" | "transparent" | "blue" | "error";
  variant?: "small" | "medium" | "large";
} & React.ComponentPropsWithRef<"button">;

export const Button = ({
  className,
  theme = "dark",
  variant = "medium",
  ref,
  ...props
}: Props) => {
  return (
    <button
      {...props}
      ref={ref}
      className={clsx(className, styles.module)}
      data-theme={theme}
      data-variant={variant}
    ></button>
  );
};
