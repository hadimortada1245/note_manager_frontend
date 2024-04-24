import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../actions/notes';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import backIcon from '../images/icons8-left-arrow-48.png';
import { useNavigate } from 'react-router-dom';

const AddNote = () => {
  const navigate = useNavigate();
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const dispatch = useDispatch();

  const handleAddClick = async () => {
    if (!titleRef.current.value || !contentRef.current.value) {
      toast.warning('All fields must be filled!!');
    } else {
      try {
        await dispatch(addNote(titleRef.current.value, contentRef.current.value));
        setTimeout(() => {
          navigate('/');
        }, 3000);
      } catch (error) {
        console.log('Failed to add note:', error);
        toast.error('Failed to add note. Please try again later.');
      }
    }
  };

  const resetValues = () => {
    titleRef.current.value = '';
    contentRef.current.value = '';
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
            <input type="text" className="add-title-input" ref={titleRef} />
          </div>
          <div className="title-section-add2">
            <p>Note</p>
            <textarea type="text" className="add-title-textArea" ref={contentRef} />
          </div>
          <div className="buttonsj-section-add">
            <img src={backIcon} alt="trashIcon" className="backIcon" onClick={() => navigate('/')} />
            <div className="buttons-div-add">
              <button className="buttons-add-section" onClick={() => resetValues()}>
                Reset
              </button>
              <button className="buttons-add-section" onClick={() => handleAddClick()}>
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNote;
