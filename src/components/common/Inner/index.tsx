import { memo } from "react";
import styles from "./Inner.module.scss";
import INNER from "../../../assets/images/MainPage.jpg";
import INNER_PAGE_1 from "../../../assets/images/Inner/INNER-1.jpg";
import Typography from "../../ui/Typography.tsx";
import { ReactComponent as ArrowIcon } from "../../../assets/icons/ARROW.svg";
import IconButton from "../../ui/IconButton.tsx";
import INNER_PAGE_2 from "../../../assets/images/Inner/INNER-2.jpg";
import Button from "../../ui/Button.tsx";

const Inner = () => {
  return (
    <div className={styles["Inner"]}>
      <div
        className={styles["Inner-inner-image"]}
        style={{ backgroundImage: `url(${INNER})` }}
      />
      <ul className={styles["Inner__card"]}>
        <li className={styles["Inner__card-item"]}>
          <div
            className={styles["Inner__card-picture"]}
            style={{ backgroundImage: `url(${INNER_PAGE_1})` }}
          ></div>
          <div className={styles["Inner__card-content"]}>
            <Typography size={16} variant={500}>
              Уход для лица
            </Typography>
            <IconButton>
              <ArrowIcon />
            </IconButton>
          </div>
        </li>
        <li className={styles["Inner__card-item"]}>
          <Typography size={58} variant={500} classes={styles["Inner-title"]}>
            maroon
          </Typography>
          <Typography
            size={18}
            variant={400}
            classes={styles["Inner-subtitle"]}
          >
            Натуральная косметика для бережного ухода за кожей
          </Typography>
          <Button classes={styles["Inner-button"]}>
            <Typography size={16} variant={500} classes={styles["Inner-text"]}>
              Подробнее
            </Typography>
          </Button>
        </li>
        <li className={styles["Inner__card-item"]}>
          <div
            className={styles["Inner__card-picture"]}
            style={{ backgroundImage: `url(${INNER_PAGE_2})` }}
          ></div>
          <div className={styles["Inner__card-content"]}>
            <Typography size={16} variant={500}>
              Уход для тела
            </Typography>
            <IconButton>
              <ArrowIcon />
            </IconButton>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default memo(Inner);
