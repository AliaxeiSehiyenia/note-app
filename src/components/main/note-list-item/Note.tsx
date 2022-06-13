import svgDelete from '../../../resources/svg/delete.svg';
import svgEdit from '../../../resources/svg/edit.svg';

function Note() {
  return (
    <div className="note card">
      <div className="note-btns-wrapper">
        <button className="btn edit-btn">
          <img src={svgEdit} alt=""></img>
          <span className="tooltiptext">edit note</span>
        </button>
        <button className="btn delete-btn">
          <img src={svgDelete} alt=""></img>
          <span className="tooltiptext">delete note</span>
        </button>
      </div>
      Заметьте, что нам пришлось изменить и высоту элементов: flex-basis может определять как высоту
      элементов, так и их ширину в зависимости от направления оси.
    </div>
  );
}

export default Note;
