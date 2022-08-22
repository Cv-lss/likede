import request from '@/utils/request'

// 获取工单列表详情接口  /api/task-service/task/allTaskStatus  get
export const getWorkOrderList = () => request({ url: `/task-service/task/allTaskStatus` })

// 工单搜索的接口 /api/task-service/task/search  get
export const getOrderSearch = (params) => request({ url: `/task-service/task/search`, params, method: 'get' })

// 新增工单的接口 /api/user-service/user/operatorList/:innerCode  get 根据售货机获取运营人员列表
export const getPersonnelList = (innerCode) => request({ url: `user-service/user/operatorList/${innerCode}`, method: 'get' })

// 获取新增工单的货道详情接口  /api/vm-service/channel/channelList/:innerCode  get 获取售货机货道详情
export const getAisleList = (innerCode) => request({ url: `vm-service/channel/channelList/${innerCode}`, method: 'get' })

// 创建工单 /api/task-service/task/create post
export const createOrder = (data) => request({ url: `/task-service/task/create`, data, method: 'post' })

// 补货详情的接口 /api/task-service/taskDetails/:taskId  get
export const replenishmentDetails = (taskId) => request({ url: `/task-service/taskDetails/${taskId}`, method: 'get' })

// 获取工单详情  /api/task-service/task/taskInfo/:taskId  get
export const getWorkOrderInfo = (taskId) => request({ url: `task-service/task/taskInfo/${taskId}`, method: 'get' })

// 取消工单的接口 /api/task-service/task/cancel/:taskId  post
export const cancelWorkOrder = (taskId, data) => request({ url: `task-service/task/cancel/${taskId}`, data, method: 'post' })

// 工单配置的接口 /task-service/task/supplyAlertValue get
export const getAllocation = () => request({ url: `/task-service/task/supplyAlertValue`, method: 'get' })

// 工单配置确认按钮 /task-service/task/autoSupplyConfig  get
export const allocationConfirm = (data) => request({ url: `/task-service/task/autoSupplyConfig`, data, method: 'post' })

