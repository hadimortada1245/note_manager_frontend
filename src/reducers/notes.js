const carReducer=(state=[],action)=>{
    switch(action.type){
        case 'getAllNotes':
            return action.payload;
        case 'getNoteById':
            return action.payload;
        case 'addNote':
            return [...state,action.payload];
        case 'deleteNote':
            return state.filter((note)=>note._id!==action.payload);
        case 'updateNote':
            return state.map((note)=>note._id===action.payload.Id?action.payload.note:note);
         default: return state;   
    }
}
export default carReducer;