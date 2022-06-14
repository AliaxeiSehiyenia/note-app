import type { note } from '../Main';
import Note from '../note-list-item/Note';

type NoteListProps = {
  data: note[];
  onDelete: (id: number) => void;
  onSelectEdit: (id: number) => void;
  idActiveNote: number | null;
};

const NoteList = ({ data, onDelete, onSelectEdit, idActiveNote }: NoteListProps) => {
  const elements = data.map((item) => {
    const { id, value } = item;
    return (
      <Note
        key={id}
        id={id}
        note={value}
        idActiveNote={idActiveNote}
        onDelete={() => onDelete(id)}
        onEditNote={() => onSelectEdit(id)}
      />
    );
  });

  return (
    <section className="section-notes">
      <ul className="notes-list">{elements}</ul>
    </section>
  );
};

export default NoteList;
