import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const addNote = (title, content) => {
  const newNote = {
    title,
    content,
  };
  // http://localhost:5000/notes/add
  return (dispatch) => {
    axios
      .post(`http://localhost:3000/api/notes/addNote`, newNote)
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
  // http://localhost:5000/notes/getAll
  return (dispatch) => {
    axios
      .get("http://localhost:3000/api/notes")
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
  // http://localhost:5000/notes/deleteNoteById/6627f7c509117b1d6ae8778f
  return (dispatch) => {
    axios
      .delete(`http://localhost:3000/api/notes/deleteNote/?id=${Id}`)
      .then((response) => {
        dispatch({
          type: "deleteNote",
          payload: Id,
        });
        toast.success('The note deleted successfully!');
      })
      .catch((error) =>{ console.log("Failed to delete the note :", error);toast.warning('Something get wrong!!');});
  };
};

export const updateNote = (
  Id,
  title,
  content
) => {
  // http://localhost:5000/notes/updateNoteById/6627f7c509117b1d6ae8778f
  const updatedNote = {
    title,
    content
  };
  return (dispatch) => {
    axios
      .put(`http://localhost:3000/api/notes/updateNote/${Id}`, updatedNote)
      .then((response) => {
        const note = response.data.note;
        dispatch({
          type: "updatedNote",
          payload: { Id, note },
        });
        toast.success('Updated  one note successfully!');
      })
      .catch((error) =>{ console.log("Failed to update the note :", error);toast.warning('Something get wrong!!');});
  };
};
export const getNoteById = (
  Id
) => {
//http://localhost:5000/notes/getNoteById/6627f7c509117b1d6ae8778f
  return (dispatch) => {
    axios
      .get(`http://localhost:3000/api/notes/getOneById/${Id}`)
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
