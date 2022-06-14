import type { note } from '../Main';
import Note from '../note-list-item/Note';

type NoteListProps = {
  data: note[];
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
};

const NoteList = ({ data, onDelete, onEdit }: NoteListProps) => {
  const elements = data.map((item) => {
    const { id, value } = item;
    return (
      <Note
        key={id}
        id={id}
        note={value}
        onDelete={() => onDelete(id)}
        onEditNote={() => onEdit(id)}
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
