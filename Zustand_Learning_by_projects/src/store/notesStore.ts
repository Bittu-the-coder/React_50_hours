import { create } from "zustand";

interface Note {
  id: number;
  title: string;
  text: string;
  color: string;
  isPinned: boolean;
}

interface NotesState {
  notes: Note[];
  search: string;
  editorContent: string;
  noteColor: string;
  currentNoteIndex: number | null;
  isPinned: boolean;
  pingedNotes: Note[];
  setNotes: (updatedNotes: Note[]) => void;
  setSearch: (searchValue: string) => void;
  setEditorContent: (content: string) => void;
  setNoteColor: (color: string) => void;
  setCurrentNoteIndex: (index: number | null) => void;
  addOrUpdateNote: (note: Note) => void;
  selectNote: (id: number) => void;
  deleteNote: (id: number) => void;
  togglePinNote: (id: number) => void;
  clearEditor: () => void;
}

const useNotesStore = create<NotesState>((set) => ({
  notes: [],
  search: "",
  editorContent: "",
  noteColor: "#ffffff",
  currentNoteIndex: null,
  pingedNotes: [],
  isPinned: false,

  setNotes: (updatedNotes: Note[]) => set({ notes: updatedNotes }),
  setSearch: (searchValue: string) => set({ search: searchValue }),
  setEditorContent: (content: string) => set({ editorContent: content }),
  setNoteColor: (color: string) => set({ noteColor: color }),
  setCurrentNoteIndex: (index: number | null) =>
    set({ currentNoteIndex: index }),
  addOrUpdateNote: (note: Note) => {
    set((state) => {
      const existingNoteIndex = state.notes.findIndex((n) => n.id === note.id);

      if (existingNoteIndex !== -1) {
        // Update existing note
        const updatedNotes = state.notes.map((n) =>
          n.id === note.id ? note : n
        );
        return { notes: updatedNotes };
      } else {
        // Add new note
        return { notes: [...state.notes, note] };
      }
    });
  },
  selectNote: (id: number) => {
    set((state) => {
      const note = state.notes.find((n) => n.id === id);
      if (!note) return state;

      return {
        currentNoteIndex: id,
        noteColor: note.color,
        isPinned: note.isPinned,
      };
    });
  },
  deleteNote: (id: number) => {
    set((state) => {
      const updatedNotes = state.notes.filter((note) => note.id !== id);
      return { notes: updatedNotes, currentNoteIndex: null };
    });
  },
  togglePinNote: (id: number) => {
    set((state) => {
      const updatedNotes = state.notes.map((note) =>
        note.id === id ? { ...note, isPinned: !note.isPinned } : note
      );
      return { notes: updatedNotes };
    });
  },
  clearEditor: () =>
    set({
      editorContent: "",
      noteColor: "#ffffff",
      currentNoteIndex: null,
      isPinned: false,
    }),
}));

export default useNotesStore;
