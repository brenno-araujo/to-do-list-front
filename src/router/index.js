import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Todos from '@/views/Todos/Todos.vue'
import TodoCreate from '@/views/Todos/CreateTodo.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/todos',
    name: 'Todos.index',
    component: Todos
  },
  {
    path: '/todo/create',
    name: 'Todo.create',
    component: TodoCreate
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
