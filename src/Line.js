const total = 'TOTAL_PRICE';

class Line {
    constructor() {
        this.lineItems = new Map();
        this.lineItems.set('VOUCHER', 0);
        this.lineItems.set('TSHIRT', 0);
        this.lineItems.set('PANTS', 0);
        this.lineItems.set('TOTAL_PRICE', 0);
    }

    addItem(itemCode) {
        if (this.lineItems.has(itemCode)) {
            this.lineItems.set(itemCode, this.lineItems.get(itemCode)+1);
        }
        //TODO remove else
        else {
            console.log('Not a catalog item');
        }
    }

    getQuantityOfItem(itemCode) {
        return this.lineItems.get(itemCode, this.lineItems.get(itemCode));
    }

    setTotalPrice(totalPrice) {
        this.lineItems.set(total, totalPrice);
    }

    getTotalPrice() {
        if (this.lineItems.get(total)) {
            return this.lineItems.get(total);
        }
        return 0;
    }

    reset() {
        this.lineItems.clear();
    }
}

module.exports = {
    Line,
};