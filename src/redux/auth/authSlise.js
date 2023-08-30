const { createSlice } = require('@reduxjs/toolkit');
const {
  createUser,
  login,
  logout,
  getCurrentUser,
  updateUser,
  updateUserAvatar,
  fetchRefreshToken,
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
  updateUserAvatarFulfilled,
  rejectedRefresh,
  refreshFulfilled,
} = require('./authFunctions');

const initialState = {
  user: {},
  isLoggedIn: false,
  isLoading: false,
  error: { message: '', status: null },
  accessToken: null,
  refreshToken: null,
  isRefreshing: false,
  isNewUser: false,
  userId: '',
  isRefreshingToken: false,
};

const arrayThunks = [
  createUser,
  login,
  logout,
  getCurrentUser,
  updateUser,
  updateUserAvatar,
  fetchRefreshToken,
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
            case getCurrentUser:
            case updateUser:
            case updateUserAvatar:
              handelRejected(state, action);
              break;
            case logout:
              logoutReject(state, action);
              break;
            case fetchRefreshToken:
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
            case fetchRefreshToken:
              refreshFulfilled(state, action);
              break;
            case getCurrentUser:
              currentFulfilled(state, action);
              break;
            case updateUser:
              updateUserFulfilled(state, action);
              break;
            case updateUserAvatar:
              updateUserAvatarFulfilled(state, action);
              break;
            default:
              break;
          }
        });
    });
  },
});

export const authReducer = authSlice.reducer;
export const { setRefreshToken } = authSlice.actions;
