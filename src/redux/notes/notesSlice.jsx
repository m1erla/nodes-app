import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const notesSlice = createSlice({
    name: "notes",
    initialState: {
        items: [
            {
                id: nanoid(),
                title: "Attempt",
                color: "primary",
                item: "Note app is including edit and delete.",
                fullDate: "08.15.2023"
            },
            {
                id: nanoid(),
                title: "Note App",
                color: "success",
                item: "You can submit whatever you write on the text area, edit and delete process.",
                fullDate: "08.15.2023"
            },
            {
                id: nanoid(),
                title: "Daily",
                color: "warning",
                item: "You can submit whatever you write on the text area, edit and delete process.",
                fullDate: "08.15.2023"
            },
            {
                id: nanoid(),
                title: "Personal Blog",
                color: "secondary",
                item: "You can submit whatever you write on the text area, edit and delete process.",
                fullDate: "08.15.2023"
            }
        ],
        filteredNotes: [
            {
                id: nanoid(),
                title: "Attempt",
                color: "primary",
                item: "You can submit whatever you write on the text area, edit and delete process.",
                fullDate: "08.15.2023"
            },
            {
                id: nanoid(),
                title: "Note App",
                color: "success",
                item: "You can submit whatever you write on the text area, edit and delete process.",
                fullDate: "08.15.2023"
            },
            {
                id: nanoid(),
                title: "Daily",
                color: "warning",
                item: "You can submit whatever you write on the text area, edit and delete process.",
                fullDate: "08.15.2023"
            },
            {
                id: nanoid(),
                title: "Personal Blog",
                color: "secondary",
                item: "You can submit whatever you write on the text area, edit and delete process.",
                fullDate: "08.15.2023"
            }
        ],
        editNote: [],
        editIndex: 0,
        editTitle: "",
        editItem: ""
    },
    reducers: {
        addNote: (state, action) => {
            state.items.push(action.payload);
            state.filteredNotes = state.items;
        },
        editNote: (state, action) => {
            const id = action.payload;
            state.editIndex = state.items.findIndex(item => item.id === id);
            state.editNote = state.filteredNotes[state.editIndex];
        },
        changeEditNote: (state, action,) => {
            if (action.payload.editItem === "") {
                state.editItem = state.filteredNotes[state.editIndex].item
            } else {
                state.editItem = action.payload.editItem;
            }

            if (action.payload.editTitle === "") {
                state.editTitle = state.filteredNotes[state.editIndex].title
            } else{
                state.editTitle = action.payload.editTitle
            }

            state.filteredNotes[state.editIndex].title = state.editTitle;
            state.filteredNotes[state.editIndex].item = state.editItem;

            state.editNote = [];
            state.editIndex = 0;
            state.editTitle = "";
            state.editItem = "";
        },
        deleteNote: (state, action) => {
            const id = action.payload;
            const index = state.items.findIndex(item => item.id === id);
            state.items.splice(index, 1);
            state.filteredNotes = state.items;
        },
        filterNote: (state, action) => {
            if (action.payload === "") {
                state.filteredNotes = state.items;
            } else {
                const text = action.payload;
                const filteredItem = state.filteredNotes.filter(item => item.title === text);
                state.filteredNotes = filteredItem
            }
        }
    } 
})
export const { editNote, addNote, filterNote, changeEditNote, deleteNote } = notesSlice.actions;
export default notesSlice.reducer;