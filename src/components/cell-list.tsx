import { useTypedSelector } from '../hooks/use-typed-selector';
import CellListItem from './cell-list-item';

const CellList: React.FC = () => {
  const cells = useTypedSelector(({ cells }) =>
    cells?.order.map(id => cells?.data[id])
  );

  let renderedCells;

  if (cells) {
    renderedCells = cells.map(cell => (
      <CellListItem key={cell.id} cell={cell} />
    ));
  }

  return <div>{renderedCells}</div>;
};

export default CellList;
