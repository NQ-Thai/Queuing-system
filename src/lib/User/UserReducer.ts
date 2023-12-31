import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { collection, getDocs } from 'firebase/firestore';
import { User } from '../Type/User';
import { firestore } from '../firebase';

export const fetchData = createAsyncThunk<User[]>('user/fetchData', async () => {
    const dataRef = collection(firestore, 'user');
    const snapshot = await getDocs(dataRef);
    const data: User[] = snapshot.docs.map((doc, index) => {
        const data = doc.data();
        return {
            id: doc.id,
            STT: `${index + 1}`,
            ...data,
        };
    });
    return data;
});
const UserSlice = createSlice({
    name: 'user',
    initialState: { user: [] as User[] },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.user = action.payload;
        });
    },
});

export default UserSlice.reducer;
