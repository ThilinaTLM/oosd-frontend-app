import {GetterTree, Module, MutationTree} from "vuex";
import {RootState} from "@/store";

export interface UserState {
    authenticated: boolean;
    username?: string;
    token?: string;
    userData?: any;
}

const state: UserState = {
    authenticated: false
}

const mutations: MutationTree<UserState> = {
    set_username(state, payload: string) {
        state.username = payload;
    }
}

const getters: GetterTree<UserState, RootState> = {}


export const user_module: Module<UserState, RootState> = {
    namespaced: true,
    state,
    mutations,
    getters
}