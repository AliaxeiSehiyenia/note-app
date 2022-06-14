import { useEffect, useRef } from 'react';
import svgDelete from '../../../resources/svg/delete.svg';
import svgEdit from '../../../resources/svg/edit.svg';
import svgHash from '../../../resources/svg/hash.svg';

type noteProps = {
  key: number;
  id: number;
  note: string;
  idActiveNote: number | null;
  tags: string[];
  onDelete: () => void;
  onEditNote: () => void;
};

const Note = ({ id, note, onDelete, onEditNote, idActiveNote, tags }: noteProps) => {
  const itemRefs = useRef([]);

  useEffect(() => {
    itemRefs.current.forEach((item) => (item as HTMLLIElement).classList.remove('active'));
    if (itemRefs.current[idActiveNote as number]) {
      (itemRefs.current[idActiveNote as number] as HTMLLIElement).classList.add('active');
    }
  }, [idActiveNote]);

  return (
    <li className="note card" tabIndex={0} ref={(el) => (itemRefs.current[id] = el as never)}>
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

      <ul className="note-tags-list">
        {tags.map((item, i) => {
          return (
            <li className="note-tag" key={i}>
              <img className="hash" src={svgHash} alt="hash"></img>
              {item}
            </li>
          );
        })}
      </ul>
    </li>
  );
};

export default Note;
