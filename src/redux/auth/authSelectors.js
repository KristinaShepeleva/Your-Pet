export const selectUser = state => state.auth.user;
export const selectIsAuthLoading = state => state.auth.isLoading;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectError = state => state.auth.error;
export const selectNewUser = state => state.auth.isNewUser;
export const selectUserId = state => state.auth.userId;
export const selectRefreshToken = state => state.auth.refreshToken;
