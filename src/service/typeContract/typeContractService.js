import ServiceBase from '../config/serviceBase.js';

export default class TypeContractApi extends ServiceBase {
    constructor() {
        super('/typeContract');
    }

    async getAll() {
        return await super.get('');
    }

    async getByName(name) {
        return await super.get(`/nomeTipo?nameType=${encodeURIComponent(name)}`);
    }

    async save(body) {
        return await super.post('', body);
    }
}