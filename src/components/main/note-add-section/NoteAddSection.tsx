import { useEffect, useState } from 'react';
import svgPlus from '../../../resources/svg/plus.svg';
import svgSave from '../../../resources/svg/save.svg';

type NoteAddSectionProps = {
  onAdd: (note: string) => void;
  valueActiveNote: string | undefined;
};

const NoteAddSection = ({ onAdd, valueActiveNote }: NoteAddSectionProps) => {
  const [currentNote, setCurrentNote] = useState<string>('');

  useEffect(() => {
    if (valueActiveNote) {
      setCurrentNote(valueActiveNote);
    }
  }, [valueActiveNote]);

  const onValueChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentNote((e.target as HTMLTextAreaElement).value);
  };

  const onAddNote = () => {
    onAdd(currentNote);
    setCurrentNote('');
  };

  return (
    <section className="section-creating">
      <textarea
        className="section-creating-textarea"
        autoComplete="off"
        placeholder="Enter note..."
        value={currentNote}
        onChange={(e) => onValueChange(e)}
      ></textarea>
      <div className="section-creating-btns-wrapper">
        <button className="btn creating-btn">
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
