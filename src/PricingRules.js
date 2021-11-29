const { LineItems } = require('./Line');
const { Catalog } = require('./Catalog');

const voucher = 'VOUCHER';
const tshirt = 'TSHIRT';
const total = 'TOTAL_PRICE'

class PricingRules {
    constructor() {
        this.pricingRules = new Map();
        this.pricingRules.set(voucher, 5);
        this.pricingRules.set(tshirt, 19);
        this.pricingRules.set(total, 0);
    }

    reset() {
        this.pricingRules.clear();
    }
}

module.exports = {
    PricingRules,
};