import ServiceBase from '../config/serviceBase.js';

export default class UserAPI extends ServiceBase {
    constructor() {
        super('/user');
    }

    async getUserById(id) {
        return await super.get(`/${id}`);
    }

    async register(body) {
        return await super.post('', body);
    }
}