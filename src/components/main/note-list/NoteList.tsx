import type { note } from '../Main';
import Note from '../note-list-item/Note';

type noteListProps = {
  data: note[];
  onDelete: (id: number) => void;
  onSelectEdit: (id: number) => void;
  onAddFilter: (filter: string) => void;
  idActiveNote: number | null;
};

const NoteList = ({ data, onDelete, onSelectEdit, onAddFilter, idActiveNote }: noteListProps) => {
  const elements = data.map((item) => {
    const { id, value, tags } = item;
    return (
      <Note
        key={id}
        id={id}
        note={value}
        tags={tags}
        idActiveNote={idActiveNote}
        onDelete={() => onDelete(id)}
        onEditNote={() => onSelectEdit(id)}
        onAddFilter={(filter: string) => onAddFilter(filter)}
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
