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

export const handelFulfilled = (state, { payload }) => {
  state.totalPages = payload.totalPages;
  state.notices = payload.result;
  state.isLoading = false;
  state.error = { message: '', status: null };
};

export const getByIdFulfilled = (state, { payload }) => {
  state.oneNotice = payload;
  state.isLoading = false;
  state.error = { message: '', status: null };
};

export const addNoticeFulfilled = (state, { payload }) => {
  state.notices.push(payload);
  state.isLoading = false;
  state.error = { message: '', status: null };
};

export const deleteFulfilled = (_, { payload }) => {
  console.log(payload);
};

export const updateFulfilled = (state, { payload }) => {
  state.isLoading = false;
  const noticeIndex = state.notices.findIndex(
    notice => notice._id === payload._id
  );
  if (noticeIndex !== -1) {
    state.notices[noticeIndex] = payload;
  }
};
