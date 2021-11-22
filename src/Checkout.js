
// TODO check for readline
const io = require('console-read-write');

const { Pricing_Rules } = require('./PricingRules');
const { LineItems } = require('./Line');
const { Catalog } = require('./Catalog.js');

//to remove
console.log(Catalog, 'the catalog:');

class Checkout {
    constructor(rules) {
        const Pricing_Rules = rules;
    }

    scan(item) {

        // TODO process input
        var total = LineItems.get
        io.write('Total for now is:');
    }
    */
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