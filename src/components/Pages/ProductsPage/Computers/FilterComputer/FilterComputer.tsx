import { FC } from "react";
import styles from "./FilterComputer.module.css";
import { Accordion, AccordionHeader, AccordionItem } from "react-bootstrap";
import { AcBody } from "./AccordionBody";

type TFilterComputer = {
  onFilterComputer: (nameFil: string, checked: boolean) => void;
};

export const FilterComputer: FC<TFilterComputer> = ({ onFilterComputer }) => {
  const dataFilter = [
    {
      nameFil: "RTX 3060",
    },
    {
      nameFil: "RTX 4080 SUPER",
    },
    {
      nameFil: "RTX 4060TI",
    },
    {
      nameFil: "Intel Core i3",
    },
    {
      nameFil: "Intel Core i5",
    },
    {
      nameFil: "Intel Core i9",
    },
    {
      nameFil: "AMD Ryzen 9",
    },
    {
      nameFil: "16Гб",
    },
    {
      nameFil: "32Гб",
    },
    {
      nameFil: "64Гб",
    },
  ];
  const dataCart = dataFilter.slice(0, 3);
  const dataProc = dataFilter.slice(3, 7);
  const dataOper = dataFilter.slice(7, 10);
  return (
    <div className={styles.FilterBox}>
      <h1>Фильтры</h1>
      <Accordion className={styles.accordion}>
        <hr />
        <AccordionItem eventKey={"1"}>
          <AccordionHeader>
            <h3>Видеокарта</h3>
          </AccordionHeader>
          {dataCart.map((item) => (
            <AcBody
              nameFil={item.nameFil}
              onFilterComputer={onFilterComputer}
            />
          ))}
        </AccordionItem>
        <hr />
        <AccordionItem eventKey={"2"}>
          <AccordionHeader>
            <h3>Процессор</h3>
          </AccordionHeader>
          {dataProc.map((item) => (
            <AcBody
              nameFil={item.nameFil}
              onFilterComputer={onFilterComputer}
            />
          ))}
        </AccordionItem>
        <hr />
        <AccordionItem eventKey={"3"}>
          <AccordionHeader>
            <h3>Оперативная память</h3>
          </AccordionHeader>
          {dataOper.map((item) => (
            <AcBody
              nameFil={item.nameFil}
              onFilterComputer={onFilterComputer}
            />
          ))}
        </AccordionItem>
      </Accordion>
    </div>
  );
};
