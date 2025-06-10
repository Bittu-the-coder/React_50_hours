import { useState, useEffect, useRef } from "react";
import useNotesStore from "../store/notesStore";
import {
  AiOutlinePushpin,
  AiFillPushpin,
  AiOutlineSave,
  AiOutlineClear,
} from "react-icons/ai";
import { BsTrash, BsSearch } from "react-icons/bs";
import { MdNoteAdd } from "react-icons/md";

const Sidebar = () => {
  const { notes, search, selectNote, setSearch, currentNoteIndex } =
    useNotesStore();

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase())
  );

  const handlePressToPin = (noteId: number) => {
    const note = notes.find((n) => n.id === noteId);
    if (note) {
      useNotesStore.getState().togglePinNote(noteId);
    }
  };

  const handlePressToDelete = (noteId: number) => {
    const note = notes.find((n) => n.id === noteId);
    if (note) {
      useNotesStore.getState().deleteNote(noteId);
    }
  };

  const handleMouseDown = (noteId: number, action: "pin" | "delete") => {
    if (action === "pin") {
      handlePressToPin(noteId);
    } else {
      handlePressToDelete(noteId);
    }
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md w-[20%] h-full fixed left-0 top-0">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-700">Notes</h2>
        <MdNoteAdd
          className="text-2xl text-blue-500 cursor-pointer"
          onClick={() => selectNote(Date.now())}
        />
      </div>
      <div className="relative mb-4">
        <BsSearch className="absolute left-3 top-3 text-gray-400" />
        <input
          type="text"
          placeholder="Search notes..."
          className="w-full pl-10 p-2 border border-gray-300 rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <ul className="space-y-2">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note) => (
            <li
              key={note.id}
              className={`p-2 rounded cursor-pointer hover:bg-gray-200 transition ${
                currentNoteIndex === note.id ? "bg-blue-100" : ""
              } ${currentNoteIndex === note.id ? "scale-95" : ""}`}
              onClick={() => selectNote(note.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center flex-1">
                  <span
                    className="inline-block w-3 h-3 rounded-full mr-2"
                    style={{ backgroundColor: note.color }}
                  ></span>
                  <span className="text-gray-800 font-medium truncate">
                    {note.title}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div onMouseDown={() => handleMouseDown(note.id, "pin")}>
                    {note.isPinned ? (
                      <AiFillPushpin className="text-yellow-500" />
                    ) : (
                      <AiOutlinePushpin className="text-gray-500" />
                    )}
                  </div>
                  <div onMouseDown={() => handleMouseDown(note.id, "delete")}>
                    <BsTrash className="text-red-500" />
                  </div>
                </div>
              </div>
            </li>
          ))
        ) : (
          <li className="text-gray-500">No notes found</li>
        )}
      </ul>
    </div>
  );
};

const NotesApp = () => {
  const {
    notes,
    search,
    editorContent,
    noteColor,
    currentNoteIndex,
    setNotes,
    setSearch,
    setEditorContent,
    setNoteColor,
    setCurrentNoteIndex,
    addOrUpdateNote,
    selectNote,
    deleteNote,
    togglePinNote,
    clearEditor,
  } = useNotesStore();

  const [title, setTitle] = useState("");

  const [quill, setQuill] = useState<any>(null);
  const editorRef = useRef<HTMLDivElement>(null);
  const [content, setContent] = useState("");

  // Load selected note into editor
  useEffect(() => {
    if (quill && currentNoteIndex !== null) {
      const note = notes.find((n) => n.id === currentNoteIndex);
      if (note) {
        quill.root.innerHTML = note.text;
        setContent(note.text);
        setTitle(note.title);
      } else {
        quill.root.innerHTML = "";
        setContent("");
        setTitle("");
      }
    }
  }, [currentNoteIndex, quill, notes]);

  useEffect(() => {
    // Load Quill from CDN
    const loadQuill = () => {
      if (window.Quill && editorRef.current) {
        const options = {
          theme: "snow",
          placeholder: "Write your notes here...",
          modules: {
            toolbar: [
              [{ header: [1, 2, 3, false] }],
              ["bold", "italic", "underline", "strike"],
              [{ list: "ordered" }, { list: "bullet" }],
              ["link", "image"],
              ["clean"],
            ],
          },
        };

        const q = new window.Quill(editorRef.current, options);
        setQuill(q);

        // Set initial content if needed
        q.on("text-change", () => {
          setContent(q.root.innerHTML);
        });
      }
    };

    // Check if Quill is already loaded
    if (window.Quill) {
      loadQuill();
    } else {
      // Load Quill CSS and JS from CDN
      const quillCSS = document.createElement("link");
      quillCSS.href =
        "https://cdn.jsdelivr.net/npm/quill@2.0.3/dist/quill.snow.css";
      quillCSS.rel = "stylesheet";
      document.head.appendChild(quillCSS);

      const quillJS = document.createElement("script");
      quillJS.src = "https://cdn.jsdelivr.net/npm/quill@2.0.3/dist/quill.js";
      quillJS.onload = loadQuill;
      document.body.appendChild(quillJS);
    }

    return () => {
      // Cleanup
      if (quill) {
        quill.off("text-change");
      }
    };
    // eslint-disable-next-line
  }, []);

  // Save note
  const handleSave = () => {
    if (!content.trim() || !title.trim()) return;

    addOrUpdateNote({
      id: currentNoteIndex || Date.now(),
      title,
      text: content,
      color: noteColor,
      isPinned: notes.find((n) => n.id === currentNoteIndex)?.isPinned || false,
    });
  };

  // Delete note
  const handleDelete = () => {
    if (currentNoteIndex !== null) {
      deleteNote(currentNoteIndex);
      setCurrentNoteIndex(null);
      if (quill) {
        quill.root.innerHTML = "";
        setContent("");
      }
    }
  };

  // Change note color
  const handleColorChange = (color: string) => {
    setNoteColor(color);
    if (currentNoteIndex !== null) {
      const note = notes.find((n) => String(n.id) === String(currentNoteIndex));
      if (note) {
        addOrUpdateNote();
      }
    }
  };

  // Pin/unpin note
  const handlePin = () => {
    if (currentNoteIndex !== null) {
      togglePinNote(currentNoteIndex);
    }
  };

  // Clear editor
  const handleClear = () => {
    if (quill) {
      quill.root.innerHTML = "";
      setContent("");
      setTitle("");
    }
    setCurrentNoteIndex(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 flex">
      <Sidebar />
      <div className="ml-[22%] flex-1">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Notes App</h1>
        <input
          type="text"
          className="border border-gray-300 rounded-lg p-2 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Note title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Editor container */}
          <div ref={editorRef} className="min-h-[200px] p-4" />
          <div className="flex items-center gap-2 p-4 border-t border-gray-200">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center gap-2"
              onClick={handleSave}
            >
              <AiOutlineSave className="text-xl" />
              Save
            </button>
            <button
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 flex items-center gap-2"
              onClick={handleClear}
            >
              <AiOutlineClear className="text-xl" />
              Clear
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 flex items-center gap-2"
              onClick={handleDelete}
              disabled={currentNoteIndex === null}
            >
              <BsTrash className="text-xl" />
              Delete
            </button>
            <button
              className="bg-yellow-400 text-white px-4 py-2 rounded hover:bg-yellow-500 flex items-center gap-2"
              onClick={handlePin}
              disabled={currentNoteIndex === null}
            >
              {notes.find((n) => n.id === currentNoteIndex)?.isPinned ? (
                <AiFillPushpin className="text-xl" />
              ) : (
                <AiOutlinePushpin className="text-xl" />
              )}
              Pin/Unpin
            </button>
            <div className="flex items-center ml-4">
              <span className="mr-2">Color:</span>
              {["#f87171", "#fbbf24", "#34d399", "#60a5fa", "#a78bfa"].map(
                (color) => (
                  <button
                    key={color}
                    className={`w-6 h-6 rounded-full mr-1 border-2 ${
                      noteColor === color
                        ? "border-black"
                        : "border-transparent"
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => handleColorChange(color)}
                  />
                )
              )}
            </div>
          </div>
          {/* Preview area */}
          <div className="p-4 border-t border-gray-200">
            <h2 className="text-lg font-semibold mb-2 text-gray-700">
              Preview
            </h2>
            <div
              className="prose max-w-none p-3 bg-gray-50 rounded"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesApp;
