import { createSlice } from '@reduxjs/toolkit';
import { fetchPets, deleteUserPet, addPet } from './petsOperations';

const petsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const petsSlice = createSlice({
  name: 'contacts',
  initialState: petsInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchPets.pending, handlePending)
      .addCase(addPet.pending, handlePending)
      .addCase(deleteUserPet.pending, handlePending)
      .addCase(fetchPets.rejected, handleRejected)
      .addCase(addPet.rejected, handleRejected)
      .addCase(deleteUserPet.rejected, handleRejected)

      .addCase(fetchPets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(addPet.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(deleteUserPet.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        const index = state.items.findIndex(
          pet => pet.petId === action.payload.petId
        );
        state.items.splice(index, 1);
      });
  },
});

export const petsReducer = petsSlice.reducer;
