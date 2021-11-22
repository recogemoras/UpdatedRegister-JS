class Line {
    constructor() {
        this.items = new Map();
        items.set('VOUCHER', 0);
        items.set('TSHIRT', 0);
        items.set('PANTS', 0);
        items.set('TOTAL_PRICE', 0);

        let lineItems Object.fromEntries(map.entries());
    }

    addItem(itemCode) {
        this.items.set(itemCode, lineItems.get(itemCode)+1);
    }

    getQuantityOfItem(itemCode) {
        return this.items.get(itemCode, lineItems.get(itemCode));
    }

    reset() {
        this.items.clear();
    }
}

module.exports = {
    Line,
};