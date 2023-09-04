import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Nofi } from '../Type/Nofication';

export interface NofiState {
    nofis: Nofi[];
    loading: boolean;
    error: string | null;
}

const initialState: NofiState = {
    nofis: [],
    loading: false,
    error: null,
};

const nofiSlice = createSlice({
    name: 'Nofi',
    initialState,
    reducers: {
        fetchDataStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchDataSuccess: (state, action: PayloadAction<Nofi[]>) => {
            state.nofis = action.payload;
            state.loading = false;
            state.error = null;
        },
        fetchDataFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});
export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = nofiSlice.actions;

export default nofiSlice.reducer;
