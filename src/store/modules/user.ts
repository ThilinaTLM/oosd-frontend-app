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
        const [{token, userData}, status] = await api.user.login(payload.username, payload.password)
        if (userData !== null) {
            store.commit('SET_USER_DATA', userData)
            store.commit('SET_TOKEN', token)
            store.dispatch('setLocalStorage')
            api.token.set(token)
        }
        return status
    },

    loadLocalStorage(store) {
        const token = localStorage.getItem('token')
        const userData = localStorage.getItem('userData')
        if (token && userData) {
            store.commit('SET_USER_DATA', JSON.parse(userData))
            store.commit('SET_TOKEN', token)
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