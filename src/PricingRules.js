const { Line } = require('./Line');
const voucher = 'VOUCHER';
const tshirt = 'TSHIRT';

class PricingRules {
    constructor() {
        this.pricing_rules = new Map();
        pricing_rules.set('VOUCHER_pairs', 5);
        pricing_rules.set('TSHIRT_unit', 19)
    }

    applyVoucherPromo(lineItems) {
        if (lineItems.get(voucher)>0){
            var quantity = lineItems.get(voucher);
            var totalOffers = Math.floor(quantity/2);
            var fullPriceItems = quantity%2;
            //TODO Adjust total price in line
        }
        this.prices.set(item, price);
    }

    applyTshirtPromo(lineItems) {
        // TODO calculations
    }

    reset() {
        this.pricing_rules.clear();
    }
}

module.exports = {
    PricingRules,
};