import { FC, useCallback, useState } from "react";
import { Breadcrumb } from "../../../Modules/Breadcrumb/Breadcrumb";
import style from "./Computers.module.css";
import { ComputersItem } from "./ComputersItem/ComputersItem";
import { FilterComputer } from "./FilterComputer/FilterComputer";

type TComputer = {
  idSpecifications: string[];
};
export const Computers: FC<TComputer> = () => {
  const dataComputers = [
    {
      src: "/Computers/1.png",
      label: "EDELWEISS NITRO",
      price: 99910,
      name: [
        "Видеокарта:",
        "Процессор:",
        "Материнская плата:",
        "Оперативная память:",
      ],
      specifications: [
        "NVIDIA GЕFORCE RTX 3060 12Гб",
        "Intel Core i3-13100F 3300 МГц",
        "Gigabyte H610M S2H",
        "16Гб DDR4 3000 МГц",
      ],
      ikon: [
        "/Computers/Item/1.png",
        "/Computers/Item/2.png",
        "/Computers/Item/3.png",
        "/Computers/Item/4.png",
      ],
      idSpecifications: [
        "RTX 3060",
        "Intel Core i3",
        "Gigabyte H610M S2H",
        "16Гб",
      ],
    },
    {
      src: "/Computers/2.png",
      label: "EDELWEISS LUCIFER",
      price: 366700,
      name: [
        "Видеокарта:",
        "Процессор:",
        "Материнская плата:",
        "Оперативная память:",
      ],
      specifications: [
        "PALIT GEFORCE RTX 4080 SUPER JetStream 16 Гб",
        "Intel Core i9-13900KF 3200 МГц",
        "Gigabyte Z790 UD D5",
        "32 Гб Kingston Hyperx Fury 6000МГц",
      ],
      ikon: [
        "/Computers/Item/1.png",
        "/Computers/Item/2.png",
        "/Computers/Item/3.png",
        "/Computers/Item/4.png",
      ],
      idSpecifications: [
        "RTX 4080 SUPER",
        "Intel Core i9",
        "Gigabyte Z790 UD D5",
        "32Гб",
      ],
    },
    {
      src: "/Computers/3.png",
      label: "EDELWEISS RANGER",
      price: 389060,
      name: [
        "Видеокарта:",
        "Процессор:",
        "Материнская плата:",
        "Оперативная память:",
      ],
      specifications: [
        "GIGABYTE GEFORCE RTX 4080 SUPER GAMING 16 Гб",
        "AMD Ryzen 9 7900X 4700/5600 МГц",
        "ASUS PRIME X670-P",
        "64Гб DDR5 VULCAN 6000 МГц W",
      ],
      ikon: [
        "/Computers/Item/1.png",
        "/Computers/Item/2.png",
        "/Computers/Item/3.png",
        "/Computers/Item/4.png",
      ],
      idSpecifications: [
        "RTX 4080 SUPER",
        "AMD Ryzen 9",
        "ASUS PRIME X670-P",
        "64Гб",
      ],
    },
    {
      src: "/Computers/4.png",
      label: "EDELWEISS RAPTOR",
      price: 149650,
      name: [
        "Видеокарта:",
        "Процессор:",
        "Материнская плата:",
        "Оперативная память:",
      ],
      specifications: [
        "NVIDIA GЕFORCE RTX 4060TI 8Гб",
        "Intel Core i5-14400F 2500 МГц",
        "ASUS B760M-K PRIME D4",
        "16Гб Kingston HyperX Fury 3000МГц",
      ],
      ikon: [
        "/Computers/Item/1.png",
        "/Computers/Item/2.png",
        "/Computers/Item/3.png",
        "/Computers/Item/4.png",
      ],
      idSpecifications: ["RTX 4060TI", "Intel Core i5", "16Гб"],
    },
  ];
  const [filterComp, setFilter] = useState(dataComputers);

  const handleFilterComputer = useCallback(
    (nameFil: string, checked: boolean) => {
      if (checked) {
        const newDataComp = dataComputers.filter((e) =>
          e.idSpecifications.includes(nameFil)
        );
        setFilter(newDataComp);
      } else {
        setFilter(dataComputers);
      }
    },
    [dataComputers]
  );
  return (
    <div>
      <div className={style.breadcrumb}>
        <Breadcrumb />
      </div>
      <h1 className={style.h1Comp}>Игровые компьютеры</h1>
      <div className={style.ContainerComp}>
        <div className={style.Filter}>
          <FilterComputer onFilterComputer={handleFilterComputer} />
        </div>
        <div className={style.Computers}>
          {filterComp.map((item) => (
            <ComputersItem
              src={item.src}
              label={item.label}
              price={item.price}
              name={item.name}
              specifications={item.specifications}
              ikon={item.ikon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
