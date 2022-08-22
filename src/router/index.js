import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '帝可得', icon: 'dashboard' }
      }
    ]
  },

  // 工单管理
  {
    path: '/workordermanagement',
    name: 'workorderManagement',
    component: Layout,
    meta: { title: '工单管理', icon: 'el-icon-document' },
    children: [
      {
        path: 'operatingrepairorder',
        name: 'OperatingRepairOrder',
        component: () => import('@/views/workorderManagement/OperatingRepairOrder'),
        meta: { title: '运营工单' }
      },
      {
        path: 'operationworkorder',
        name: 'OperationWorkOrder',
        component: () => import('@/views/workorderManagement/OperationWorkOrder'),
        meta: { title: '运维工单' }
      }
    ]
  },

  // 点位管理
  {
    path: '/levelmanagement',
    name: 'LevelManagement',
    component: Layout,
    meta: { title: '点位管理', icon: 'el-icon-document' },
    children: [
      {
        path: 'regionalmanagement',
        name: 'RegionalManagement',
        component: () => import('@/views/LevelManagement/RegionalManagement'),
        meta: { title: '区域管理' }
      },
      {
        path: 'levelmanagement2',
        name: 'LevelManagement2',
        component: () => import('@/views/LevelManagement/LevelManagement2'),
        meta: { title: '点位管理' }
      },
      {
        path: 'partnermanagement',
        name: 'PartnerManagement',
        component: () => import('@/views/LevelManagement/PartnerManagement'),
        meta: { title: '合作商管理' }
      }
    ]
  },

  // 设备管理
  {
    path: '/equipmentmanagement',
    name: 'EquipmentManagement',
    component: Layout,
    meta: { title: '设备管理', icon: 'el-icon-document' },
    children: [
      {
        path: 'devicetypemanagement',
        name: 'DeviceTypeManagement',
        component: () => import('@/views/EquipmentManagement/DeviceTypeManagement'),
        meta: { title: '区域管理' }
      },
      {
        path: 'equipmentmanagement2',
        name: 'EquipmentManagement2',
        component: () => import('@/views/EquipmentManagement/EquipmentManagement2'),
        meta: { title: '点位管理' }
      },
      {
        path: 'equipmentstate',
        name: 'EquipmentState',
        component: () => import('@/views/EquipmentManagement/EquipmentState'),
        meta: { title: '合作商管理' }
      }
    ]
  },

  // 人员管理
  {
    path: '/personnel',
    name: 'personnel',
    component: Layout,
    meta: { title: '人员管理', icon: 'el-icon-document' },
    children: [
      {
        path: 'personnellist',
        name: 'PersonnelList',
        component: () => import('@/views/personnel/PersonnelList'),
        meta: { title: '区域管理' }
      },
      {
        path: 'peopleworkstatistics',
        name: 'PeopleWorkStatistics',
        component: () => import('@/views/personnel/PeopleWorkStatistics'),
        meta: { title: '点位管理' }
      },
      {
        path: 'workloadlist',
        name: 'WorkloadList',
        component: () => import('@/views/personnel/WorkloadList'),
        meta: { title: '合作商管理' }
      }
    ]
  },

  // 商品管理
  {
    path: '/goods',
    name: 'Goods',
    component: Layout,
    meta: { title: '商品管理', icon: 'el-icon-document' },
    children: [
      {
        path: 'goodstype',
        name: 'goodsType',
        component: () => import('@/views/Goods/goodsType'),
        meta: { title: '商品类型' }
      },
      {
        path: 'goodsmanagement',
        name: 'goodsmanagement',
        component: () => import('@/views/Goods/GoodsManagement'),
        meta: { title: '商品管理' }
      }

    ]
  },

  // 策略管理
  {
    path: '/strategicmanagement',
    component: Layout,
    children: [
      {
        path: 'strategicmanagement',
        name: 'StrategicManagement',
        component: () => import('@/views/StrategicManagement/index'),
        meta: { title: '策略管理' }
      }
    ]
  },

  // 订单管理、
  {
    path: '/order',
    component: Layout,
    children: [
      {
        path: 'order',
        name: 'Order',
        component: () => import('@/views/Order/index'),
        meta: { title: '订单管理' }
      }
    ]
  },

  // 策略管理
  {
    path: '/reconciliation',
    component: Layout,
    children: [
      {
        path: 'reconciliation',
        name: 'Reconciliation',
        component: () => import('@/views/Reconciliation/index'),
        meta: { title: '对账统计' }
      }
    ]
  }
  // // 404 page must be placed at the end !!!
  // { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
