const { createSlice } = require('@reduxjs/toolkit');
const { createUser, login, logout, currentUser } = require('./authOperations');
const {
  handelPending,
  handelRejected,
  logoutFulfilled,
  currentFulfilled,
  registerFulfilled,
  loginFulfilled,
} = require('./authFunctions');

const initialState = {
  user: {},
  isLoggedIn: false,
  isLoading: false,
  error: null,
  token: null,
  isRefreshing: false,
};

const arrayThunks = [createUser, login, logout, currentUser];

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  extraReducers: builder => {
    arrayThunks.forEach(fetch => {
      builder
        .addCase(fetch.pending, handelPending)
        .addCase(fetch.rejected, handelRejected)
        .addCase(fetch.fulfilled, (state, action) => {
          switch (fetch) {
            case createUser:
              registerFulfilled(state, action);
              break;
            case login:
              loginFulfilled(state, action);
              break;
            case logout:
              logoutFulfilled(state, action);
              break;
            case currentUser:
              currentFulfilled(state, action);
              break;
            default:
              break;
          }
        });
    });
  },
});

export const authReducer = authSlice.reducer;
