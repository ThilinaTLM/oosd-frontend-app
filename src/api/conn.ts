import axios, {AxiosInstance} from "axios";

class ApiConnection {
    static readonly instance = new ApiConnection();

    conn: AxiosInstance

    private constructor() {
        this.conn = axios.create({
            baseURL: "http://localhost:8000/api",
            timeout: 5000,
            headers: {}
        })
    }

    get = (url: string) => this.conn.get(url);
    post = (url: string, data: any) => this.conn.post(url, data);
    put = (url: string, data: any) => this.conn.put(url, data);
    delete = (url: string) => this.conn.delete(url);

    enableAuth(token: string) {
        this.conn.defaults.
            headers.Authorization = `Bearer ${token}`
    }

    removeAuth() {
        delete this.conn.defaults.
            headers.Authorization
    }
}

export const apiConn = ApiConnection.instance;