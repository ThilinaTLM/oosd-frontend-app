import {AxiosResponse} from "axios";

export type Status = { code: number, message: string }

export function toStatus(res: AxiosResponse): Status {
    if (!res.status) {
        res.status = 500
    }
    return { code: res.status, message: res.data.message }
}