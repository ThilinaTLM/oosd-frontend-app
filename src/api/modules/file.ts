import {apiConn} from "@/api/conn";
import {Status, toStatus} from "@/api/core";

export const fileApi = {
    async uploadAttachment(file: Blob): Promise<[string, Status]> {
        const form = new FormData()
        form.append('attachment', file)
        try {
            const res = await apiConn.post_file(`file/upload/attachment`, form)
            return [res.data.data, toStatus(res)]
        } catch (e) {
            return ['', toStatus(e.response)]
        }
    },

    async getAttachment() {

    }
}