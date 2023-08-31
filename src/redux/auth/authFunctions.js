export const handelPending = state => {
  state.isLoading = true;
};

/////////////////rejected////////////////////////////

export const handelRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = {
    message: payload.message,
    status: payload.status,
  };
};

export const logoutReject = state => {
  state.isLoading = false;
  state.isRefreshing = false;
  state.isRefreshingToken = false;
  state.isNewUser = false;
  state.isLoggedIn = false;
  state.user = {};
  state.accessToken = null;
  state.refreshToken = null;
  state.error = { message: '', status: null };
};

export const rejectedRefresh = (state, { payload }) => {
  state.isLoading = false;
  state.error = {
    message: payload.message,
    status: payload.status,
  };
};

//////////////////fulfilled////////////////////////

export const registerFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.isNewUser = true;
  state.isLoggedIn = true;
  state.user = payload.user;
  state.accessToken = payload.accessToken;
  state.refreshToken = payload.refreshToken;
  state.error = { message: '', status: null };
};

export const loginFulfilled = (state, { payload }) => {
  state.accessToken = payload.accessToken;
  state.refreshToken = payload.refreshToken;
  state.isLoggedIn = true;
  state.isLoading = false;
  state.user = payload.user;
  state.error = { message: '', status: null };
  state.isNewUser = false;
};

export const logoutFulfilled = state => {
  state.isLoading = false;
  state.isRefreshing = false;
  state.isRefreshingToken = false;
  state.isNewUser = false;
  state.isLoggedIn = false;
  state.user = {};
  state.accessToken = null;
  state.refreshToken = null;
  state.error = { message: '', status: null };
  state.userId = '';
};

export const refreshFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.isLoggedIn = true;
  state.isRefreshingToken = true;
  state.accessToken = payload.accessToken;
  state.refreshToken = payload.refreshToken;
};

//////////////////// fulfilled User////////////////

export const currentFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.userId = payload._id;
  state.isLoggedIn = true;
  state.user = payload;
};

export const updateUserFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.isLoggedIn = true;
  state.isRefreshing = true;
  state.user = payload;
  state.error = { message: '', status: null };
  state.isNewUser = false;
};

export const updateUserAvatarFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.isLoggedIn = true;
  state.isRefreshing = true;
  state.user.avatarURL = payload;
  state.error = { message: '', status: null };
  state.isNewUser = false;
};
