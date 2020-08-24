import Vue from 'vue'
import Vuex, {Module} from 'vuex'
import {user_module} from "@/store/modules/user";
import {metadata_module} from "@/store/modules/meta";

Vue.use(Vuex)

export interface RootState {}

export default new Vuex.Store<RootState>({
    modules: {
        user: user_module,
        metadata: metadata_module
    }
})

