import NoteAddSection from './note-add-section/NoteAddSection';
import NoteList from './note-list/NoteList';
import TagList from './tag-list/TagList';
import data from '../../data.json';

const Main = () => {
  const { tags, notes } = data;

  return (
    <main className="main">
      <div className="container main-container">
        <NoteAddSection />
        <TagList data={tags} />
        <NoteList data={notes} />
      </div>
    </main>
  );
};

export default Main;
