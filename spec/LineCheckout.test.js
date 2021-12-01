const { expect } = require('./expect');
const { Line, PricingRules, Checkout } = require('../src');


describe('Checking out line items', () => {
    const pricing_rules = new PricingRules();

    it ('Should show a total of 0 as no items are added to the line', () => {
        var line = new Line();
        const lineItems = [];
        const checkout = new Checkout(pricing_rules);

        for (let item in lineItems) {
            line = checkout.scan(lineItems[item]);
        }

        expect(line.lineItems.get('TOTAL_PRICE')).to.equal(0);
    });

    it ('Should show a total of 32.5 with one TSHIRT one VOUCHER and one PANTS', () => {
        var line = new Line();
        const lineItems = ['TSHIRT', 'VOUCHER', 'PANTS'];
        const checkout = new Checkout(pricing_rules);

        for (let item in lineItems) {
            line = checkout.scan(lineItems[item]);
        }

        expect(line.lineItems.get('TOTAL_PRICE')).to.equal(32.5);
    });

    it ('Should show a total of 32.5 with one TSHIRT one VOUCHER and one PANTS in any order', () => {
        var line = new Line();
        const lineItems = ['PANTS', 'TSHIRT', 'VOUCHER'];
        const checkout = new Checkout(pricing_rules);

        for (let item in lineItems) {
            line = checkout.scan(lineItems[item]);
        }

        expect(line.lineItems.get('TOTAL_PRICE')).to.equal(32.5);
    });

    it ('Should show a total of 25 with one TSHIRT and two VOUCHERs in any order', () => {
        var line = new Line();
        const lineItems = ['VOUCHER', 'TSHIRT', 'VOUCHER'];
        const checkout = new Checkout(pricing_rules);

        for (let item in lineItems) {
            line = checkout.scan(lineItems[item]);
        }

        expect(line.lineItems.get('TOTAL_PRICE')).to.equal(25);
    });

    it ('Should show a total of 81 with 4 TSHIRTs and one VOUCHER in any order', () => {
        var line = new Line();
        const lineItems = ['TSHIRT', 'TSHIRT', 'TSHIRT', 'VOUCHER', 'TSHIRT'];
        const checkout = new Checkout(pricing_rules);

        for (let item in lineItems) {
            line = checkout.scan(lineItems[item]);
        }

        expect(line.lineItems.get('TOTAL_PRICE')).to.equal(81);
    });

    it ('Should show a total of 74.5 with 3 TSHIRTs, 3 VOUCHERs and one PANT in any order', () => {
        var line = new Line();
        const lineItems = ['VOUCHER', 'TSHIRT', 'VOUCHER', 'VOUCHER', 'PANTS', 'TSHIRT', 'TSHIRT'];
        const checkout = new Checkout(pricing_rules);

        for (let item in lineItems) {
            line = checkout.scan(lineItems[item]);
        }

        expect(line.lineItems.get('TOTAL_PRICE')).to.equal(74.5);
    });

    it ('Should show a total of 74.5 with 3 TSHIRTs, 4 VOUCHERs and one PANT in any order', () => {
        var line = new Line();
        const lineItems = ['VOUCHER', 'TSHIRT', 'VOUCHER', 'VOUCHER', 'PANTS', 'TSHIRT', 'TSHIRT', 'VOUCHER'];
        const checkout = new Checkout(pricing_rules);

        for (let item in lineItems) {
            line = checkout.scan(lineItems[item]);
        }

        expect(line.lineItems.get('TOTAL_PRICE')).to.equal(74.5);
    });

    it ('Should show a total of 107.5 with 5 TSHIRTs, 2 VOUCHERs and one PANT in any order', () => {
        var line = new Line();
        const lineItems = ['VOUCHER', 'TSHIRT', 'TSHIRT', 'VOUCHER', 'PANTS', 'TSHIRT', 'TSHIRT', 'TSHIRT'];
        const checkout = new Checkout(pricing_rules);

        for (let item in lineItems) {
            line = checkout.scan(lineItems[item]);
        }

        expect(line.lineItems.get('TOTAL_PRICE')).to.equal(107.5);
    });

    it ('Should show a total of 37.5 with one TSHIRT, 3 VOUCHERs, one PANT and an unidentified item, in any order', () => {
        var line = new Line();
        const lineItems = ['VOUCHER', 'camisole', 'VOUCHER', 'PANTS', 'TSHIRT', 'VOUCHER'];
        const checkout = new Checkout(pricing_rules);

        for (let item in lineItems) {
            line = checkout.scan(lineItems[item]);
        }

        expect(line.lineItems.get('TOTAL_PRICE')).to.equal(37.5);
    });
        
    it ('Should show a total of 45 with one TSHIRT, 3 VOUCHERs and two PANTs, in any order', () => {
        var line = new Line();
        const lineItems = ['VOUCHER', 'PANTS', 'VOUCHER', 'PANTS', 'TSHIRT', 'VOUCHER'];
        const checkout = new Checkout(pricing_rules);

        for (let item in lineItems) {
            line = checkout.scan(lineItems[item]);
        }

        expect(line.lineItems.get('TOTAL_PRICE')).to.equal(45);
    });

    it ('Should show a total of 65 with 2 TSHIRTs, 4 VOUCHERs and two PANTs, in any order', () => {
        var line = new Line();
        const lineItems = ['VOUCHER', 'PANTS', 'VOUCHER', 'PANTS', 'TSHIRT', 'VOUCHER', 'VOUCHER', 'TSHIRT'];
        const checkout = new Checkout(pricing_rules);

        for (let item in lineItems) {
            line = checkout.scan(lineItems[item]);
        }

        expect(line.lineItems.get('TOTAL_PRICE')).to.equal(65);
    });

    it ('Should show a total of 82 with 3 TSHIRTs, 4 VOUCHERs and two PANTs, in any order', () => {
        var line = new Line();
        const lineItems = ['VOUCHER', 'PANTS', 'VOUCHER', 'PANTS', 'TSHIRT', 'VOUCHER', 'VOUCHER', 'TSHIRT', 'TSHIRT'];
        const checkout = new Checkout(pricing_rules);

        for (let item in lineItems) {
            line = checkout.scan(lineItems[item]);
        }

        expect(line.lineItems.get('TOTAL_PRICE')).to.equal(82);
    });

    it ('Should show a total of 47.5 with one TSHIRT, one VOUCHER and 3 PANTs, in any order', () => {
        var line = new Line();
        const lineItems = ['VOUCHER', 'PANTS', 'PANTS', 'TSHIRT', 'PANTS'];
        const checkout = new Checkout(pricing_rules);

        for (let item in lineItems) {
            line = checkout.scan(lineItems[item]);
        }

        expect(line.lineItems.get('TOTAL_PRICE')).to.equal(47.5);
    });
});