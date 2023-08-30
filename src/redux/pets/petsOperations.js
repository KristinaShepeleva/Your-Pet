import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import instance from 'redux/instance';

export const fetchPets = createAsyncThunk(
  'pets/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await instance.get('/api/pets/users/pets');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.config.method);
    }
  }
);
export const addPet = createAsyncThunk('pets/addPet', async (pet, thunkAPI) => {
  try {
    const response = await instance.post('/api/pets/users/addPet', pet);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(
      toast.error('The pet was not added. Try later', { draggable: false })
    );
  }
});

export const deleteUserPet = createAsyncThunk(
  'pets/deletePet',
  async (petId, thunkAPI) => {
    try {
      const response = await instance.delete(`/api/pets/users/${petId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        toast.error('The pet was not deleted. Try later', { draggable: false })
      );
    }
  }
);
