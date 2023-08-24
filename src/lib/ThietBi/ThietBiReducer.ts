import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { app } from '../Firebase';
import { ThietBi } from '../ThietBi/ThietBiSlice';

export const fetchData = createAsyncThunk<ThietBi[]>('thietbi/fetchData', async () => {
    const firestore = getFirestore(app);
    const dataRef = collection(firestore, 'thietbi');
    const snapshot = await getDocs(dataRef);
    const data: ThietBi[] = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as ThietBi));
    return data;
});
const dataSlice = createSlice({
    name: 'thietbi',
    initialState: { thietbi: [] as ThietBi[] },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.thietbi = action.payload;
        });
    },
});

export default dataSlice.reducer;
