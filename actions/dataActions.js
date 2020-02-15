export default {
        addNoteAction: function (note) {
                return {
                        type: 'addNoteAction',
                        payload: note
                }
        },
        editNoteAction: function (...payload) {
                const [index, note] = payload;
                return {
                        type: 'editNoteAction',
                        payload: {index, note}
                }
        },
        deleteNoteAction: function (index) {
                return {
                        type: 'deleteNoteAction',
                        payload: index
                }
        }
}