import axios from "axios";

export default class TodoService {

    static async getAll(){
        return axios.get('/todos')
    }

    static async createTodo(params){
        return axios.post('/todos',params)
    }
}