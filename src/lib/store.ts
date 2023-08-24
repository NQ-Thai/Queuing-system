import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import dataSlice from './ThietBi/ThietBiReducer';
import UserSlice from './User/UserReducer';

const store = configureStore({
    reducer: {
        Thietbi: dataSlice,
        User: UserSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export default store;
