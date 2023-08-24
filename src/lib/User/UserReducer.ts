import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { app } from '../Firebase';
import { User } from './UserSlice';

export const fetchData = createAsyncThunk<User[]>('user/fetchData', async () => {
    const firestore = getFirestore(app);
    const dataRef = collection(firestore, 'user');
    const snapshot = await getDocs(dataRef);
    const data: User[] = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as User));
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
