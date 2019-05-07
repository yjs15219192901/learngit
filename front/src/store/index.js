const store = {
    state: {
        isLogin: false
    },
    mutations: {
        login(state) {
            state.isLogin = true
        }
    }
}
export default store