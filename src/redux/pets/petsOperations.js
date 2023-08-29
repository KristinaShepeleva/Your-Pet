import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const fetchPets = createAsyncThunk(
  'pets/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/api/pets/users/pets');
      console.log(response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.config.method);
    }
  }
);

export const addPet = createAsyncThunk('pets/addPet', async (pet, thunkAPI) => {
  try {
    const response = await axios.post('/api/pets/users/addPet', pet);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(
      toast.error('The pet was not added. Try later')
    );
  }
});

export const deleteUserPet = createAsyncThunk(
  'pets/deletePet',
  async (petId, thunkAPI) => {
    try {
      const response = await axios.delete(`/api/pets/users/${petId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        toast.error('The pet was not deleted. Try later')
      );
    }
  }
);
