import { createWebHistory, createRouter } from 'vue-router'
import Catalogo from "../pages/Catalogo.vue"
import Bio from "../pages/Bio.vue"
import Contato from "../pages/Contato.vue"
import CatalogDetail from "../pages/CatalogDetail.vue"

const history = createWebHistory()

const routes = [
    {
        path: '/galeria',
        name: 'galeria',
        component: Catalogo
    },
    {
        path: '/',
        name: 'bio',
        component: Bio
    },
    {
        path: '/contato',
        name: 'contato',
        component: Contato
    },
    {
        path: '/catalog-detail',
        name: 'Catalog Detail',
        component: CatalogDetail
    }
]

const router = createRouter({
     history,
     routes
})

export default router
