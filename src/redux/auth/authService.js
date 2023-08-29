// import axios from 'axios';

// const refreshToken = async () => {
//   const oldRefreshToken = localStorage.getItem('refreshToken');
//   const response = await axios.post('/auth/refresh', {
//     refreshToken: oldRefreshToken,
//   });
//   const newAccessToken = response.data.accessToken;
//   const newRefreshToken = response.data.refreshToken;

//   localStorage.setItem('accessToken', newAccessToken);
//   localStorage.setItem('refreshToken', newRefreshToken);

//   return newAccessToken;
// };
// export default refreshToken;
