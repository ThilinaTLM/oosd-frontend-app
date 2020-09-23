import {apiConn} from "@/api/conn";
import {toStatus, Status} from "@/api/core";

export const userApi = {
    /**
     * Check whether a username is already registered
     * @param username
     * @return true/false (true if exist)
     */
    async checkUsername(username: string): Promise<[boolean, Status]> {
        try {
            const res = await apiConn.get(`user/check-username/${username}`)
            return [res.data.data, toStatus(res)]
        } catch (e) {
            return [e.response.data.data, toStatus(e.response)]
        }
    },

    /**
     * Register a new user to the system
     * @param userData
     * @return userId
     */
    async register(userData: any): Promise<[string, Status]> {
      try {
          const res = await apiConn.post('user/register', userData)
          return [res.data.data, toStatus(res)]
      } catch (e) {
          return [e.response.data.data, toStatus(e.response)]
      }
    },

    /**
     * Authenticated with backend
     * @param username
     * @param password
     * @return UserData
     */
    async login(username: string, password: string): Promise<[any, Status]> {
        try {
            const res = await apiConn.post('user/login', {username, password});
            const {token, data} = res.data;
            return [{token, userData:data}, toStatus(res)];
        } catch (e) {
            return [null, toStatus(e.response)]
        }
    },

    /**
     * Get list of users with given parameters
     * @param userId
     */
    async getUser(userId: string): Promise<[any, Status]> {
        try {
            const res = await apiConn.get('user/get-user', {userId});
            return [res.data.data, toStatus(res)];
        } catch (e) {
            return [null, toStatus(e.response)]
        }
    }
}