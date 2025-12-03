import ServiceBase from '../config/serviceBase.js';

export default class ContractApi extends ServiceBase {
    constructor() {
        super('/budget');
    }

    async getAll() {
        return await super.get('');
    }

    async getAllByUserId(id) {
        return await super.get(`/${id}`);
    }

    async getById(id) {
        return await super.get(`/idBudget/${id}`);
    }

    async save(body) {
        return await super.post('', body);
    }
}