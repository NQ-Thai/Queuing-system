import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import dataSlice from './Device/Device';
import DiarySlide from './Diary/Diary';
import levelNSlice from './LevelN/LevelN';
import nofiSlice from './Nofication/Nofication';
import nlevelSlice from './Number/Number';
import roleSlice from './Role/Role';
import serviceSlice from './Service/Service';
import ServiceTT from './ServiceTT/ServiceTT';
import UserSlice from './User/UserReducer';

const store = configureStore({
    reducer: {
        Device: dataSlice,
        Service: serviceSlice,
        ServiceTT: ServiceTT,
        User: UserSlice,
        CapSo: levelNSlice,
        Role: roleSlice,
        Diary: DiarySlide,
        NLevel: nlevelSlice,
        Nofi: nofiSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export default store;
