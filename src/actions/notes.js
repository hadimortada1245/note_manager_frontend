import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const addNote = (title, content) => {
  const newNote = {
    title,
    content,
  };
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/notes/add`, newNote)
      .then((response) => {
        const note = response.data.note;
        dispatch({
          type: 'addNote',
          payload: note,
        });
        toast.success('Note added successfully!');
      })
      .catch((error) => { console.log('Failed to add a note:', error.response.data); toast.warning('Something get wrong!!'); });
  };
};
export const getAllNotes = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:5000/notes/getAll")
      .then((response) => {
        const notes = response.data.allNotes;
        dispatch({
          type: "getAllNotes",
          payload: notes,
        });
      })
      .catch((error) => console.log("Failed to fetch data :", error));
  };
};
export const deleteNote = (Id) => {
  return (dispatch) => {
    axios
      .delete(`http://localhost:5000/notes/deleteNoteById/${Id}`)
      .then((response) => {
        dispatch({
          type: "deleteNote",
          payload: Id,
        });
        toast.success('The note deleted successfully!');
      })
      .catch((error) => console.log("Failed to delete the note :", error));
  };
};

export const updateNote = (
  Id,
  title,
  content
) => {
  const updatedNote = {
    title,
    content
  };
  return (dispatch) => {
    axios
      .put(`http://localhost:5000/notes/updateNoteById/${Id}`, updatedNote)
      .then((response) => {
        const note = response.data.note;
        dispatch({
          type: "updatedNote",
          payload: { Id, note },
        });
        toast.success('Updated  one note successfully!');
      })
      .catch((error) => console.log("Failed to update the note :", error));
  };
};
export const getNoteById = (
  Id
) => {

  return (dispatch) => {
    console.log(Id)
    axios
      .get(`http://localhost:5000/notes/getNoteById/${Id}`)
      .then((response) => {
        const note = response.data.note;
        dispatch({
          type: "getNoteById",
          payload: note,
        });
      })
      .catch((error) => console.log("Failed to get the note by its id:", error));
  };
};
