var readline = require('readline');
// TODO check for readline
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout

});

const { Pricing_Rules } = require('./PricingRules');
const { LineItems } = require('./Line');
const { Catalog } = require('../data/catalog.js');

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//to remove
console.log(Catalog, 'the catalog:');

class Checkout {
    constructor(rules = new PricingRules()) {
        const Pricing_Rules = rules;
    }
    /*
    rl.question("Enter cart items"), function (answer) {

    scan(readline()) {
        const receipt = new Receipt();

        // TODO process input

        return receipt;
    }
    */
    }
}

module.exports = {
    Checkout,
};