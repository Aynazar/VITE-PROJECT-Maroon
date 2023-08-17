import { FC, memo, useRef, useState, useCallback, useEffect } from "react";
import styles from "./Tabs.module.scss";
import { ItemApi } from "../../../utils/apis/Items.ts";
import Typography from "../../ui/Typography.tsx";
import { Link } from "react-router-dom";
import IconButton from "../../ui/IconButton.tsx";
import { ReactComponent as ArrowIcon } from "../../../assets/icons/ARROW.svg";
import { ReactComponent as ArrowLeftIcon } from "../../../assets/icons/ARROW-LEFT.svg";

interface OwnProps {
  items: ItemApi[];
}

const Tabs: FC<OwnProps> = ({ items }) => {
  const [value, setValue] = useState<number>(0);
  const [disableds, setDisableds] = useState({
    right: false,
    left: true,
  });
  const ref = useRef<HTMLDivElement>(null);

  const onSwipeRight = useCallback(() => {
    if (ref.current) {
      console.log(ref.current.clientWidth);
      setValue((count) => count + ref.current!.clientWidth);
    }
  }, []);

  const onSwipeLeft = useCallback(() => {
    if (ref.current) {
      console.log(ref.current.clientWidth);
      setValue((count) => count - ref.current!.clientWidth);
    }
  }, []);

  useEffect(() => {
    if (ref.current) {
      const width = ref.current!.clientWidth as number;

      if (value === 0) {
        setDisableds({ left: true, right: false });
      } else if (value >= width) {
        setDisableds({ left: false, right: false });

        if (value >= items.length * width) {
          setDisableds({ left: false, right: true });
        }
      }
    }
  }, [value]);

  return (
    <div className={styles["Tabs"]}>
      <div
        className={styles["Tabs__inner"]}
        style={{ transform: `translateX(-${value}px)` }}
      >
        {items.map((obj) => (
          <div
            key={obj.id}
            ref={ref}
            className={styles["Tabs__item"]}
            style={{ backgroundImage: `url(${obj.pictureUrl})` }}
          >
            <div className={styles["Tabs__col"]}>
              <Typography
                variant={500}
                size={16}
                classes={styles["Tabs__title"]}
              >
                {obj.title}
              </Typography>
              <Typography
                variant={400}
                size={13}
                classes={styles["Tabs__description"]}
              >
                {obj.description}
              </Typography>

              <span className={styles["Tabs__link"]}>
                <Link to={`/product/${obj.id}`}>Подробнее</Link>
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className={styles["Tabs-arrow"]}>
        <IconButton
          onClick={onSwipeLeft}
          classes={styles["Tabs-arrow-left"]}
          disabled={disableds.left}
        >
          <ArrowLeftIcon />
        </IconButton>
        <IconButton
          onClick={onSwipeRight}
          classes={styles["Tabs-arrow-right"]}
          disabled={disableds.right}
        >
          <ArrowIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default memo(Tabs);
