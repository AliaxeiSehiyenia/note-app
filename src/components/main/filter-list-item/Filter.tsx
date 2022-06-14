import svgDelete from '../../../resources/svg/delete.svg';
import svgHash from '../../../resources/svg/hash.svg';

type TagProps = {
  key: number;
  id: number;
  value: string;
  onDelete: () => void;
};

const Filter = ({ value, onDelete }: TagProps) => {
  return (
    <li className="filter-tag card">
      <img className="hash" src={svgHash} alt="hash"></img>
      {value}
      <button className="btn filter-btn delete-btn" onClick={onDelete}>
        <img src={svgDelete} alt="delete"></img>
        <span className="tooltiptext">delete tag</span>
      </button>
    </li>
  );
};

export default Filter;
