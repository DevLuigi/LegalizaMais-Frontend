import ServiceBase from '../config/serviceBase.js';

export default class ServiceAPI extends ServiceBase {
    constructor() {
        super('/service');
    }

    async getAllServices() {
        return await super.get('');
    }

    async saveService(body) {
        return await super.post('', body);
    }

    async updateService(id, body) {
        return await super.put(`/${id}`, body);
    }

    async deleteService(id) {
        return await super.delete(`/${id}`);
    }
}
