import { FC, memo, ReactNode } from "react";
import buildClassName from "../../utils/buildClassName.ts";
import styles from "./Button.module.scss";

interface OwnProps {
  children?: ReactNode;
  classes?: string;
  onClick?: () => void;
  type: "submit" | "reset" | "button";
}

const Button: FC<OwnProps> = ({ type, children, classes, onClick }) => {
  return (
    <button
      type={type}
      tabIndex={0}
      className={buildClassName(styles["Button"], classes)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default memo(Button);
