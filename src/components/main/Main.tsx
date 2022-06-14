import { useState } from 'react';
import NoteAddSection from './note-add-section/NoteAddSection';
import NoteList from './note-list/NoteList';
import TagList from './tag-list/TagList';

export type tag = {
  value: string;
  id: number;
};

export type note = {
  value: string;
  id: number;
};

const Main = () => {
  const [tags, setTegs] = useState([
    { value: 'CV', id: 1 },
    { value: 'LinkedIn', id: 2 },
    { value: 'React', id: 3 },
  ]);
  const [notes, setNotes] = useState([
    { value: '1. Создание, редактирование, просмотр и удаление заметок', id: 1 },
    { value: '2. Фильтр заметок по тегу', id: 2 },
    { value: '3. Добавление и удаление тегов из списка.', id: 3 },
    { value: '4. Данные хранить в json- файле.', id: 4 },
    { value: '5. Использование CSS препроцессора.', id: 5 },
  ]);
  const [nextNoteId, setNextNoteId] = useState(5);
  const [nexTagId, setNextTagId] = useState(3);
  const [activeNote, setActiveNote] = useState<number | null>(null);

  const onAddNote = (note: string) => {
    const newNote = {
      value: note,
      id: nextNoteId + 1,
    };
    setNotes([...notes].concat(newNote));
    setNextNoteId(nextNoteId + 1);
    console.log(notes);
  };

  const onDeleteNote = (id: number): void => {
    setNotes(notes.filter((item) => item.id !== id));
    setActiveNote(null);
  };

  const onActiveNote = (id: number): void => {
    setActiveNote(id);
  };

  const valueActiveNote = notes.find((item) => item.id === activeNote);

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
