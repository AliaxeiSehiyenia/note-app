import svgDelete from '../../../resources/svg/delete.svg';
import svgHash from '../../../resources/svg/hash.svg';

type TagProps = {
  key: number;
  tag: string;
};

const Tag = ({ tag }: TagProps) => {
  return (
    <li className="tag card">
      <img className="hash" src={svgHash} alt="hash"></img>
      {tag}
      <button className="btn tag-btn delete-btn">
        <img src={svgDelete} alt=""></img>
        <span className="tooltiptext">delete tag</span>
      </button>
    </li>
  );
};

export default Tag;
