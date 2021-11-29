const { expect } = require('./expect');
const { Line, Catalog, PricingRules, Checkout } = require('../src');


describe('Checking out line items', () => {
    const catalog = new Catalog();
    const pricing_rules = new PricingRules();

    it ('Should show a total of 0 as no items are added to the line', () => {
        const line = new Line();
        const lineItems = [];
        const checkout = new Checkout(pricing_rules);

        for (item in lineItems){
            line = checkout.scan(item);
        }
        
        expect(line.getTotalPrice()).to.equal(0);
    });
        
});