import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import CapSoSlice from './CapSo/CapSoSlice';
import dataSlice from './ThietBi/ThietBiReducer';
import UserSlice from './User/UserReducer';

const store = configureStore({
    reducer: {
        ThietBi: dataSlice,
        User: UserSlice,
        CapSo: CapSoSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export default store;
