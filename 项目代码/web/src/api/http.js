/**
 * 公共请求方法的封装
 * get post put delete
 */
import axios from "axios";
import {
    Message
} from 'element-ui';

//默认请求地址
axios.defaults.baseURL = 'http://localhost:3001';

//设置请求头数据类型
axios.defaults.headers['Content-Type'] = 'application/json';


// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    Message.error('请求错误')
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    Message.error('服务器错误')
    return Promise.reject(error);
});

//get 方法
export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
                params: params
            })
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err.data)
            });
    })
}

//post 方法
export function post(url, data) {
    return new Promise((resolve, reject) => {
        axios.post(url, data)
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err.data)
            });
    })
}

//put 方法
export function put(url, data) {
    return new Promise((resolve, reject) => {
        axios.put(url, data)
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err.data)
            });
    })
}

//delete 方法
export function del(url, data) {
    return new Promise((resolve, reject) => {
        axios.delete(url, {data: data})
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err.data)
            });
    })
}
