import { initialInputData } from 'types/types';
import styles from './DiagrammItem.module.css';

interface Props {
  item: initialInputData;
  offset: number;
  width: number;
}

export const DiagrammItem = ({ item, offset, width }: Props) => {
  return (
    <li className={styles.item}>
      <p className={styles.label}>{item.name}</p>
      <div className={styles.diagrammBar}>
        <div
          style={{ width: `${width}%`, marginLeft: `${offset}%` }}
          className={styles.done}
        >
          {item.time}
        </div>
      </div>
    </li>
  );
};
