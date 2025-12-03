import ServiceBase from '../config/serviceBase.js';

export default class BudgetItemApi extends ServiceBase {
    constructor() {
        super('/budgetItem');
    }

    async save(body) {
        return await super.post('', body);
    }
}