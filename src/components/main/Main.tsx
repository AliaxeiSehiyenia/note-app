import { useState } from 'react';
import NoteAddSection from './note-add-section/NoteAddSection';
import NoteList from './note-list/NoteList';
import FilterList from './filter-list/FilterList';
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
  const [filters, setFilters] = useState<filter[] | []>([]);
  const [notes, setNotes] = useState([
    {
      value: '1. #Создание, #редактирование, просмотр и удаление заметок',
      id: 1,
      tags: ['Создание', 'редактирование'],
    },
    { value: '2. #Фильтр заметок по тегу', id: 2, tags: ['Фильтр'] },
    {
      value: '3. #Создание и #удаление #тегов из списка.',
      id: 3,
      tags: ['Создание', 'удаление', 'тегов'],
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

  const onAddFilter = (filter: string) => {
    if (!filters.find((item) => (item as filter).value === filter)) {
      const newFilter = {
        value: filter,
        id: nexFilterId + 1,
      };
      setFilters([...filters].concat(newFilter));
      setNextFilterId(nexFilterId + 1);
    }
  };

  const onDeleteFilter = (id: number): void => {
    setFilters(filters.filter((item) => (item as filter).id !== id));
  };

  const onSelectEditNote = (id: number): void => {
    setIdActiveNote(id);
  };

  const filtersPost = (tags: string[]) => {
    for (let i = 0; i < filters.length; i++) {
      if (tags.indexOf(filters[i].value) == -1) return false;
    }
    return true;
  };

  const visibleNotes = filters.length !== 0 ? notes.filter(({ tags }) => filtersPost(tags)) : notes;
  const activeNote = notes.find((item) => item.id === idActiveNote);

  return (
    <main className="main">
      <div className="container main-container">
        <NoteAddSection onAdd={onAddNote} onEdit={onEditNote} activeNote={activeNote} />
        <FilterList data={filters} onDelete={onDeleteFilter} />
        <NoteList
          data={visibleNotes}
          idActiveNote={idActiveNote}
          onDelete={onDeleteNote}
          onSelectEdit={onSelectEditNote}
          onAddFilter={onAddFilter}
        />
      </div>
    </main>
  );
};

export default Main;
