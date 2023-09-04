import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Role } from '../Type/Role';

export interface RoleState {
    roles: Role[];
    loading: boolean;
    error: string | null;
}

const initialState: RoleState = {
    roles: [],
    loading: false,
    error: null,
};

const roleSlice = createSlice({
    name: 'Role',
    initialState,
    reducers: {
        fetchDataStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchDataSuccess: (state, action: PayloadAction<Role[]>) => {
            state.roles = action.payload;
            state.loading = false;
            state.error = null;
        },
        fetchDataFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});
export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = roleSlice.actions;

export default roleSlice.reducer;
