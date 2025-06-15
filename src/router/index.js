import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import CreateGame from "@/views/CreateGame.vue";
import JoinGame from "@/views/JoinGame.vue";

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/createGame', name: 'CreateGame', component: CreateGame },
    { path: '/joinGame', name: 'JoinGame', component: JoinGame },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router