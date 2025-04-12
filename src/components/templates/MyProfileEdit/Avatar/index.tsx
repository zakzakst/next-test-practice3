import { InputFileButton } from "@/components/atoms/InputFileButton";
import styles from "./styles.module.css";

export const Avatar = () => {
  return (
    <div className={styles.module}>
      <p className={styles.avatar}>
        {/* NOTE: 画像アップロード周りの処理が難しかったので、一旦ダミー画像だけ入れている */}
        <img src="https://picsum.photos/id/237/200/200" alt="" />
      </p>
      <InputFileButton
        buttonProps={{
          children: "写真を変更する",
          type: "button",
        }}
        inputProps={{
          "data-testid": "file",
          accept: "image/png, image/jpeg",
        }}
      />
    </div>
  );
};
