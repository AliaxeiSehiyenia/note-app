import { useState } from 'react';
import NoteAddSection from './note-add-section/NoteAddSection';
import NoteList from './note-list/NoteList';
import TagList from './filter-list/FilterList';
import { SearchTags } from '../../tools/SearchTags';

export type filter = {
  value: string;
  id: number;
};

export type note = {
  value: string;
  id: number;
  tags: string[];
};

const Main = () => {
  const [filters, setFilters] = useState([]);
  const [notes, setNotes] = useState([
    {
      value: '1. #Создание, #редактирование, просмотр и удаление заметок',
      id: 1,
      tags: ['Создание', 'редактирование'],
    },
    { value: '2. #Фильтр заметок по тегу', id: 2, tags: ['Фильтр'] },
    {
      value: '3. #Добавление и #удаление #тегов из списка.',
      id: 3,
      tags: ['Добавление', 'удаление', 'тегов'],
    },
  ]);
  const [nextNoteId, setNextNoteId] = useState(3);
  const [nexFilterId, setNextFilterId] = useState(0);
  const [idActiveNote, setIdActiveNote] = useState<number | null>(null);

  const onAddNote = (valueNote: string) => {
    const newNote = {
      value: valueNote,
      id: nextNoteId + 1,
      tags: SearchTags(valueNote) || [],
    };
    setNotes([...notes].concat(newNote));
    setNextNoteId(nextNoteId + 1);
    setIdActiveNote(null);
  };

  const onEditNote = (valueNote: string) => {
    if (idActiveNote) {
      const newEditNote = {
        value: valueNote,
        id: idActiveNote,
        tags: SearchTags(valueNote) || [],
      };
      setNotes(
        notes.map((item) => {
          if (item.id === idActiveNote) {
            item = newEditNote;
          }
          return item;
        })
      );
      setIdActiveNote(null);
    }
  };

  const onDeleteNote = (id: number): void => {
    setNotes(notes.filter((item) => item.id !== id));
    setNextNoteId(nextNoteId - 1);
    setIdActiveNote(null);
  };

  const onDeleteFilter = (id: number): void => {
    setFilters(filters.filter((item) => (item as filter).id !== id));
    setNextFilterId(nexFilterId - 1);
  };

  const onSelectEditNote = (id: number): void => {
    setIdActiveNote(id);
  };

  const activeNote = notes.find((item) => item.id === idActiveNote);

  return (
    <main className="main">
      <div className="container main-container">
        <NoteAddSection onAdd={onAddNote} onEdit={onEditNote} activeNote={activeNote} />
        <TagList data={filters} onDelete={onDeleteFilter} />
        <NoteList
          data={notes}
          idActiveNote={idActiveNote}
          onDelete={onDeleteNote}
          onSelectEdit={onSelectEditNote}
        />
      </div>
    </main>
  );
};

export default Main;
