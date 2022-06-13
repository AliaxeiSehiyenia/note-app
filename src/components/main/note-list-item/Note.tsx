import svgDelete from '../../../resources/svg/delete.svg';
import svgEdit from '../../../resources/svg/edit.svg';

type NoteProps = {
  key: number;
  note: string;
};

const Note = ({ note }: NoteProps) => {
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
      {note}
    </div>
  );
};

export default Note;
