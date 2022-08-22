import { login } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
// import { resetRouter } from '@/router'

export default {
  namespaced: true,

  state: {
    // 为了持久化token 在本地存储拿token
    userInfo: {},
    userInfoToken: getToken()
  },

  mutations: {
    // 修改仓库的信息 把token保存起来
    SETUSERINFO(state, userInfo) {
      state.userInfo = userInfo
      setToken(userInfo.token)
    },
    // // 删除token
    removeToken(state) {
      state.userInfo = null
      removeToken()
    }
  },

  actions: {
    getInfo() {

    },
    // 登录接口
    async  getUserInfo({ commit }, formData) {
      const res = await login(formData)
      console.log(res)
      // 如果成功 就commit
      if (res.status === 200) {
        // setToken(res.data)
        commit('SETUSERINFO', res.data)
      } else {
        return Promise.reject(new Error('fali'))
      }
    }
  }

}

