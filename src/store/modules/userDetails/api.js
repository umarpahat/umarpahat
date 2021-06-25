import { api } from '../../../services/api'
import {postData} from '../../../services/api'

//Mock option data for option component when data is not coming from api
export const getUserData = data => new Promise(async (resolve, reject) => {
  api.get(`api/general_user_details/`, { headers: { 'Authorization': 'Token ' + data.token } })
    .then((response) => {
      return resolve(response);
    })
    .catch((error) => {
      return reject(error);
    });
});

export const getUserGeneralDetails = data => {return new Promise(async (resolve, reject) => {
  postData({endPoint:'api/general_input/', token:data.token, payload:data.payload}).then((response) => {
    return resolve(response)
  }).catch((error) => {
    return reject(error)
  })
})}

// export const getEkyc = data => new Promise(async (resolve, reject) => {
//   api.get(`https://api.testing.paymeindia.in/api/get_document_status/`, { headers: { 'Authorization': 'Token ' + data.token } })
//     .then((response) => {
//       return resolve(response);
//     })
//     .catch((error) => {
//       return reject(error);
//     });
// });