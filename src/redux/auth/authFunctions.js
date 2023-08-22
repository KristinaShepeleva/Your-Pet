export const handelPending = state => {
  state.isLoading = true;
};
export const loginFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
  state.error = null;
  state.isNewUser = false;
};
export const registerFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
  state.error = null;
  state.isNewUser = true;
};
export const handelRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const logoutFulfilled = state => {
  state.isLoading = false;
  state.user = {};
  state.token = null;
  state.isLoggedIn = false;
  state.error = null;
  state.isRefreshing = false;
  state.isNewUser = false;
};
export const currentFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.isLoggedIn = true;
  state.isRefreshing = true;
  state.user = payload;
  state.error = null;
  state.isNewUser = false;
};
