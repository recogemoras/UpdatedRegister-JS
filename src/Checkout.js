// TODO check for readline
const io = require('console-read-write');

const { LineItems } = require('./Line');
const { Catalog } = require('./Catalog.js');
const { Pricing_Rules } = require('./PricingRules');

class Checkout {
    constructor(Pricing_Rules) {
        //TODO constructor process
        this.Pricing_Rules = Pricing_Rules;
    }

    scan(item) {
        
        // TODO process input
        var total = this.LineItems.getTotalPrice();
        io.write('Total for now is:\n');
        io.write(total);
        this.LineItems.add(item);
        io.write('Updated total:\n');
        io.write(this.LineItems.getTotalPrice());
        return this.LineItems;
    }
}



module.exports = {
    Checkout,
};

