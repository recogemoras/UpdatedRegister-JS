
// TODO check for readline
const io = require('console-read-write');

const { LineItems } = require('./Line');
const { Catalog } = require('./Catalog.js');
const { Pricing_Rules } = require('./PricingRules');
//TODO remove writes and new if required
io.write(this.LineItems);
this.LineItems = new Line();
io.write('After new:');
io.write(this.LineItems);

//to remove
console.log('the catalog:', Catalog);

class Checkout {
    constructor(Pricing_Rules) {
        //TODO constructor process
        this.Pricing_Rules = Pricing_Rules;
    }

    scan(item) {

        // TODO process input
        var total = this.LineItems.getTotalPrice();
        io.write('Total for now is:');
        io.write(total);
        this.LineItems.add(item);
        io.write('Updated total:');
        io.write(this.LineItems.getTotalPrice());
    }
}

async function main() {
    // Simple readline scenario
    io.write('Please list the items in your cart');
    while (io.write(await io.read())) {
        const checkout = new Checkout(new PricingRules());
        while (io.read()) {
            checkout.scan(io.read());
        }
    }
}

main();

module.exports = {
    Checkout,
};