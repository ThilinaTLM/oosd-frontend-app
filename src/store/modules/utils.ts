import {ActionTree, GetterTree, Module, MutationTree} from "vuex";
import {RootState} from "@/store";
import {api} from "@/api";

type Division = { name: string, address: string }

export interface UtilsData {
    divisions: Division[],
}

const state: UtilsData = {
    divisions: []
}

const mutations: MutationTree<UtilsData> = {
    SET_DIVISIONS(state, payload) {
        state.divisions = payload
    },
    ADD_DIVISION(state, payload) {
        state.divisions.push(payload)
    }
}

const actions: ActionTree<UtilsData, RootState> = {
    async loadDivisions(store) {
        const [divisions, status] = await api.util.getAllDivisions()
        if (status.code === 200) {
            store.commit('SET_DIVISIONS', divisions)
        }
        return status
    },

    async addDivision(store, payload) {
        const status = await api.util.addDivision(payload.name, payload.address)
        if (status.code === 200) {
            store.commit('ADD_DIVISION', payload)
        }
        return status
    }
}

export const utils_module: Module<UtilsData, RootState> = {
    namespaced: true,
    state,
    mutations,
    actions
}