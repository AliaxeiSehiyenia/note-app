import { useState } from 'react';
import svgDelete from '../../../resources/svg/delete.svg';
import svgEdit from '../../../resources/svg/edit.svg';

type NoteProps = {
  key: number;
  note: string;
  onDelete: React.MouseEventHandler<HTMLButtonElement> | undefined;
  onEditNote: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const Note = ({ note, onDelete, onEditNote }: NoteProps) => {
  const [isActiveNote, setIsActivceNote] = useState(false);

  return (
    <div className={isActiveNote ? 'note card active' : 'note card'}>
      <div className="note-btns-wrapper">
        <button className="btn edit-btn" onClick={onEditNote}>
          <img src={svgEdit} alt=""></img>
          <span className="tooltiptext">edit note</span>
        </button>
        <button className="btn delete-btn" onClick={onDelete}>
          <img src={svgDelete} alt=""></img>
          <span className="tooltiptext">delete note</span>
        </button>
      </div>
      {note}
    </div>
  );
};

export default Note;
