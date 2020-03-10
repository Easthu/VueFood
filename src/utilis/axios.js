import axios from "axios"; //引入axios
//请求拦截器 发起请求之前对请求参数做一波处理
axios.interceptors.request.use(
    function(config) {
        // Do something before request is sent
        return config;
    },
    function(error) {
        // Do something with request error
        return Promise.reject(error);
    }
);
//响应拦截器，接收到数据的时候对数据进行一些处理
axios.interceptors.response.use(
    function(response) {
        // console.log("响应");
        return response.data;
    },
    function(error) {
        return Promise.reject(error);
    }
);
export default axios