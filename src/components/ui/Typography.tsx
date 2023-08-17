import { FC, memo, ReactNode } from "react";
import styles from "./Typography.module.scss";
import buildClassName from "../../utils/buildClassName.ts";

interface OwnProps {
  children?: ReactNode;
  variant: 300 | 400 | 500 | 600 | 700 | 800 | 900;
  classes?: string;
  size?: number;
}
const Typography: FC<OwnProps> = ({ children, classes, variant, size }) => {
  return (
    <p
      className={buildClassName(
        styles["Typography"],
        styles[`Typography-size-${size}`],
        styles[`Typography-variant-${variant}`],
        classes,
      )}
    >
      {children}
    </p>
  );
};

export default memo(Typography);
