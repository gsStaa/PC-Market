import { Button } from "../../../../Modules/Button/Button";
import style from "./computersItem.module.css";
import { FC } from "react";

type TComputersItem = {
  src: string;
  label: string;
  price: number;
  name: string[];
  specifications: string[];
  ikon: string[];
};
export const ComputersItem: FC<TComputersItem> = ({
  src,
  label,
  price,
  name,
  specifications,
  ikon,
}) => {
  return (
    <div className={style.ComputersItem}>
      <img src={src} className={style.imgSrc} />
      <h3>{label}</h3>
      <h4>Цена {price} ₽</h4>
      <Button>В корзину</Button>
      <hr />
      <Button>Подробнее</Button>
      <hr />
      <div>
        <ul className={style.ul}>
          {name.map((name: string, index: number) => (
            <div className={style.specifications}>
              <img src={ikon[index]} className={style.srcIkon} />
              <li>
                <p>{name}</p>
                <p>{specifications[index]}</p>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};
