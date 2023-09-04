import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CapSo } from '../Type/LevelN';

export interface CapSoState {
    capsos: CapSo[];
    loading: boolean;
    error: string | null;
}

const initialState: CapSoState = {
    capsos: [],
    loading: false,
    error: null,
};

const capsoSlice = createSlice({
    name: 'Capso',
    initialState,
    reducers: {
        fetchDataStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchDataSuccess: (state, action: PayloadAction<CapSo[]>) => {
            state.capsos = action.payload;
            state.loading = false;
            state.error = null;
        },
        fetchDataFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = capsoSlice.actions;

export default capsoSlice.reducer;
