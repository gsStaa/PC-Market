import { FC } from 'react'
import styles from './FilterComputer.module.css'
import { Accordion, AccordionHeader, AccordionItem } from 'react-bootstrap'
import { AcBody } from './AccordionBody'
import { dataFilter } from './data'
import { Trans18 } from '../../../../Modules/Translation/Translation'
import i18nFil from './ru'
type TFilterComputer = {
  onFilterComputer: (nameFil: string, checked: boolean) => void
}

export const FilterComputer: FC<TFilterComputer> = ({ onFilterComputer }) => {
  return (
    <Trans18 i18n={i18nFil}>
      <div className={styles.FilterBox}>
        <h1>{i18nFil.t('1')}</h1>
        <Accordion className={styles.accordion}>
          <hr />
          <AccordionItem eventKey={'1'}>
            <AccordionHeader>
              <h3>{i18nFil.t('2')}</h3>
            </AccordionHeader>
            {dataFilter
              .filter((item) => item.category === 'graphics')
              .map((item) => (
                <AcBody
                  nameFil={item.nameFil}
                  onFilterComputer={onFilterComputer}
                />
              ))}
          </AccordionItem>
          <hr />
          <AccordionItem eventKey={'2'}>
            <AccordionHeader>
              <h3>{i18nFil.t('3')}</h3>
            </AccordionHeader>
            {dataFilter
              .filter((item) => item.category === 'proc')
              .map((item) => (
                <AcBody
                  nameFil={item.nameFil}
                  onFilterComputer={onFilterComputer}
                />
              ))}
          </AccordionItem>
          <hr />
          <AccordionItem eventKey={'3'}>
            <AccordionHeader>
              <h3>{i18nFil.t('4')}</h3>
            </AccordionHeader>
            {dataFilter
              .filter((item) => item.category === 'opera')
              .map((item) => (
                <AcBody
                  nameFil={item.nameFil}
                  onFilterComputer={onFilterComputer}
                />
              ))}
          </AccordionItem>
        </Accordion>
      </div>
    </Trans18>
  )
}
