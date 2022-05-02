import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact } from "./cotacts-actions";


const items = createReducer([], {
    [addContact]: (state, {payload}) => [...state, payload],
    [deleteContact]: (state, {payload}) => state.filter(({id}) => id !== payload),
});

export default items;