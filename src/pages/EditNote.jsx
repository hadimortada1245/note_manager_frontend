import { React, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getNoteById, updateNote } from "../actions/notes";
import { useNavigate, useParams } from 'react-router-dom';
import backIcon from '../images/icons8-left-arrow-48.png'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const EditNote = () => {
  const { Id } = useParams();
  const navigate = useNavigate();
  const note = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  useEffect(() => {
    if (Id)
      dispatch(getNoteById(Id));
  }, [dispatch, Id]);
  const resetValues = () => {
    titleRef.current.value = '';
    contentRef.current.value = '';
  };
  const handleSaveClick = async () => {
    if (!titleRef.current.value || !contentRef.current.value) {
      toast.warning('All fields must be filled!!');
    } else {
      try {
        await dispatch(updateNote(Id, titleRef.current.value, contentRef.current.value));
        setTimeout(() => {
          navigate('/');
        }, 3000);
      } catch (error) {
        console.log('Failed to update this note:', error);
        toast.error('Failed to update  this note. Please try again later.');
      }
    }
  };
  return (
    <div>
      <div className="head">
        <p className="welcome-t">Welcome to our note manager</p>
      </div>
      <div className="notes-container">
        <p className="head-l-notes">ADD YOUR NOTE </p>
        <div className="fields-containter-add">
          <div className="title-section-add1">
            <p>Title</p>
            <input type="text" className="add-title-input" defaultValue={note.title} ref={titleRef}></input>
          </div>
          <div className="title-section-add2">
            <p>Note</p>
            <textarea type="text" className="add-title-textArea" defaultValue={note.content} ref={contentRef}></textarea>
          </div>
          <div className="buttonsj-section-add">
            <img src={backIcon} alt='trashIcon' className='backIcon' onClick={() => navigate('/')} />
            <div className='buttons-div-add'>
              <button className='buttons-add-section' onClick={() => resetValues()}>Reset</button>
              <button className='buttons-add-section' onClick={() => handleSaveClick()}>Save</button>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default EditNote;
