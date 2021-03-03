import axios from 'axios'

axios.interceptors.request.use(req => {
    console.log(`${req.method} ${req.url}`);
    // Important: request interceptors **must** return the request.
    return req;
  });
  
  axios.interceptors.response.use(res => {
    console.log(res.data.json);
    // Important: response interceptors **must** return the response.
    return res;
  });
  