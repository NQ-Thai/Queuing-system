// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import ThietBiSlice from './ThietBiSlice';

const store = configureStore({
    reducer: { ThietBiSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
