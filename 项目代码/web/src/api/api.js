/**
 * api接口路径统一处理
 * 
 */
import { get, post, del, put } from './http'

//列表查询
export const apiList = p => get('/list', p);

//新增提交
export const apiAdd = p => post('/add', p);

//删除
export const apiDel = p => del('/delete', p);

//修改提交
export const apiEdit = p => put('/edit', p);

//登录
export const apiLogn = p => post('/login', p);