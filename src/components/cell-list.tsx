import { useTypedSelector } from '../hooks/use-typed-selector';
import CellListItem from './cell-list-item';
import AddCell from './add-cell';

const CellList: React.FC = () => {
  const cells = useTypedSelector(({ cells }) =>
    cells?.order.map(id => cells?.data[id])
  );

  let renderedCells;

  if (cells) {
    renderedCells = cells.map(cell => (
      <>
        <AddCell nextCellId={cell.id} />
        <CellListItem key={cell.id} cell={cell} />
      </>
    ));
  }

  return (
    <div>
      {renderedCells}
      <AddCell nextCellId={null} />
    </div>
  );
};

export default CellList;
