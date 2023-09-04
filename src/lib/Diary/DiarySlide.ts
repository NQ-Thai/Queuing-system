import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Diary } from '../Type/Diary';
import { Role } from '../Type/Role';

export interface DiaryState {
    diarys: Diary[];
    loading: boolean;
    error: string | null;
}

const initialState: DiaryState = {
    diarys: [],
    loading: false,
    error: null,
};

const diarySlice = createSlice({
    name: 'Diary',
    initialState,
    reducers: {
        fetchDataStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchDataSuccess: (state, action: PayloadAction<Role[]>) => {
            state.diarys = action.payload;
            state.loading = false;
            state.error = null;
        },
        fetchDataFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});
export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = diarySlice.actions;

export default diarySlice.reducer;
