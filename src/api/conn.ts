import axios, {AxiosInstance} from "axios";

const LOCAL_API = "http://localhost:8000"
const REMOTE_API = "http://ec2-54-237-84-93.compute-1.amazonaws.com:8000"

class ApiConnection {
    static readonly instance = new ApiConnection();

    conn: AxiosInstance

    private constructor() {

        this.conn = axios.create({
            baseURL: REMOTE_API,
            timeout: 10000,
            headers: {}
        })
    }

    get = (url: string, query: any = undefined) => this.conn.get(url, {params: query});
    post = (url: string, data: any = undefined, query: any = undefined) => this.conn.post(url, data, {params: query});
    put = (url: string, data: any = undefined, query: any = undefined) => this.conn.put(url, data, {params: query})

    post_file = (url: string, formData: FormData) => this.conn.post(url, formData,
        {headers: {'Content-Type': 'multipart/form-data'}}
    )

    enableAuth(token: string) {
        this.conn.defaults.headers.Authorization = `Bearer ${token}`
    }

    removeAuth() {
        delete this.conn.defaults.headers.Authorization
    }
}

export const apiConn = ApiConnection.instance;