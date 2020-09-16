import {GetterTree, Module, MutationTree} from "vuex";
import {RootState} from "@/store";

import {actions} from "./actions";

interface UserData {
    userId?: string
    role?: string
    firstName?: string
    lastName?: string
    email?: string
    telephoneNumber?: string
    office?: string
}

export interface UserState {
    authState: "NONE" | "TRYING" | "FAILED" | "PASS"
    userData?: UserData
}

const state: UserState = {
    authState: "NONE",
}

const getters: GetterTree<UserState, RootState> = {
    isTrying: (state) => state.authState === "TRYING",
    isAuthenticated: (state) => state.authState === "PASS"
}

const mutations: MutationTree<UserState> = {
    SET_AUTH_TRYING: (state) => {
        state.authState = "TRYING"
    },
    SET_AUTH_PASS: (state, payload) => {
        state.authState = "PASS";
        state.userData = payload;
    },
    SET_AUTH_FAILED: (state) => {
        state.authState = "FAILED"
    },
    CLEAR_AUTH_DATA: (state) => {
        state.authState = "NONE"
        state.userData = {}
    }
}

export const user_module: Module<UserState, RootState> = {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}