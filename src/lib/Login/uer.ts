import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface ManagerUser {
    id: string;
    UserNameManagerUser: string;
    NameUser: string;
    Phone: number;
    Email: string;
    Role: string;
    StatusActive: string;
    password: string;
    conformPassword: string;
}
interface ManagerRoleState {
    dataMgUs: ManagerUser[];
    loading: boolean;
    error: string | null;
}
const initialState: ManagerRoleState = {
    dataMgUs: [],
    loading: false,
    error: null,
};

// export const fetchDataManagerUser = createAsyncThunk('data/fetchDataManagerUser', async () => {
//     const querySnapshot = await firestore.collection('managerUser').get();
//     const DataList: ManagerUser[] = [];
//     querySnapshot.forEach((doc: { data: () => any; id: any }) => {
//         const docData = doc.data();
//         if (
//             docData.UserNameManagerUser &&
//             docData.NameUser &&
//             docData.Phone &&
//             docData.Email &&
//             docData.Role &&
//             docData.password &&
//             docData.conformPassword &&
//             docData.StatusActive
//         ) {
//             const newItem: ManagerUser = {
//                 id: doc.id,
//                 UserNameManagerUser: docData.UserNameManagerUser,
//                 NameUser: docData.NameUser,
//                 Phone: docData.Phone,
//                 Email: docData.Email,
//                 Role: docData.Role,
//                 StatusActive: docData.StatusActive,
//                 password: docData.password,
//                 conformPassword: docData.conformPassword,
//             };
//             const existingItem = DataList.find((item) => item.id === newItem.id);
//             if (!existingItem) {
//                 DataList.push(newItem);
//             }
//         }
//     });
//     return DataList;
// });

const dataManagerRole = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setDataMgUs: (state, action: PayloadAction<ManagerUser[]>) => {
            state.dataMgUs = action.payload;
        },
    },
    // extraReducers: (builder) => {
    //     builder.addCase(fetchDataManagerUser.fulfilled, (state, action) => {
    //         const newData = action.payload.filter((newItem) => {
    //             return !state.dataMgUs.some((existingItem) => existingItem.id === newItem.id);
    //         });
    //         state.dataMgUs = [...state.dataMgUs, ...newData];
    //         state.loading = false;
    //         state.error = null;
    //     });
    // },
});
export const { setDataMgUs } = dataManagerRole.actions;

export default dataManagerRole.reducer;
// export const selectData = (state: RootState) => state.dataMgUs.dataMgUs;
// export const selectLoading = (state: RootState) => state.dataMgUs.loading;
// export const selectError = (state: RootState) => state.dataMgUs.error;
