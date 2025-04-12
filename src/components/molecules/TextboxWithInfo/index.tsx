import { DescriptionMessage } from "@/components/atoms/DescriptionMessage";
import { ErrorMessage } from "@/components/atoms/ErrorMessage";
import { Textbox } from "@/components/atoms/Textbox";
import clsx from "clsx";
import { useId } from "react";
import styles from "./styles.module.css";

type Props = {
  title: string;
  info?: React.ReactNode;
  description?: string;
  error?: string;
} & React.ComponentPropsWithRef<typeof Textbox>;

export const TextboxWithInfo = ({
  title,
  info,
  description,
  error,
  className,
  ref,
  ...props
}: Props) => {
  const componentId = useId();
  const textboxId = `${componentId}-textbox`;
  const descriptionId = `${componentId}-description`;
  const errorMessageId = `${componentId}-errorMessage`;

  return (
    <section className={clsx(className, styles.module)}>
      <header className={styles.header}>
        <label className={styles.label} htmlFor={textboxId}>
          {title}
        </label>
        {info}
      </header>
      <Textbox
        {...props}
        ref={ref}
        id={textboxId}
        aria-invalid={!!error}
        aria-errormessage={errorMessageId}
        aria-describedby={description ? descriptionId : undefined}
      />
      {(error || description) && (
        <footer className={styles.footer}>
          {description && (
            <DescriptionMessage id={descriptionId}>
              {description}
            </DescriptionMessage>
          )}
          {error && (
            <ErrorMessage id={errorMessageId} className={styles.error}>
              {error}
            </ErrorMessage>
          )}
        </footer>
      )}
    </section>
  );
};
