const { Catalog } = require('./Catalog');
const { PricingRules } = require('./PricingRules');

const Voucher = 'VOUCHER';
const Tshirt = 'TSHIRT';
const Pants = 'PANTS';
const Total = 'TOTAL_PRICE';

class Line {
    constructor() {
        this.lineItems = new Map();
        this.lineItems.set(Voucher, 0);
        this.lineItems.set(Tshirt, 0);
        this.lineItems.set(Pants, 0);
        this.lineItems.set(Total, 0);
        this.catalog = new Catalog();
        this.pricing = new PricingRules();
    }

    addItem(itemCode) {
        if (this.lineItems.has(itemCode)) {
            var itemQuantity = this.lineItems.get(itemCode);

            this.lineItems.set(itemCode, itemQuantity + 1);
            this.applyPromos(itemCode);
        }
    }

    applyPromos(itemCode) {
        if (itemCode != Pants) {
            this.addPromos();
        }
        else {
            this.addPants();
        }
    }

    addPants() {
        var pants = this.lineItems.get(Pants);
        var pantsCost = this.catalog.catalog.get(Pants);
        var totalPrice = this.lineItems.get(Total);
        
        this.lineItems.set(Total, totalPrice + pantsCost);
    }

    addPromos() {
        var vouchers = this.lineItems.get(Voucher);
        var pants = this.lineItems.get(Pants);
        var tshirts = this.lineItems.get(Tshirt);
        
        var voucherOffers = Math.floor(vouchers/2);
        var vouchersFull = vouchers%2;
        var voucherFullCost = this.catalog.catalog.get(Voucher);
        var voucherOfferCost = this.pricing.pricingRules.get(Voucher);

        var tshirtFullCost = this.catalog.catalog.get(Tshirt);
        var tshirtOfferCost = this.pricing.pricingRules.get(Tshirt);

        var totalPrice = 0;
        
        if (vouchers > 1){
            totalPrice += voucherOffers*voucherOfferCost + vouchersFull*voucherFullCost;
        }
        else {
            totalPrice += voucherFullCost;
        }

        if (tshirts >= 3) {
            totalPrice += tshirts*tshirtOfferCost;
        }
        else if (tshirts > 0) {
            totalPrice += tshirts*tshirtFullCost;
        }
        
        this.lineItems.set(Total, totalPrice);

        if (pants > 0) {
            this.addPants();
        }
    }

    reset() {
        this.lineItems.clear();
    }
}


module.exports = {
    Line,
};