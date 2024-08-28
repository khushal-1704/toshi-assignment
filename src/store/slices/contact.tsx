import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { ContactType } from "../../types";

export interface CounterState {
  contacts: ContactType[];
}

const initialState: CounterState = {
  contacts: [],
};

export const counterSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContacts: (state, actions) => {
      state.contacts.push(actions.payload);
    },
    removeContacts: (state, actions: PayloadAction<number>) => {
      state.contacts = state.contacts.filter(
        (contact: ContactType) => contact.key !== actions.payload
      );
    },
    updateContact: (state, actions: PayloadAction<ContactType>) => {
      state.contacts = state.contacts.map((contact: ContactType) => {
        if (contact.key === actions.payload.key) {
          return actions.payload;
        } else {
          return contact;
        }
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { addContacts, removeContacts, updateContact } = counterSlice.actions;

export default counterSlice.reducer;
