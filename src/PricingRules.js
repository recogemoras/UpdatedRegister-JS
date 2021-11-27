const { LineItems } = require('./Line');
const { Catalog } = require('./Catalog');

const voucher = 'VOUCHER';
const tshirt = 'TSHIRT';
const total = 'TOTAL_PRICE'

class PricingRules {
    constructor() {
        this.pricing_rules = new Map();
        pricing_rules.set(voucher, 5);
        pricing_rules.set(tshirt, 19)
    }

    applyVoucherPromo() {
        var quantity = this.lineItems.get(voucher);
        var totalOffers = Math.floor(quantity/2);
        var fullPriceItems = quantity%2;
        var voucherCost = Catalog.get(voucher).price;
        var voucherOffer = this.PricingRules.get(voucher);
        
        if (this.lineItems.get(voucher)>0){
            //TODO remove logs
            console.log('voucher price: ');
            console.log(voucherCost);
            
            //TODO Adjust total price in line
            this.lineItems.setTotalPrice(lineItems.getTotalPrice() + totalOffers*voucherOffer + fullPriceItems*voucherCost);
            //TODO remove logs
            console.log('Total price: ');
            console.log(this.lineItems.getTotalPrice());
        }
        return();
    }

    applyTshirtPromo() {
        // TODO calculations
        var tshirtQuantity = this.lineItems.get(tshirt);
        var tshirtCost = Catalog.get(tshirt).price;
        var tshirtOffer = this.PricingRules.get(tshirt);
        
        if (tshirtQuantity>=3){
            //TODO remove logs
            console.log('Tshirt price: ');
            console.log(tshirtCost);
            
            //TODO Adjust total price in line
            this.lineItems.setTotalPrice(lineItems.getTotalPrice() + quantity*tshirtOffer);
            //TODO remove logs
            console.log('Total price: ');
            console.log(this.lineItems.getTotalPrice());
        }
        else if (tshirtQuantity>0) {
            this.lineItems.setTotalPrice(lineItems.getTotalPrice() + quantity*tshirtCost);
        }
        return();
    }

    reset() {
        this.pricing_rules.clear();
    }
}

module.exports = {
    PricingRules,
};