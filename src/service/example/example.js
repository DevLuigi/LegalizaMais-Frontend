import ServiceBase from '../config/serviceBase.js';

export default class ExampleAPI extends ServiceBase {
    constructor() {
        super('/example');
    }

    async getAllExamples() {
        return await super.get('');
    }

    async saveExample(body) {
        return await super.post('', body);
    }
}