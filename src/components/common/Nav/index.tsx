import { memo } from "react";
import { ReactComponent as UserIcon } from "../../../assets/icons/USER.svg";
import { ReactComponent as ShopIcon } from "../../../assets/icons/SHOP.svg";
import styles from "./Nav.module.scss";

const Nav = () => {
  return (
    <nav className={styles["Nav"]}>
      <div className={styles["Nav__link"]}>Каталог</div>
      <div className={styles["Nav__link"]}>О нас</div>
      <div className={styles["Nav__link"]}>Контакты</div>
      <span className={styles["Nav__icon"]}>
        <UserIcon />
      </span>
      <span className={styles["Nav__icon"]}>
        <ShopIcon />
      </span>
    </nav>
  );
};

export default memo(Nav);
