import Note from "../entities/note";


const initialState = {
        notes: [
                new Note({header: 'Note 1', content: 'text', photo: null, date: new Date()})
        ]
};

export  default (state = initialState, action) => {
        switch (action.type) {
                case 'addNoteAction': 
                        return {...state, notes: [...state.notes, action.payload]};
                case 'editNoteAction':
                        state.notes[action.payload.index] = action.payload.note;
                        return {...state};
                case 'deleteNoteAction':
                        const newState = {...state};
                        newState.notes.splice(action.payload, 1);
                        return {...newState};
               default: 
                        return {...state};
        }
};