import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { collection, getDocs } from 'firebase/firestore';
import { Nofi } from '../Type/Nofication';
import { firestore } from '../firebase';

export const fetchData1 = createAsyncThunk<Nofi[]>('nofi/fetchData', async () => {
    const dataRef = collection(firestore, 'thongbao');
    const snapshot = await getDocs(dataRef);
    const data: Nofi[] = snapshot.docs.map((doc, index) => {
        const data = doc.data();
        return {
            id: doc.id,
            STT: `${index + 1}`,
            ...data,
        };
    });
    return data;
});
const nofiSlice = createSlice({
    name: 'nofi',
    initialState: { nofi: [] as Nofi[] },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchData1.fulfilled, (state, action) => {
            state.nofi = action.payload;
        });
    },
});

export default nofiSlice.reducer;
