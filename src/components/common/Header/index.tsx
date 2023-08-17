import { memo } from "react";
import Logo from "../../../assets/icons/MAROON.svg";
import Nav from "../Nav";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles["Header"]}>
      <img src={Logo} alt={Logo} />

      <Nav />
    </header>
  );
};

export default memo(Header);
