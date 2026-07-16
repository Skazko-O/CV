import { useReactToPrint } from "react-to-print";
import { type RefObject } from "react";
import styles from './PrintButton.module.scss'

type Props = {
  contentRef: RefObject<HTMLDivElement>;
};

export const PrintButton = ({ contentRef }: Props) => {
  const handlePrint = useReactToPrint({
    contentRef: contentRef,
    documentTitle: "Oleksandr_Skazko_CV",
  });

  return (
    <button onClick={() => handlePrint()} className={styles.printBtn}>
      <svg>
        <use href={`images/icons/sprite.svg#print`} />
      </svg>
    </button>
  );
};
