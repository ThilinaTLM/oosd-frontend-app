import {ActionTree, GetterTree, Module, MutationTree} from "vuex";
import {RootState} from "@/store";

export interface MetaDataState {
    complaints?: {
        all: number,
        solved: number,
        rejected: number
    }
}

const state: MetaDataState = {

}

const mutations: MutationTree<MetaDataState> = {

}

const getters: GetterTree<MetaDataState, RootState> = {

}

const actions: ActionTree<MetaDataState, RootState> = {

}

export const metadata_module: Module<MetaDataState, RootState> = {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}