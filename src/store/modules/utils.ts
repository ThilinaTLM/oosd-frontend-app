import {ActionTree, GetterTree, Module, MutationTree} from "vuex";
import {RootState} from "@/store";
import {api} from "@/api";

type Office = { name: string, address: string }

export interface UtilsData {
    divisions: Office[],
    gn_offices: Office[]
}

const state: UtilsData = {
    divisions: [],
    gn_offices: []
}

const mutations: MutationTree<UtilsData> = {
    SET_DIVISIONS(state, payload) {
        state.divisions = payload
    },
    ADD_DIVISION(state, payload) {
        state.divisions.push(payload)
    },
    SET_GN_OFFICES(state, payload) {
        state.gn_offices = payload
    },
    ADD_GN_OFFICE(state, payload) {
        state.gn_offices.push(payload)
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
    },

    async loadGNOffices(store) {
        const [divisions, status] = await api.util.getAllGNOffices()
        if (status.code === 200) {
            store.commit('SET_GN_OFFICES', divisions)
        }
        return status
    },

    async addGNOffice(store, payload) {
        const status = await api.util.addGNOffice(payload.name, payload.address)
        if (status.code === 200) {
            store.commit('ADD_GN_OFFICE', payload)
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