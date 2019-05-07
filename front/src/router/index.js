const signup = ()=> import('../components/signup.vue')
const login = () => import ('../components/login.vue')
const index = () => import ("../components/index.vue")
// import signup from '../components/signup.vue'
// import login from '../components/login.vue'
let routers = [
    {
        path: '/',
        redirect: '/signup'
    },
    {
        path: '/signup',
        component: signup, 
        name: 'signup'
    },
    {
        path: '/login',
        component: login,
        name: "login"
    },
    {
        path: '/index',
        component: index,
        name: "index",
        meta: {
            'needAuth': true,
            "permission": ["u_1"]
        }
    }
]
export default routers