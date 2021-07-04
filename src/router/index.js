import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/components/front/FrontStage'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/front/Home')
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/views/front/Login')
      },
      {
        path: 'cart', // 購物車列表
        name: 'Cart',
        component: () => import('@/views/front/Cart')
      },
      {
        path: 'products',
        name: 'Products',
        component: () => import('@/views/front/Products')
      },
      {
        path: '/product/:id',
        name: 'ProductDetail',
        component: () => import('@/views/front/Product')
      },
      {
        path: '/news',
        component: () => import('@/components/front/News'),
        children: [
          {
            path: 'news_one', // 最新消息
            name: 'NewsOne',
            component: () => import('@/views/front/NewsOne')
          },
          {
            path: 'news_two',
            name: 'NewsTwo',
            component: () => import('@/views/front/NewsTwo')
          },
          {
            path: 'news_three',
            name: 'NewsThree',
            component: () => import('@/views/front/NewsThree')
          }
        ]
      },
      {
        path: '/checkout',
        component: () => import('@/components/front/Checkout'),
        children: [
          {
            path: 'order_create', // 確認購物車內容
            name: 'OrderCreate',
            component: () => import('@/views/front/OrderCreate')
          },
          {
            path: 'order_buying', // 填寫資料
            name: 'OrderBuying',
            component: () => import('@/views/front/OrderBuying')
          },
          {
            path: 'order_paid/:orderId', // 結帳成功
            name: 'OrderPaid',
            component: () => import('@/views/front/OrderPaid')
          }
        ]
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('@/components/back/BackStage'),
    children: [
      {
        path: 'shopping',
        name: 'Backshopping',
        component: () => import('@/views/back/BackShopping'),
        meta: { requiresAuth: true }
      },
      {
        path: 'products',
        name: 'BackProducts',
        component: () => import('@/views/back/BackProducts'),
        meta: { requiresAuth: true }
      },
      {
        path: 'coupon',
        name: 'BackCoupon',
        component: () => import('@/views/back/BackCoupon'),
        meta: { requiresAuth: true }
      },
      {
        path: 'orders', // 訂單列表
        name: 'Backorders',
        component: () => import('@/views/back/BackOrders'),
        meta: { requiresAuth: true }
      }
    ]
  },
  { // 重新導向: 預設為首頁
    path: '/:pathMatch(.*)*',
    redirect: {
      name: 'Home'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
