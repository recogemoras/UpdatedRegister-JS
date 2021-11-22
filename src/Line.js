const total = 'TOTAL_PRICE';

class Line {
    constructor() {
        this.lineItems = new Map();
        lineItems.set('VOUCHER', 0);
        lineItems.set('TSHIRT', 0);
        lineItems.set('PANTS', 0);
        lineItems.set('TOTAL_PRICE', 0);
    }

    addItem(itemCode) {
        this.lineItems.set(itemCode, lineItems.get(itemCode)+1);
    }

    getQuantityOfItem(itemCode) {
        return this.lineItems.get(itemCode, lineItems.get(itemCode));
    }

    setTotalPrice(totalPrice) {
        this.lineItems.set(total, totalPrice);
    }

    getTotalPrice() {
        return this.lineItems.get(total)
    }

    reset() {
        this.lineItems.clear();
    }
}

module.exports = {
    Line,
};