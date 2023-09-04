import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { collection, getDocs } from 'firebase/firestore';
import { CapSo } from '../Type/LevelN';
import { firestore } from '../firebase';

export const fetchData = createAsyncThunk<CapSo[]>('capso/fetchData', async () => {
    const dataRef = collection(firestore, 'capso');
    const snapshot = await getDocs(dataRef);
    const data: CapSo[] = snapshot.docs.map((doc, index) => {
        const data = doc.data();
        return {
            id: doc.id,
            STT: `${index + 1}`,
            ...data,
        };
    });
    return data;
});
const levelNSlice = createSlice({
    name: 'levelN',
    initialState: { levelN: [] as CapSo[] },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.levelN = action.payload;
        });
    },
});

export default levelNSlice.reducer;
