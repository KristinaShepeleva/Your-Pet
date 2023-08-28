import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://yourpet-app-backend.onrender.com';

// список всіх нотісів
export const allNoties = createAsyncThunk(
  'notie/getAll',
  async ({ category, search }, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `/api/notices?category=${category}&search=${search}&limit=12&page=1`
      );
      // console.log(data);
      return data;
    } catch (e) {
      const res = e.response;
      console.log(res.data.message);
      return thunkAPI.rejectWithValue({
        message: res.data.message,
        status: res.status,
      });
    }
  }
);

// діставання 1 нотіс
export const getOneNotices = createAsyncThunk(
  'notices/getOne',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.get(`/api/notices/${credentials}`);
      return data;
    } catch (e) {
      const res = e.response;
      console.log(res.data.message);
      return thunkAPI.rejectWithValue({
        message: res.data.message,
        status: res.status,
      });
    }
  }
);

// список улюблених
export const favoriteList = createAsyncThunk(
  'notices/favList',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(
        '/api/notices/favorites?limit=12&page=1'
      );
      return data;
    } catch (e) {
      const res = e.response;
      console.log(res.data.message);
      return thunkAPI.rejectWithValue({
        message: res.data.message,
        status: res.status,
      });
    }
  }
);

// запит за особистими нотісами
export const myNotices = createAsyncThunk(
  'notices/myNotices',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/api/notices/self?limit=12&page=1');
      return data;
    } catch (e) {
      const res = e.response;
      console.log(res.data.message);
      return thunkAPI.rejectWithValue({
        message: res.data.message,
        status: res.status,
      });
    }
  }
);

// update улюблених
export const updateFavorite = createAsyncThunk(
  'notices/updateFavorite',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.patch(
        `/api/notices/${credentials}/favorites`
      );
      return data;
    } catch (e) {
      const res = e.response;
      console.log(res.data.message);
      return thunkAPI.rejectWithValue({
        message: res.data.message,
        status: res.status,
      });
    }
  }
);

// додавання нотісів //////////////////////
// приклад credentials :
// const newNotices = {
//   name: 'Kit',
//   title: 'Lovely cat',
//   sex: 'male',
//   birthday: '13.09.2021',
//   type: 'red cat',
//   // imgURL:
//   //   'https://pixabay.com/photos/dalmatian-dog-lick-tongue-pet-1020790/',
//   location: 'Kyiv',
//   price: '10$',
//   comments: 'Found cat',
//   category: 'lost found',// sell // in good hands
// };
export const addNotice = createAsyncThunk(
  'notices/addNotice',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('api/notices', credentials);
      return data;
    } catch (e) {
      const res = e.response;
      console.log(res.data.message);
      return thunkAPI.rejectWithValue({
        message: res.data.message,
        status: res.status,
      });
    }
  }
);
// видалення користувачем нотісів
export const deletePet = createAsyncThunk(
  'notices/delete',
  async (credentials, thunkAPI) => {
    console.log(credentials);
    try {
      const { data } = await axios.delete(`/api/notices/${credentials}`);
      return data;
    } catch (e) {
      const res = e.response;
      console.log(res.data.message);
      return thunkAPI.rejectWithValue({
        message: res.data.message,
        status: res.status,
      });
    }
  }
);
