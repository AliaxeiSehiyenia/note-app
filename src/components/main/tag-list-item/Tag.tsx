import svgDelete from '../../../resources/svg/delete.svg';
import svgHash from '../../../resources/svg/hash.svg';

type TagProps = {
  key: number;
  id: number;
  tag: string;
  onDelete: () => void;
};

const Tag = ({ tag, onDelete }: TagProps) => {
  return (
    <li className="tag card">
      <img className="hash" src={svgHash} alt="hash"></img>
      {tag}
      <button className="btn tag-btn delete-btn" onClick={onDelete}>
        <img src={svgDelete} alt=""></img>
        <span className="tooltiptext">delete tag</span>
      </button>
    </li>
  );
};

export default Tag;
