import { ActionTree } from "vuex";
import { RootState } from "@/store";
import { UserState } from "@/store/modules/user/index";
import { api } from "@/api";

export const actions: ActionTree<UserState, RootState> = {
    async login(store, payload) {
        store.commit('SET_AUTH_TRYING')
        const [userData, message] = await api.user.login(payload.username, payload.password)
        if (userData === null) {
            store.commit('SET_AUTH_FAILED')
            return
        }
        console.log(message)

        store.commit('SET_AUTH_PASS', userData)
    },

    async logout(store) {
        store.commit('CLEAR_AUTH_DATA')
        const message = await api.user.logout();
        console.log(message)
    }
}