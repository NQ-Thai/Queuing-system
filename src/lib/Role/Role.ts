import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { collection, getDocs } from 'firebase/firestore';
import { Role } from '../Type/Role';
import { firestore } from '../firebase';

export const fetchData = createAsyncThunk<Role[]>('role/fetchData', async () => {
    const dataRef = collection(firestore, 'role');
    const snapshot = await getDocs(dataRef);
    const data: Role[] = snapshot.docs.map((doc, index) => {
        const data = doc.data();
        return {
            id: doc.id,
            STT: `${index + 1}`,
            ...data,
        };
    });
    return data;
});
const roleSlice = createSlice({
    name: 'role',
    initialState: { roles: [] as Role[] },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.roles = action.payload;
        });
    },
});

export default roleSlice.reducer;
