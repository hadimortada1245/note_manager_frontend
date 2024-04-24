import { React, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllNotes, deleteNote } from "../actions/notes";
import trashIcon from '../images/icons8-trash-52 (1).png'
import addIcon from '../images/icons8-plus-50.png'
import editIcon from '../images/icons8-edit-property-50.png'
import { useNavigate, Link } from "react-router-dom";
const Home = () => {
    const [showDeletePopup, setShowDeletePopup] = useState(false);
    const [note, setNote] = useState(null);
    const notes = useSelector((state) => state.notes);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllNotes());
    }, [dispatch]);
    const handleRemove = () => {
        dispatch(deleteNote(note._id))
        setNote(null);
        setShowDeletePopup(false)
    }
    return (
        <div>
            <div className="head">
                <p className="welcome-t">Welcome to our note manager</p>
            </div>
            <div className="notes-container">
                <p className="head-l-notes">MANAGE YOUR NOTES</p>
                <div className='hidden-div'>
                    <p className='allNotes'>All notes</p>
                    <div className="icons-div">
                        <img src={addIcon} alt='trashIcon' className='addIcon' />
                    </div>
                </div>
                <table className='notes-table'>
                    <thead>

                        <tr>
                            <th className='note-th'>All notes</th>
                            <th className='note-th'></th>
                            <td className='note-th'>
                                <div className="icons-div">
                                    <img src={addIcon} alt='trashIcon' className='addIcon' onClick={() => navigate('/add')} />
                                </div>
                            </td>

                        </tr>

                        <tr className='hidden-tr'>
                            <th className='note-th'>All notes</th>
                            <th className='note-th'></th>
                            <td className='note-th'>
                                <div className="icons-div">
                                    <img src={addIcon} alt='trashIcon' className='addIcon' onClick={() => navigate('/add')} />
                                </div>
                            </td>

                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(notes) && notes.map((note, index) => (
                            <tr key={index}>
                                <td className='td-note-d' data-cell="Title">{note.title} </td>
                                <td className='td-note-d' data-cell="Content">{note.content}</td>
                                <td className='td-note-d' data-cell="Actions">
                                    <div className="icons-div">
                                        <Link to={`/editNote/${note._id}`}>
                                            <img src={editIcon} alt='trashIcon' className='editIcon' />
                                        </Link>

                                        <img src={trashIcon} alt='trashIcon' className='trashIcon' onClick={() => { setNote(note); setShowDeletePopup(true) }} />
                                    </div>
                                </td>
                            </tr>))}

                    </tbody>
                </table>
                {showDeletePopup && (
                    <div className="delete-popup">
                        <div className="delete-popup-content">
                            <p className='delete-popup-t'>Are you sure do you want to delete the note "{note && note.title}"?</p>
                            <hr></hr>
                            <div className='delete-popup-buttons-div'>
                                <button onClick={() => setShowDeletePopup(false)} className='delete-popup-cancel-btn'>Cancel</button>
                                <button onClick={() => { handleRemove() }} className='delete-popup-confirm-btn'>Confirm</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
