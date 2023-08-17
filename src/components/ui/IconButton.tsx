import { FC, memo, ReactNode } from "react";
import styles from "./IconButton.module.scss";
import buildClassName from "../../utils/buildClassName.ts";

interface OwnProps {
  children?: ReactNode;
  onClick?: () => void;
  classes?: string;
  disabled?: boolean;
}

const IconButton: FC<OwnProps> = ({ children, onClick, classes, disabled }) => {
  return (
    <button
      disabled={disabled}
      type="submit"
      className={buildClassName(styles["IconButton"], classes)}
      tabIndex={1}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default memo(IconButton);
