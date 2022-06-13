import svgDelete from '../../../resources/svg/delete.svg';
import svgHash from '../../../resources/svg/hash.svg';

function Teg() {
  return (
    <div className="teg card">
      <img className="hash" src={svgHash} alt="hash"></img>
      LinkedIn
      <button className="btn teg-btn delete-btn">
        <img src={svgDelete} alt=""></img>
        <span className="tooltiptext">delete tag</span>
      </button>
    </div>
  );
}

export default Teg;
