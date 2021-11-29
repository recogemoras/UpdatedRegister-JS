const { Line } = require('./Line');

class Checkout {
    constructor(Pricing_Rules) {
        this.pricingRules = Pricing_Rules;
        this.lineItems = new Line();
    }

    scan(item) {
        var self = this;
        //console.log(this.lineItems.lineItems);
        self.lineItems.addItem(item);
        return self.lineItems;
    }
}

module.exports = {
    Checkout,
};

