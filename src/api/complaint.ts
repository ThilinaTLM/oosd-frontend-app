import {Status, toStatus} from "@/api/core";
import {apiConn} from "@/api/conn";

export const complaintApi = {
    async addComplaint(complaintData: any): Promise<[string, Status]> {
        try {
            const res = await apiConn.post('complaint/add-complaint', complaintData)
            return [res.data.data, toStatus(res)]
        } catch (e) {
            return ['', toStatus(e.response)]
        }
    },

    async addAttachment(complaintId: string, attachmentId: string): Promise<Status> {
        try {
            const res = await apiConn.post(`complaint/add-attachment/${complaintId}/${attachmentId}`)
            return toStatus(res)
        } catch (e) {
            return toStatus(e.response)
        }
    },

    async getComplaints(condition: any): Promise<[any[], Status]> {
        try {
            const res = await apiConn.get(`complaint/get-complaint`, condition)
            return [res.data.data, toStatus(res)]
        } catch (e) {
            return [[], toStatus(e.response)]
        }
    },

    async getAttachments(complaintId: string): Promise<[any[], Status]> {
        try {
            const res = await apiConn.get(`get-attachments/${complaintId}`)
            return [res.data.data, toStatus(res)]
        } catch (e) {
            return [[], toStatus(e.response)]
        }
    }

}