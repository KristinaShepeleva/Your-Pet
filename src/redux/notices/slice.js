const { createSlice } = require('@reduxjs/toolkit');
const {
  allNoties,
  favoriteList,
  myNotices,
  getOneNotices,
  updateFavorite,
  deletePet,
  addNotice,
} = require('./operation');

const {
  handelPending,
  handelFulfilled,
  handelRejected,
  getByIdFulfilled,
  addNoticeFulfilled,
  updateFulfilled,
  deleteFulfilled,
} = require('./functions');

const initialState = {
  isLoading: false,
  notices: [],
  oneNotice: {},
  error: { message: '', status: null },
};

const arrayThunks = [
  allNoties,
  favoriteList,
  myNotices,
  getOneNotices,
  updateFavorite,
  deletePet,
];

const noticesSlice = createSlice({
  name: 'notices',
  initialState,
  extraReducers: bilder => {
    arrayThunks.forEach(fetch => {
      bilder
        .addCase(fetch.pending, handelPending)
        .addCase(fetch.rejected, handelRejected)
        .addCase(fetch.fulfilled, (state, action) => {
          switch (fetch) {
            case allNoties:
            case favoriteList:
            case myNotices:
              handelFulfilled(state, action);
              break;
            case getOneNotices:
              getByIdFulfilled(state, action);
              break;
            case addNotice:
              addNoticeFulfilled(state, action);
              break;
            case updateFavorite:
              updateFulfilled(state, action);
              break;
            case deletePet:
              deleteFulfilled(state, action);
              break;
            default:
              break;
          }
        });
    });
  },
});

export const noticesReduder = noticesSlice.reducer;
