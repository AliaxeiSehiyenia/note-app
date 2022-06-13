import NoteAddSection from './note-add-section/NoteAddSection';
import Note from './note-list-item/Note';
import Teg from './teg-list-item/Teg';

function Main() {
  return (
    <main className="main">
      <div className="container main-container">
        <section className="section-creating">
          <NoteAddSection />
        </section>
        <section className="section-tegs">
          <Teg />
        </section>
        <section className="section-notes">
          <Note />
        </section>
      </div>
    </main>
  );
}

export default Main;
