class Catalog {
    constructor() {
        this.catalog = new Map();
        this.catalog.set('VOUCHER', 5);
        this.catalog.set('TSHIRT', 20);
        this.catalog.set('PANTS', 7.5);
    }
}

module.exports = {
    Catalog,
};