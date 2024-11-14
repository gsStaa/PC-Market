import styles from "./Product.module.css";
import { ProductItem } from "./ProductItem/ProductItem";
import { FC } from "react";

type TProduct = {
  src: string;
  lable: string;
  desc: string;
};

export const Product: FC<TProduct> = () => {
  const dataProduct = [
    {
      src: "/ProductItem/1.png",
      lable: "Мощные пк",
      desc: "Компьютеры для киберспротсменов",
    },
    {
      src: "/ProductItem/2.png",
      lable: "Клавиатуры",
      desc: "Лучшие игровые клавиатуры",
    },
    {
      src: "/ProductItem/3.png",
      lable: "Мышки",
      desc: "Лучшие игровые мышки",
    },
    {
      src: "/ProductItem/4.png",
      lable: "Наушники",
      desc: "Лучшие игровые наушники",
    },
    {
      src: "/ProductItem/5.png",
      lable: "Маниторы",
      desc: "Лучшие игровые маниторы",
    },
  ];
  return (
    <div className={styles.product}>
      <h1 className={styles.productName}>
        Компьютеры и аксессуары.
        <span className={styles.spanGame}>
          {" "}
          Идеально подойдут к вашему гейменгу.
        </span>
      </h1>
      <ul className={styles.productUl}>
        {dataProduct.map((item) => (
          <li className={styles.productLi}>
            <ProductItem src={item.src} lable={item.lable} desc={item.desc} />
          </li>
        ))}
      </ul>
    </div>
  );
};
