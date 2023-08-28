import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://yourpet-app-backend.onrender.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const currentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.token;

    if (!persistToken) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistToken);
    try {
      const { data } = axios.get('/api/auth/current');
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

export const createUser = createAsyncThunk(
  'auth/createUser',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('api/auth/register', credentials);
      token.set(data.token);
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
      const { data } = await axios.post('api/auth/login', credentials);
      token.set(data.token);
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
    const { data } = await axios.post('api/auth/logout');
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
      const { data } = await axios.patch('api/update', credentials);
      // token.set(data.token);
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
      const { data } = await axios.get('api/user/current');
      return data;
    } catch (e) {
      const res = e.response;
      console.log(res.data.message);
      return thunkAPI.rejectWithValue(res.status);
    }
  }
);

export const updateUserAvatar = createAsyncThunk(
  'auth/updateUser',
  async (credentials, thunkAPI) => {
    try {
      console.log(credentials, 'credentials');
      const { data } = await axios.patch('api/user/update/avatar', credentials);
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
