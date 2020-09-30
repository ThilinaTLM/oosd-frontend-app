import { GetterTree, Module, MutationTree} from "vuex";
import {RootState} from "@/store";

export interface AppState {
    showMessage: boolean,
    message: {
        title: string,
        msg: string,
        type: 'INFO' | 'DONE' | 'WARN' | 'ERROR'
    }
}

const state: AppState = {
    showMessage: false,
    message: {
        title: 'Hi!',
        msg: 'Welcome',
        type: 'INFO'
    }
}

const getters: GetterTree<AppState, RootState> = {

}

const mutations: MutationTree<AppState> = {
    SHOW_MSG(state, payload) {
        state.showMessage = false
        Object.assign(state.message, payload)
        state.showMessage = true
    }
}

export const app_module: Module<AppState, RootState> = {
    namespaced: true,
    state,
    mutations,
    getters
}