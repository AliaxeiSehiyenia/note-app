import Note from '../note-list-item/Note';

type NoteListProps = {
  data: string[];
};

const NoteList = ({ data }: NoteListProps) => {
  const elements = data.map((item, i) => {
    return <Note key={i} note={item} />;
  });

  return <section className="section-notes">{elements}</section>;
};

export default NoteList;
