import { memo } from "react";
import styles from "./Banner.module.scss";
import BANNER from "../../../assets/images/BANNER.jpg";
import Typography from "../../ui/Typography.tsx";
import Button from "../../ui/Button.tsx";

const Banner = () => {
  return (
    <div className={styles["Banner"]}>
      <img src={BANNER} alt={BANNER} className={styles["Banner__image"]} />

      <div className={styles["Banner__right"]}>
        <Typography variant={500} size={32} classes={styles["Banner__title"]}>
          Встречайте весну вместе с нами
        </Typography>
        <Typography variant={400} size={18} classes={styles["Banner__text"]}>
          Попробуйте новую коллекцию ухаживающих средств для лица с SPF защитой
        </Typography>
        <Button type="button">
          <Typography variant={500} size={16}>
            Подробнее
          </Typography>
        </Button>
      </div>
    </div>
  );
};

export default memo(Banner);
