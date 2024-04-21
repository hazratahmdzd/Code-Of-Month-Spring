import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

export interface noteProps {
    id: number;
    title: string;
    important: boolean;
}

export interface initialStateProps {
    notes: noteProps[];
}

const initialState: initialStateProps = {
    notes: [
        {
            id: 1,
            title: "First Note",
            important: false
        }
    ]

}

const notesSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        addNote: (state, action) => {
            state.notes.push(action.payload)
        },
        removeNotes: (state, action) => {
            const id = action.payload;
            state.notes = state.notes.filter(note => note.id !== id);
        }

    }
})

export const { addNote, removeNotes } = notesSlice.actions;

export default notesSlice.reducer;