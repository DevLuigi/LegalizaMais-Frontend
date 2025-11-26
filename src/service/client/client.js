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

    async saveClient(body) {
        return await super.post('', body);
    }

    async updateClient(id, body) {
        return await super.put(`/${id}`, body);
    }

    async deleteClient(id) {
        return await super.delete(`/${id}`);
    }
}
