import { DescriptionMessage } from "@/components/atoms/DescriptionMessage";
import { ErrorMessage } from "@/components/atoms/ErrorMessage";
import { Textarea } from "@/components/atoms/Textarea";
import clsx from "clsx";
import { useId } from "react";
import styles from "./styles.module.css";

type Props = {
  title: string;
  info?: React.ReactNode;
  description?: string;
  error?: string;
} & React.ComponentPropsWithRef<typeof Textarea>;

export const TextareaWithInfo = ({
  title,
  info,
  description,
  error,
  className,
  ref,
  ...props
}: Props) => {
  const componentId = useId();
  const textareaId = `${componentId}-textarea`;
  const descriptionId = `${componentId}-description`;
  const errorMessageId = `${componentId}- errorMessage`;
  return (
    <section className={clsx(className, styles.module)}>
      <header className={styles.header}>
        <label htmlFor={textareaId} className={styles.label}>
          {title}
        </label>
        {info}
      </header>
      <Textarea
        {...props}
        ref={ref}
        id={textareaId}
        aria-invalid={!!error}
        aria-errormessage={errorMessageId}
        aria-describedby={description ? descriptionId : undefined}
      />
      {(description || error) && (
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
