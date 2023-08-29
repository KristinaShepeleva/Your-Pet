export const handelPending = state => {
  state.isLoading = true;
};
export const handelRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = {
    message: payload.message,
    status: payload.status,
  };
};
export const rejectedRefresh = (state, { payload }) => {
  state.isLoading = false;
  console.log('rejected refresh', payload);
};
export const registerFulfilled = (state, { payload }) => {
  console.log(payload);
  state.isLoading = false;
  state.isNewUser = true;
  state.isLoggedIn = true;
  state.user = payload.user;
  state.accessToken = payload.accessToken;

  state.refreshToken = payload.refreshToken;

  state.error = { message: '', status: null };
};
export const loginFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.user = payload.user;
  state.accessToken = payload.accessToken;
  state.refreshToken = payload.refreshToken;
  state.isLoggedIn = true;
  state.error = { message: '', status: null };
  state.isNewUser = false;
};

export const logoutFulfilled = state => {
  state.isLoading = false;
  state.isRefreshing = false;
  state.isNewUser = false;
  state.isLoggedIn = false;
  state.user = {};
  state.accessToken = null;
  state.error = { message: '', status: null };
  state.userId = '';
};
export const logoutReject = state => {
  state.isLoading = false;
  state.isRefreshing = false;
  state.isNewUser = false;
  state.isLoggedIn = false;
  state.user = {};
  state.accessToken = null;
  state.error = { message: '', status: null };
};

export const fulfilledRefresh = (state, { payload }) => {
  console.log(payload);
  state.isLoading = false;
  // state.isLoggedIn = true;
  // state.isRefreshingToken = true;
  // state.user = payload;
  // state.error = { message: '', status: null };
  // state.isNewUser = false;
  // state.isRefreshing = false;
};

export const currentFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.userId = payload._id;
};

export const updateUserFulfilled = (state, { payload }) => {
  // console.log(payload);
  state.isLoading = false;
  state.isLoggedIn = true;
  state.isRefreshing = true;
  state.user = payload;
  state.error = { message: '', status: null };
  state.isNewUser = false;
};

export const updateUserAvatarFulfilled = (state, { payload }) => {
  console.log('payload', payload);
  state.isLoading = false;
  state.isLoggedIn = true;
  state.isRefreshing = true;
  state.user.avatarURL = payload;
  state.error = { message: '', status: null };
  state.isNewUser = false;
};
