import axios, {AxiosInstance} from "axios";

const LOCAL_API = "http://localhost:8000/api"
const DEV_REMOTE = "https://oosd-backend-api.herokuapp.com/api"

class ApiConnection {
    static readonly instance = new ApiConnection();

    conn: AxiosInstance

    private constructor() {
        this.conn = axios.create({
            baseURL: DEV_REMOTE,
            timeout: 5000,
            headers: {}
        })
    }

    get = (url: string, query: any = undefined) => this.conn.get(url, {params: query});
    post = (url: string, data: any, query: any = undefined) => this.conn.post(url, data, {params: query});
    put = (url: string, data: any, query: any = undefined) => this.conn.put(url, data, {params: query});

    enableAuth(token: string) {
        this.conn.defaults.headers.Authorization = `Bearer ${token}`
    }

    removeAuth() {
        delete this.conn.defaults.headers.Authorization
    }
}

export const apiConn = ApiConnection.instance;