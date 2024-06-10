import http from "../utils/request";

// 请求首页数据接口
export const getData = () => {
    // 返回一个Promise的对象
    return http.get('/home/getData')
}
