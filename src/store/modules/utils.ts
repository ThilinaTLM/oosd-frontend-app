import {ActionTree, GetterTree, Module, MutationTree} from "vuex";
import {RootState} from "@/store";
import {api} from "@/api";

type Office = { name: string, address: string }

export interface UtilsData {
    divisions: Office[],
    gn_offices: Office[],
    roles: string[],
    comTypes: string[],
    comStates: string[]
}

const state: UtilsData = {
    divisions: [],
    gn_offices: [],
    roles: [
        'Administrator',
        'District Officer',
        'District Secretariat',
        'Divisional Officer',
        'Divisional Secretariat'
    ],
    comTypes: [
        'Direct to Division',
        'Direct to District',
        'By Presidential Office',
        'By Prime Minister Office',
        'By Third-party Department'
    ],
    comStates: [
        'Draft',
        'Awaiting Approval',
        'Approved',
        'Awaiting Accept',
        'In Progress',
        'Awaiting Div Sec Review',
        'Div Sec Reviewed',
        'Awaiting Dis Sec Reviewed',
        'Dis Sec Reviewed',
        'Solved',
        'Rejected'
    ]
}

const getters: GetterTree<UtilsData, RootState> = {
    getNameOnly_Divisions(state) {
        const name_only = []
        for (let i  = 0; i < state.divisions.length; i++) {
            name_only.push(state.divisions[i].name)
        }
        return name_only
    },
    getNameOnly_GnOffices(state) {
        const name_only = []
        for (let i  = 0; i < state.gn_offices.length; i++) {
            name_only.push(state.gn_offices[i].name)
        }
        return name_only
    }
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
    getters,
    mutations,
    actions
}