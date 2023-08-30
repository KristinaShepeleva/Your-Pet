import { toast } from 'react-toastify';
import instance from '../instance';
import { createAsyncThunk } from '@reduxjs/toolkit';

const token = {
  set(token) {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    instance.defaults.headers.common.Authorization = '';
  },
};

export const fetchRefreshToken = createAsyncThunk(
  'auth/refreshToken',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const accessToken = state.auth.accessToken;

      if (!accessToken) {
        return thunkAPI.rejectWithValue('not access');
      }

      token.set(accessToken);
      const refreshToken = state.auth.refreshToken;

      if (!refreshToken) {
        return thunkAPI.rejectWithValue('not refresh');
      }
      const { data } = await instance.post('/api/auth/refresh', {
        refreshToken,
      });

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
      const { data } = await instance.post('/api/auth/register', credentials);
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
      const { data } = await instance.post('/api/auth/login', credentials);

      token.set(data.accessToken);
      return data;
    } catch (e) {
      console.log(e);
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
    const { data } = await instance.post('/api/auth/logout');

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

export const updateUser = createAsyncThunk(
  'auth/updateUser',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await instance.patch('/api/user/update', credentials);

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(
        toast.error('The info was not updated. Try later')
      );
    }
  }
);
export const getCurrentUser = createAsyncThunk(
  'auth/current',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const accessToken = state.auth.accessToken;
      if (!accessToken) {
        return thunkAPI.rejectWithValue('not token');
      }
      token.set(accessToken);
      const { data } = await instance.get('/api/user/current');

      return data;
    } catch (e) {
      const res = e.response;
      return thunkAPI.rejectWithValue(res.status);
    }
  }
);

export const updateUserAvatar = createAsyncThunk(
  'auth/updateUserAvatar',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await instance.patch(
        '/api/user/update/avatar',
        credentials
      );
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(
        toast.error('The avatar was not updated. Try later')
      );
    }
  }
);
