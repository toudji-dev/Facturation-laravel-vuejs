import  {createRouter, createWebHistory} from "vue-router";

import invoiceIndex from "../invoices/index.vue";

import invoiceNew from "../invoices/new.vue";
import invoiceShow from "../invoices/show.vue"
import NoteFound from "../NoteFound.vue";
import invoiceEdit from '../invoices/edit.vue'

const routes = [
    {
        path:'/',
        component: invoiceIndex
    },
    {
        path:'/invoice/new',
        component: invoiceNew
    },
    {
        path:'/invoice/show/:id',
        component: invoiceShow,
        props:true
    },

    {
        path:'/invoice/edit/:id',
        component: invoiceEdit,
        props:true
    },
    {
        path:'/:pathMatch(.*)*',
        component: NoteFound
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
