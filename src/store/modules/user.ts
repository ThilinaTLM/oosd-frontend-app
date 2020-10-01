import {ActionTree, GetterTree, Module, MutationTree} from "vuex";
import {RootState} from "@/store";
import {api} from "@/api";

export interface UserState {
    token?: string
    userData: {
        userId?: string | null
        role?: string
        firstName?: string
        lastName?: string
        email?: string
        telephoneNumber?: string
        office?: string
    } | null
}

const state: UserState = {
    userData: null
}

const getters: GetterTree<UserState, RootState> = {
    isAuth(state) {
        return state.userData !== null
    }
}

const mutations: MutationTree<UserState> = {
    SET_USER_DATA: (state, payload) => {
        state.userData = payload
    },

    CLEAR_USER_DATA: (state) => {
        state.userData = null
    },

    SET_TOKEN(state, payload) {
        state.token = payload
    }
}

export const actions: ActionTree<UserState, RootState> = {
    async login(store, payload) {
        const [data, status] = await api.user.login(payload.username, payload.password)
        if (status.code === 200) {
            store.commit('SET_USER_DATA', data.userData)
            store.commit('SET_TOKEN', data.token)
            store.dispatch('setLocalStorage')
            api.token.set(data.token)
        }
        console.log(status)
        return status
    },

    loadLocalStorage(store) {
        if (store.state.userData != null) {
            return
        }

        const token = localStorage.getItem('token')
        const userData = localStorage.getItem('userData')
        if (token && userData) {
            store.commit('SET_USER_DATA', JSON.parse(userData))
            store.commit('SET_TOKEN', token)
            api.token.set(token)
        } else {
            localStorage.clear()
        }
    },

    setLocalStorage(store) {
        localStorage.clear()
        const {token, userData} = store.state
        if (token && userData) {
            localStorage.setItem('token', token)
            localStorage.setItem('userData', JSON.stringify(userData))
        }
    },

    async logout(store) {
        store.commit('CLEAR_USER_DATA')
        api.token.remove()
        localStorage.clear()
    }
}

export const user_module: Module<UserState, RootState> = {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}