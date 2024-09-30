import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PersonalInfoState {
    firstName:string;
    middleName:string;
    lastName:string;
}

const initialState:PersonalInfoState = {
    firstName: "",
    middleName: "",
    lastName: ""
}

export const PersonalInfoSlice = createSlice({
    name: "personalInfo",
    initialState,
    reducers: {
        updateFirstName: (state, action: PayloadAction<string>) => {
            state.firstName = action.payload;
        },
        updateMiddleName: (state, action: PayloadAction<string>) => {
            state.middleName = action.payload;
        },
        updateLastName: (state, action: PayloadAction<string>) => {
            state.lastName = action.payload;
        }
    }
});

export const { updateFirstName, updateLastName, updateMiddleName } = PersonalInfoSlice.actions;

export default PersonalInfoSlice.reducer;