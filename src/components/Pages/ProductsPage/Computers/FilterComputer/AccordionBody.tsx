import { FC } from "react";
import { AccordionBody } from "react-bootstrap";
import styles from "./AccordionBody.module.css";

type TAcBody = {
  onFilterComputer: (nameFil: string, checked: boolean) => void;
  nameFil: string;
};

export const AcBody: FC<TAcBody> = ({ onFilterComputer, nameFil }) => {
  return (
    <AccordionBody>
      <label className={styles.custom}>
        <input
          type="checkbox"
          onChange={(e) => onFilterComputer(nameFil, e.target.checked)}
        />
        <span className={styles.checkbox}></span>
        {nameFil}
      </label>
    </AccordionBody>
  );
};
