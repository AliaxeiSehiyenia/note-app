import { useEffect, useRef } from 'react';
import svgDelete from '../../../resources/svg/delete.svg';
import svgEdit from '../../../resources/svg/edit.svg';

type NoteProps = {
  key: number;
  id: number;
  note: string;
  idActiveNote: number | null;
  onDelete: React.MouseEventHandler<HTMLButtonElement> | undefined;
  onEditNote: () => void;
};

const Note = ({ id, note, onDelete, onEditNote, idActiveNote }: NoteProps) => {
  const itemRefs = useRef([]);

  useEffect(() => {
    itemRefs.current.forEach((item) => (item as HTMLLIElement).classList.remove('active'));
    if (itemRefs.current[idActiveNote as number]) {
      (itemRefs.current[idActiveNote as number] as HTMLLIElement).classList.add('active');
    }
  }, [idActiveNote]);

  // const focusOnNote = (id: number) => {
  //   itemRefs.current.forEach((item) => (item as HTMLLIElement).classList.remove('active'));
  //   if (itemRefs.current[id]) {
  //     (itemRefs.current[id] as HTMLLIElement).classList.add('active');
  //   }
  // };

  return (
    <li className="note card" tabIndex={0} ref={(el) => (itemRefs.current[id] = el as never)}>
      <div className="note-btns-wrapper">
        <button
          className="btn edit-btn"
          onClick={() => {
            onEditNote();
            // focusOnNote(id);
          }}
        >
          <img src={svgEdit} alt=""></img>
          <span className="tooltiptext">edit note</span>
        </button>
        <button className="btn delete-btn" onClick={onDelete}>
          <img src={svgDelete} alt=""></img>
          <span className="tooltiptext">delete note</span>
        </button>
      </div>
      {note}
    </li>
  );
};

export default Note;
