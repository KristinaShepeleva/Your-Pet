import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://yourpet-app-backend.onrender.com/api';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (credentials, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.accessToken;

    if (!persistToken) {
      return thunkAPI.rejectWithValue();
    }

    try {
      const response = axios.post('/auth/refresh', credentials);
      // token.set(data.accessToken);
      return response;
    } catch (e) {
      // const res = e.response;
      console.log(e);
      return thunkAPI.rejectWithValue(
        e
        // {
        // message: res.data.message,
        // status: res.status,
        // }
      );
    }
  }
);

export const createUser = createAsyncThunk(
  'auth/createUser',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/auth/register', credentials);
      token.set(data.accessToken);
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

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/auth/login', credentials);
      token.set(data.accessToken);
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

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const { data } = await axios.post('/auth/logout');
    token.unset();
    return data;
  } catch (e) {
    const res = e.response;
    console.log(res.data.message);
    return thunkAPI.rejectWithValue({
      message: res.data.message,
      status: res.status,
    });
  }
});
// cat5@cat.com
export const updateUser = createAsyncThunk(
  'auth/updateUser',
  async (credentials, thunkAPI) => {
    try {
      console.log(credentials, 'credentials');
      const { data } = await axios.patch('/update', credentials);
      // token.set(data.accessToken);
      console.log(data, 'data');
      return data;
    } catch (e) {
      console.log('e', e);
      const res = e.response;
      console.log('res.data.message', res.data.message);
      return thunkAPI.rejectWithValue('////');
    }
  }
);
export const getCurrent = createAsyncThunk(
  'auth/current',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/user/current');
      return data;
    } catch (e) {
      const res = e.response;
      console.log(res.data.message);
      return thunkAPI.rejectWithValue(res.status);
    }
  }
);
