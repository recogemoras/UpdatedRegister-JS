const { Line } = require('./Line');

class PricingRules {
    constructor() {
        this.pricing_rules = new Map();
        pricing_rules.set('VOUCHER_pairs', 5);
        pricing_rules.set('TSHIRT_unit', 19)
    }

    applyVoucherPromo(lineItems) {
        if (lineItems.get('VOUCHER')>0){
            var quantity = lineItems.get('VOUCHER');
            var totalOffers = quantity/2;
            var fullPrice = quantity%2;

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