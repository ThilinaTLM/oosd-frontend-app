import {userApi} from "@/api/user";
import {utilApi} from "@/api/util";
import {apiConn} from "@/api/conn";
import {complaintApi} from "@/api/complaint";
import {fileApi} from "@/api/file";

const token = {
    set(token: string) {
        apiConn.enableAuth(token)
    },
    remove() {
        apiConn.removeAuth()
    }
}

export const api = {
    user: userApi,
    util: utilApi,
    complaint: complaintApi,
    file: fileApi,
    token
}