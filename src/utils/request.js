import axios from "axios";

const http = axios.create({
    // 通用请求地址
    baseURL: '/api',
    timeout: 10000,  // 超时时间
})

// 拦截器
// 添加请求拦截器
http.interceptors.request.use(function (config) {
    // 在发送请求前做什么
    return config;
}, function (error) {
    return Promise.reject(error);
});

// 添加响应拦截器
http.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    return Promise.reject(error);
});

export default http;