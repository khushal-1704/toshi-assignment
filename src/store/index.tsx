import { configureStore } from "@reduxjs/toolkit";
import contact from "./slices/contact";

const store = configureStore({
    reducer: {
      contact: contact
    }, 
});


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store