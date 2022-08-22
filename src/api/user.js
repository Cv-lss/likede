import request from '@/utils/request'

export const login = (data) => request({ url: `/user-service/user/login`, data, method: 'post' })

export function getInfo(token) {

}

export function logout() {

}
