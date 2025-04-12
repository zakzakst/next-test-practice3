import { Button } from "@/components/atoms/Button";
import clsx from "clsx";
import styles from "./styles.module.css";

type Props = {
  buttonProps: React.ComponentProps<typeof Button>;
  inputProps: {
    [K in `data-${string}`]: string;
  } & React.ComponentPropsWithoutRef<"input">;
  className?: string;
  ref?: React.Ref<HTMLInputElement>;
};

export const InputFileButton = ({
  buttonProps,
  inputProps,
  className,
  ref,
}: Props) => {
  return (
    <div className={clsx(styles.module, className)}>
      <input aria-label="画像選択" {...inputProps} type="file" ref={ref} />
      <Button {...buttonProps} />
    </div>
  );
};
