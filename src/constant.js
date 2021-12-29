export let API_ENDPOINT;
export let API_ENDPOINT_SAARTHI;
export let API_ENDPOINT_STAGING;
export let S3_IMAGES_URL = "https://payme-static-document.s3.ap-south-1.amazonaws.com/website_images";




if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  console.log("dev code");
  API_ENDPOINT = "https://api.staging.paymeindia.in";
  API_ENDPOINT_STAGING = "https://staging.paymeindia.in";
  API_ENDPOINT_SAARTHI = "https://api-csr.paymeindia.in";
}
 else {
  console.log("dev Prod");
  API_ENDPOINT = "https://api.paymeindia.in";
  API_ENDPOINT_SAARTHI = "https://api-csr.paymeindia.in";
  API_ENDPOINT_STAGING = "https://apiv2.paymeindia.in";
}