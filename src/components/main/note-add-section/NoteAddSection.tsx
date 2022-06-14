import { useEffect, useState } from 'react';
import svgPlus from '../../../resources/svg/plus.svg';
import svgSave from '../../../resources/svg/save.svg';
import type { note } from '../Main';

type NoteAddSectionProps = {
  onAdd: (valueNote: string) => void;
  onEdit: (valueNote: string) => void;
  activeNote: note | undefined;
};

const NoteAddSection = ({ onAdd, onEdit, activeNote }: NoteAddSectionProps) => {
  const [currentNoteValue, setCurrentNoteValue] = useState<string | undefined>('');

  useEffect(() => {
    setCurrentNoteValue(activeNote?.value);
  }, [activeNote]);

  const onValueChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentNoteValue((e.target as HTMLTextAreaElement).value);
  };

  const onAddNote = () => {
    if (currentNoteValue) {
      onAdd(currentNoteValue);
    }
    setCurrentNoteValue('');
  };

  const onEditNote = () => {
    if (currentNoteValue) {
      onEdit(currentNoteValue);
    }
    setCurrentNoteValue('');
  };

  return (
    <section className="section-creating">
      <textarea
        className="section-creating-textarea"
        autoComplete="off"
        placeholder="Enter note..."
        value={currentNoteValue}
        onChange={(e) => onValueChange(e)}
      ></textarea>
      <div className="section-creating-btns-wrapper">
        <button className="btn creating-btn" onClick={onEditNote}>
          <img src={svgSave} alt="add note"></img>
          <span className="tooltiptext">Save note</span>
        </button>
        <button className="btn creating-btn" onClick={onAddNote}>
          <img src={svgPlus} alt="add note"></img>
          <span className="tooltiptext">Create note</span>
        </button>
      </div>
    </section>
  );
};

export default NoteAddSection;
