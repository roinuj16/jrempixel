import { createWebHistory, createRouter } from 'vue-router'
import Catalogo from "../pages/Catalogo.vue"
import Bio from "../pages/Bio.vue"
import Contato from "../pages/Contato.vue"
import CatalogDetail from "../pages/CatalogDetail.vue"

const history = createWebHistory()

const routes = [
    {
        path: '/',
        name: 'catalog',
        component: Catalogo
    },
    {
        path: '/bio',
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
