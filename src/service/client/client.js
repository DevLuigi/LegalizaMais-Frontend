import ServiceBase from '../config/serviceBase.js';

export default class ClientAPI extends ServiceBase {
    constructor() {
        super('/client');
    }

    async getAllClients() {
        return await super.get('');
    }

    async getClientById(id) {
        return await super.get(`/${id}`);
    }

    async register(body) {
        return await super.post('', body);
    }
}