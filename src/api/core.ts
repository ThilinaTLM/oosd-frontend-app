import {AxiosResponse} from "axios";

export type Status = { code: number, message: string }

export function toStatus(res: AxiosResponse): Status {
    return { code: res.status, message: res.data.message }
}