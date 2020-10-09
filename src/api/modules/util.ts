import {apiConn} from "@/api/conn";
import {toStatus, Status} from "@/api/core";

export const utilApi = {
    async addDivision(name: string, address: string): Promise<Status> {
        try {
            const res = await apiConn.post('api/util/add-div', {name, address})
            return toStatus(res)
        } catch (e) {
            return toStatus(e.response)
        }
    },

    async getAllDivisions(): Promise<[any[], Status]> {
        try {
            const res = await apiConn.get('api/util/all-divs')
            return [res.data.data, toStatus(res)]
        } catch (e) {
            console.log(e.response.data)
            return [e.response.data.data, toStatus(e.response)]
        }
    },

    async addGNOffice(name: string, address: string): Promise<Status> {
        try {
            const res = await apiConn.post('api/util/add-gn-office', {name, address})
            return toStatus(res)
        } catch (e) {
            return toStatus(e.response)
        }
    },

    async getAllGNOffices(): Promise<[any[], Status]> {
        try {
            const res = await apiConn.get('api/util/all-gn-offices')
            return [res.data.data, toStatus(res)]
        } catch (e) {
            console.log(e.response.data)
            return [e.response.data.data, toStatus(e.response)]
        }
    }
}