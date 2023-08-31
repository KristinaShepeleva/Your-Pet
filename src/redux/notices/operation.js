// import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../instance';
// axios.defaults.baseURL = 'https://yourpet-app-backend.onrender.com';

// список всіх нотісів
export const allNoties = createAsyncThunk(
  'notie/getAll',
  async ({ category, search, page }, thunkAPI) => {
    try {
      const { data } = await instance.get(
        `/api/notices?category=${category}&search=${search}&limit=12&page=${page}`
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
      const { data } = await instance.get(`/api/notices/${credentials}`);
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
  async (credentials, thunkAPI) => {
    try {
      const { data } = await instance.get(
        `/api/notices/favorites?limit=12&page=${credentials}`
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
  async (credentials, thunkAPI) => {
    try {
      const { data } = await instance.get(
        `/api/notices/self?limit=12&page=${credentials}`
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

// update улюблених
export const updateFavorite = createAsyncThunk(
  'notices/updateFavorite',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await instance.patch(
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
export const addNotice = createAsyncThunk(
  'notices/addNotice',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await instance.post('/api/notices', credentials);
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
      const { data } = await instance.delete(`/api/notices/${credentials}`);
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
