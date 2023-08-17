// @ts-nocheck
import { memo } from "react";
import styles from "./Bestsellers.module.scss";
import Typography from "../../ui/Typography.tsx";
import Button from "../../ui/Button.tsx";
import Tabs from "../Tabs";
import { ItemApi } from "../../../utils/apis/Items.ts";
import KREM_1 from "../../../assets/images/KREM-1.jpg";
import KREM_2 from "../../../assets/images/KREM-2.jpg";

const Bestsellers = () => {
  const items: ItemApi = [
    {
      id: 1,
      title: "High",
      description: "крем для лица",
      capacity: 50,
      pictureUrl: KREM_1,
      price: 250,
    },
    {
      id: 2,
      title: "Rest",
      description: "минеральная пудра",
      capacity: 50,
      pictureUrl: KREM_2,
      price: 550,
    },
    {
      id: 3,
      title: "High",
      description: "крем для лица",
      capacity: 50,
      pictureUrl: KREM_1,
      price: 250,
    },
    {
      id: 4,
      title: "Rest",
      description: "минеральная пудра",
      capacity: 50,
      pictureUrl: KREM_2,
      price: 550,
    },
    {
      id: 5,
      title: "High",
      description: "крем для лица",
      capacity: 50,
      pictureUrl: KREM_1,
      price: 250,
    },
    {
      id: 6,
      title: "Rest",
      description: "минеральная пудра",
      capacity: 50,
      pictureUrl: KREM_2,
      price: 550,
    },
  ];

  return (
    <div className={styles["Bestsellers"]}>
      <div className={styles["Bestsellers-left"]}>
        <Typography
          variant={500}
          size={32}
          classes={styles["Bestsellers-title"]}
        >
          Бестселлеры
        </Typography>
        <Typography
          variant={400}
          size={18}
          classes={styles["Bestsellers-text"]}
        >
          Легендарные продукты, завоевавшие любовь наших клиентов
        </Typography>
        <Button type="button">
          <Typography variant={500} size={16}>
            Смотреть все
          </Typography>
        </Button>
      </div>
      <div className={styles["Bestsellers-right"]}>
        <Tabs items={items} />
      </div>
    </div>
  );
};

export default memo(Bestsellers);
