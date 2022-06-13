import Note from '../note-list-item/Note';

type NoteListProps = {
  data: string[];
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
};

const NoteList = ({ data, onDelete, onEdit }: NoteListProps) => {
  const elements = data.map((item, i) => {
    return (
      <Note key={i} id={i} note={item} onDelete={() => onDelete(i)} onEditNote={() => onEdit(i)} />
    );
  });

  return (
    <section className="section-notes">
      <ul className="notes-list">{elements}</ul>
    </section>
  );
};

export default NoteList;
