const { createSlice } = require('@reduxjs/toolkit');
const {
  createUser,
  login,
  logout,
  fetchCurrentUser,
  getCurrent,
  updateUser,
} = require('./authOperations');
const {
  handelPending,
  handelRejected,
  logoutFulfilled,
  currentFulfilled,
  registerFulfilled,
  loginFulfilled,
  logoutReject,
  updateUserFulfilled,
  rejectedRefresh,
  fulfilledRefresh,
} = require('./authFunctions');

const initialState = {
  user: {},
  isLoggedIn: false,
  isLoading: false,
  error: { message: '', status: null },
  accessToken: null,
  isRefreshing: false,
  isNewUser: false,
  userId: '',
  isRefreshingToken: false,
  refreshToken: null,
};

const arrayThunks = [
  createUser,
  login,
  logout,
  getCurrent,
  updateUser,
  fetchCurrentUser,
];

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  extraReducers: builder => {
    arrayThunks.forEach(fetch => {
      builder
        .addCase(fetch.pending, handelPending)
        .addCase(fetch.rejected, (state, action) => {
          switch (fetch) {
            case createUser:
            case login:
            case getCurrent:
              handelRejected(state, action);
              break;
            case logout:
              logoutReject(state, action);
              break;
            case fetchCurrentUser:
              rejectedRefresh(state, action);
              break;
            default:
              break;
          }
        })
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
            case getCurrent:
              currentFulfilled(state, action);
              break;
            case updateUser:
              updateUserFulfilled(state, action);
              break;
            case fetchCurrentUser:
              fulfilledRefresh(state, action);
              break;
            default:
              break;
          }
        });
    });
  },
});

export const authReducer = authSlice.reducer;
