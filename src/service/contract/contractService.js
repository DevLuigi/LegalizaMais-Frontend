import ServiceBase from '../config/serviceBase.js';

export default class ContractApi extends ServiceBase {
    constructor() {
        super('/contract');
    }

    async getAll() {
        return await super.get('');
    }

    async save(body) {
        return await super.post('', body);
    }
}