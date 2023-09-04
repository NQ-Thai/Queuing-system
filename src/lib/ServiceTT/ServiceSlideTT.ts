import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Service } from '../Type/Service';
import { ServiceTT } from '../Type/ServiceTT';

export interface ServiceTTState {
    servicetts: ServiceTT[];
    loading: boolean;
    error: string | null;
}

const initialState: ServiceTTState = {
    servicetts: [],
    loading: false,
    error: null,
};

const serviceTTSlice = createSlice({
    name: 'ServiceTT',
    initialState,
    reducers: {
        fetchDataStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchDataSuccess: (state, action: PayloadAction<Service[]>) => {
            state.servicetts = action.payload;
            state.loading = false;
            state.error = null;
        },
        fetchDataFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});
export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = serviceTTSlice.actions;

export default serviceTTSlice.reducer;
