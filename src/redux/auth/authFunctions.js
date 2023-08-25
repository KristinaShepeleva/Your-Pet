export const handelPending = state => {
  state.isLoading = true;
};
export const handelRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = {
    message: payload.data.message,
    status: payload.status,
  };
};

export const registerFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.isNewUser = true;
  state.isLoggedIn = true;
  state.user = payload.user;
  state.token = payload.token;
  state.error = { message: '', status: null };
};
export const loginFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.user = payload.user;
  state.token = payload.token;
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
  state.token = null;
  state.error = { message: '', status: null };
};
export const currentFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.isLoggedIn = true;
  state.isRefreshing = true;
  state.user = payload;
  state.error = { message: '', status: null };
  state.isNewUser = false;
};
export const logoutReject = state => {
  state.isLoading = false;
  state.isRefreshing = false;
  state.isNewUser = false;
  state.isLoggedIn = false;
  state.user = {};
  state.token = null;
  state.error = { message: '', status: null };
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
