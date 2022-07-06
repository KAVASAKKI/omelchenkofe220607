import { DiagrammItem } from 'components/DiagrammItem';
import { initialInputData } from 'types/types';
import styles from './Diagramm.module.css';

interface IProps {
  title?: string;
  initialInputData: initialInputData[];
  updateTime: () => void;
}

const getOffsetAndWidth = (initialInputData: initialInputData[]) => {
  const total = initialInputData.reduce((prev, curr) => prev + curr.time, 0);

  let totalOffset = 0;

  return initialInputData.map((item) => {
    const width = (item.time * 100) / total;

    const correctWidth = width < 2 ? 2 : width;

    totalOffset += correctWidth;

    return { ...item, width: correctWidth, offset: totalOffset - correctWidth };
  });
};

export const Diagramm = ({
  title = '',
  initialInputData,
  updateTime,
}: IProps) => {
  const options = getOffsetAndWidth(initialInputData);

  return (
    <>
      <h1 className={styles.title}>{title}</h1>

      <ul className={styles.list}>
        {options.map((item) => (
          <DiagrammItem
            item={item}
            offset={item.offset}
            width={item.width}
            key={item.name}
          />
        ))}
      </ul>

      <button className={styles.button} onClick={updateTime}>
        Update time
      </button>
    </>
  );
};
