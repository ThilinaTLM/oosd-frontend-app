import {AxiosResponse} from "axios";
import {apiConn} from "@/api/conn";


export const userApi = {
    /**
     * Get authenticated from backend
     * @param username
     * @param password
     */
    async login(username: string, password: string): Promise<[any, string]> {
        try {
            const res = await apiConn.post('user/login', {username, password});
            const {token, message, data} = res.data;
            apiConn.enableAuth(token)
            return [data, message];
        } catch (e) {
            const message = e.response.data.message;
            return [null, message]
        }
    },

    async logout(): Promise<string> {
        try {
            const res = await apiConn.get('user/logout');
            const {message} = res.data;
            apiConn.removeAuth()
            return message
        } catch (e) {
            const message = e.response.data.message
            return message
        }
    }
}