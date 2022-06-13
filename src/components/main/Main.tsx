import { useState } from 'react';
import NoteAddSection from './note-add-section/NoteAddSection';
import NoteList from './note-list/NoteList';
import TagList from './tag-list/TagList';

const Main = () => {
  const [data, setData] = useState({
    tags: ['CV', 'LinkedIn', 'React'],
    notes: [
      'Залить на гит',
      'Добрый день, Алексей Михайлович. Спасибо, за отклик.Предлагаю Вам выполнить тестовое задание.',
      'Тестовое задание Front-end.',
    ],
  });
  const [activeNote, setActiveNote] = useState<number | null>(null);

  const onAddNote = (note: string) => {
    setData({ tags: [...tags], notes: [...notes].concat(note) });
  };

  const onDeleteNote = (id: number): void => {
    setData({ tags: [...tags], notes: notes.filter((item) => notes.indexOf(item) !== id) });
  };

  const onActiveNote = (id: number): void => {
    setActiveNote(id);
  };

  const { tags, notes } = data;
  const valueActiveNote = notes.find((item) => notes.indexOf(item) === activeNote);
  return (
    <main className="main">
      <div className="container main-container">
        <NoteAddSection onAdd={onAddNote} valueActiveNote={valueActiveNote} />
        <TagList data={tags} />
        <NoteList data={notes} onDelete={onDeleteNote} onEdit={onActiveNote} />
      </div>
    </main>
  );
};

export default Main;
