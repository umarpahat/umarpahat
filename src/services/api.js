import axios from 'axios';
import {API_ENDPOINT} from '../constant'


// configuring axios
export const api = axios.create({
  baseURL: API_ENDPOINT,
});

export const postData = data => {return new Promise(async (resolve, reject) => {
  api.post(data.endPoint, data.payload, { headers: { 'Authorization': 'Token ' + data.token } })
    .then((response) => {
      return resolve(response);
    })
    .catch((error) => {
      if (error.message === 'Request failed with status code 401') {
        // NavigationService.navigate('MobileNumber', {});
      } else {
        return reject(error);
      }
    });
})};


export async function getData(data) {
  // return new Promise(async (resolve, reject) => {
  const dataget = await api.post(data.endPoint, {s3_path: data.payload}, {headers: { 'Authorization': 'Token ' + data.token } })
  // const jsonData = await dataget.json();
  //console.log("eeeeee", dataget)
  return dataget
    // .then((response) => {
    //   //console.log("inside general get s3 url")
    //   //console.log(response)
    //   return resolve(response);
    // })
    // .catch((error) => {
    //   //console.log("inside general get s3 url error")
    //   //console.log(error)
    //   if (error.message === 'Request failed with status code 401') {
    //     // NavigationService.navigate('MobileNumber', {});
    //   } else {
    //     return reject(error);
    //   }
    // });
// }
}



// export const getIndustryList = (token) => {
//   let url = `${API_ENDPOINT}/api/industry_list/`
  
//   let config = {
//       headers: {
//         Authorization: "Token " + token,
//         'Content-Type': "application/json"
//       }
//     }
    
//   return dispatch => new Promise((resolve, reject) => {
//       axios.get(url, config)
//       .then((res) => {
      
//           return resolve(res.data)
//       })
     
//       .catch((err) => {
//           return reject(err)
//       })
//   })
// }

export const postS3 = (data) => {
  return new Promise(async (resolve, reject) => {
    //console.log("eeeeeeeeeeeeeee")
    //console.log(data)
    const formData = new FormData();
    Object.keys(data.presignedPostData?.fields).forEach(key => {
      formData.append(key, data.presignedPostData?.fields[key]);
    });
    formData.append("file", data.res);
    api.post(data.presignedPostData.url, formData, {}).then((response) => {
      //console.log("response s3",response)
      return resolve(response);
    })
      .catch((error) => {
        //console.log(123456, error)
        if (error.message === 'Request failed with status code 401') {
          // NavigationService.navigate('MobileNumber', {});
        } else {
          // //console.log(123456)
          return reject(error);
        }
      });
  })
};


export async function getS3SignedUrl(data){
  // return new Promise(async (resolve, reject) => {
    const dataS3 = await getData({ endPoint: 'api/upload_to_s3/', token: data.token , payload: data.payload.s3_path})
    //console.log(222222, dataS3)
    return dataS3
    // .then((response) => {
    //   return resolve(dataS3)
    // }).catch((error) => {
    //   return reject(error)
    // })
  // })
}