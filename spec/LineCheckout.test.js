const { expect } = require('./expect');
const { Line, Catalog, PricingRules, Checkout } = require('../src');


describe('Checking out line items', () => {
    this.catalog = new Catalog();
    const pricing_rules = new PricingRules();

    it ('Should show a total of 0 as no items are added to the line', () => {
        var line = new Line();
        const lineItems = [];
        const checkout = new Checkout(pricing_rules);

        for (let item in lineItems) {
            line = checkout.scan(lineItems[item]);
        }
        //console.log(line.lineItems.get('TOTAL_PRICE'));
        expect(line.lineItems.get('TOTAL_PRICE')).to.equal(0);
    });

    it ('Should show a total of 32.5 with one TSHIRT one VOUCHER and one PANTS', () => {
        var line = new Line();
        const lineItems = ['TSHIRT', 'VOUCHER', 'PANTS'];
        const checkout = new Checkout(pricing_rules);

        for (let item in lineItems) {
            //console.log(lineItems[item]);
            line = checkout.scan(lineItems[item]);
        }

        //console.log(line.lineItems.getTotalPrice());
        expect(line.lineItems.get('TOTAL_PRICE')).to.equal(32.5);
    });

    it ('Should show a total of 32.5 with one TSHIRT one VOUCHER and one PANTS in any order', () => {
        var line = new Line();
        //console.log(line.lineItems);
        const lineItems = ['PANTS', 'TSHIRT', 'VOUCHER'];
        const checkout = new Checkout(pricing_rules);

        for (let item in lineItems) {
            //console.log(lineItems[item]);
            line = checkout.scan(lineItems[item]);
        }

        expect(line.lineItems.get('TOTAL_PRICE')).to.equal(32.5);
    });

    it ('Should show a total of 25 with one TSHIRT and two VOUCHERs in any order', () => {
        var line = new Line();
        //console.log(line.lineItems);
        const lineItems = ['VOUCHER', 'TSHIRT', 'VOUCHER'];
        const checkout = new Checkout(pricing_rules);

        for (let item in lineItems) {
            //console.log(lineItems[item]);
            line = checkout.scan(lineItems[item]);
        }

        expect(line.lineItems.get('TOTAL_PRICE')).to.equal(25);
    });

    it ('Should show a total of 81 with 4 TSHIRTs and one VOUCHER in any order', () => {
        var line = new Line();
        //console.log(line.lineItems);
        const lineItems = ['TSHIRT', 'TSHIRT', 'TSHIRT', 'VOUCHER', 'TSHIRT'];
        const checkout = new Checkout(pricing_rules);

        for (let item in lineItems) {
            //console.log(lineItems[item]);
            line = checkout.scan(lineItems[item]);
        }

        expect(line.lineItems.get('TOTAL_PRICE')).to.equal(81);
    });

    it ('Should show a total of 74.5 with 3 TSHIRTs, 3 VOUCHERs and one PANT in any order', () => {
        var line = new Line();
        //console.log(line.lineItems);
        const lineItems = ['VOUCHER', 'TSHIRT', 'VOUCHER', 'VOUCHER', 'PANTS', 'TSHIRT', 'TSHIRT'];
        const checkout = new Checkout(pricing_rules);

        for (let item in lineItems) {
            //console.log(lineItems[item]);
            line = checkout.scan(lineItems[item]);
        }

        expect(line.lineItems.get('TOTAL_PRICE')).to.equal(74.5);
    });
        
});